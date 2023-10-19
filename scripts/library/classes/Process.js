import { system } from '@minecraft/server';
import { WorldLogger } from './Logger';

const Logger = new WorldLogger('info');
export class ProcessHandler {
  constructor() {
    this.processQueue = [];
    this.activeProcesses = new Map();
    this.defaultDuration = Infinity;
    this.stoppedProcesses = new Set();
    this.errorLog = new WorldLogger('error');
    
    this.processInterval = system.runInterval(() => {
      this.processGenerator().next();
    });

    this.printProgress();
  }

  *processGenerator() {
    while (this.processQueue.length > 0) {
      const { processId, func, duration } = this.processQueue.shift();
      yield this.startProcess(processId, func, duration);
    }
  }

  *startProcess(processId, func, duration) {
    if (!this.activeProcesses.has(processId)) {
      const intervalId = system.runInterval(() => {
        try {
          func();
        } catch (error) {
          this.errorLog.log(`Error in process with ID ${processId}: ${error}`);
        }
      }, duration);

      const startTime = Date.now();
      this.activeProcesses.set(processId, { intervalId, startTime });

      Logger.log('[Process]', `Process with ID ${processId} started.`, 'info');

      while (Date.now() - startTime < duration) {
        yield;
      }

      system.clearRun(intervalId);
      this.activeProcesses.delete(processId);

      Logger.log('[Process]', `Process with ID ${processId} completed.`, 'info');
    } else {
      Logger.log('[Process]', `Process with ID ${processId} is already running.`, 'info');
    }
  }

  *pauseProcess(processId) {
    if (this.activeProcesses.has(processId)) {
      const { intervalId } = this.activeProcesses.get(processId);
      system.clearRunInterval(intervalId);
      this.activeProcesses.delete(processId);
      this.stoppedProcesses.add(processId);

      Logger.log('[Process]', `Process with ID ${processId} paused.`, 'info');
    } else {
      Logger.log('[Process]', `Process with ID ${processId} is not running.`, 'info');
    }
  }

  *resumeProcess(processId, func, duration) {
    if (this.stoppedProcesses.has(processId)) {
      const intervalId = system.runInterval(() => {
        try {
          func();
        } catch (error) {
          Logger.log('[Process]', `Error in process with ID ${processId}: ${error}`);
        }
      }, duration);

      this.activeProcesses.set(processId, { intervalId, startTime: Date.now() });
      this.stoppedProcesses.delete(processId);

      Logger.log('[Process]', `Process with ID ${processId} resumed.`, 'info');
    } else {
      Logger.log('[Process]', `Process with ID ${processId} is already running.`, 'info');
    }
  }

  *stopProcess(processId) {
    if (this.activeProcesses.has(processId)) {
      const { intervalId } = this.activeProcesses.get(processId);
      system.clearRun(intervalId);
      this.activeProcesses.delete(processId);
      this.stoppedProcesses.add(processId);
 
      Logger.log('[Process]', `Process with ID ${processId} stopped.`, 'info');
    } else {
      Logger.log('[Process]', `Process with ID ${processId} is not running.`, 'info');
    }
  }

  *shutdown() {
    for (const { intervalId } of this.activeProcesses.values()) {
      system.clearRun(intervalId);
    }
    this.activeProcesses.clear();
    system.clearRun(this.processInterval);

    Logger.log('[Process]', 'All processes stopped.', 'info');
  }

  *getStoppedProcesses() {
    yield* this.stoppedProcesses;
  }
/**
 * @private
 */
  *printProgress() {
    for (const [processId, { startTime }] of this.activeProcesses.entries()) {
      const process = this.processQueue.find((p) => p.processId === processId);

      if (process) {
        const { duration } = process;
        const elapsedTime = new Date().getTime() - startTime;
        const percent = elapsedTime / duration;
        const progressBar = this.generateProgressBar(percent);

        Logger.log('[Process]', `Process with ID ${processId}: ${progressBar} ${Math.floor(percent * 100)}%`, 'info');
      }
    }
  }
/**
 * @private
 */
  generateProgressBar(percent) {
    const barLength = 20;
    const completedLength = Math.floor(percent * barLength);
    const remainingLength = barLength - completedLength;
    const progressBar = '█'.repeat(completedLength) + '▒'.repeat(remainingLength);

    return progressBar;
  }
}
