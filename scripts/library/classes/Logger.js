
import { world, system } from "@minecraft/server";
import { Database } from "./Database";
const LogDB = new Database('logs');
/**
 * Represents a WorldLogger that logs various events in the Minecraft world.
 */
export class WorldLogger {
  /**
   * Create a WorldLogger instance.
   * @param {string} logLevel - The log level (default: 'info').
   */
  constructor(logLevel = 'info') {
    /** @private */
    this.logLevel = logLevel;
    /** @private */
    this.logs = [];
    /** @private */
    this.initializeEventHandlers();

  }

  /**
   * Initialize the event handlers to log various events.
   * @private
   */
  initializeEventHandlers() {
    const { afterEvents, beforeEvents } = world;

    // Log block placements
    afterEvents.blockPlace.subscribe(event => {
      const { block, player } = event;
      this.log('[Block Placed]', `Player: ${player.name}, Block: ${block.typeId.split(':').pop()}`, 'info');
    });

    // Log item use events
    beforeEvents.itemUse.subscribe(event => {
      const { itemStack, source } = event;
      this.log('[Item Used]', `Player: ${source.nameTag}, Item: ${itemStack.typeId.split(':').pop().toLocaleUpperCase([0])}`, 'info');
    });

    // Log item use on events
    beforeEvents.itemUseOn.subscribe(event => {
      const { itemStack, source, block } = event;
      this.log('[Item Used On]', `Player: ${source.nameTag}, Item: ${itemStack.typeId.split(':').pop()}, Block: ${block.typeId.split(':').pop()}`, 'info');
    });

    // Log function error events
    system.beforeEvents.watchdogTerminate.subscribe(event => {
      const { terminateReason } = event;
      this.log('[Watchdog Terminate]', `Reason: ${terminateReason}`, 'error');
      event.cancel = true;
    });

    // Log player join events
    afterEvents.playerJoin.subscribe(event => {
      const { playerName } = event;
      this.log('[Player Join]', `Player: ${playerName}`, 'info');
    });

    // Log player leave events
    afterEvents.playerLeave.subscribe(event => {
      const { playerName } = event;
      this.log('[Player Leave]', `Player: ${playerName}`, 'info');
    });

    // Log player spawn events
    afterEvents.playerSpawn.subscribe(event => {
      const { initialSpawn, player } = event;
      this.log('[Player Spawn]', `Player: ${player.name}, Initial Spawn: ${initialSpawn}`, 'info');
    });

    // Log chat send events
    beforeEvents.chatSend.subscribe(event => {
      const { message, sender } = event;
      this.log('[Chat Send]', `Player: ${sender.name}, Message: ${message}`, 'info');
    });

    // Log explosion events
    beforeEvents.explosion.subscribe(event => {
      const { source, getImpactedBlocks } = event;
      this.log('[Explosion]', `Player: ${source.nameTag}, Explosion: ${getImpactedBlocks().join(',')}`, 'info');
    });

  }

  /**
   * Log a message with the specified prefix and level.
   * @param {string} parentPrefix - The parent log message prefix (default: 'system').
   * @param {string} prefix - The log message prefix.
   * @param {string} message - The log message.
   * @param {string} level - The log level (default: 'info').
  
   */
  log(parentPrefix = 'system',prefix, message, level = 'info') {
    const logEntry = `[${parentPrefix.replace('system', 'System')}] [${this.getCurrentTimestamp()}]  [${level.replace('info', 'Info').replace('warn', 'Warn').replace('error', 'Error')}] ${prefix} ${message}`;
switch (level) {
      case 'info':
        console.log(logEntry);
        break;
      case 'warn':
        console.log(logEntry);
        break;
      case 'error':
        console.log(logEntry);
        break;
      default:
        console.log(logEntry);
        break;
    }
 
    LogDB.set('log',logEntry);
    this.logs.push(logEntry);
    return this.logs;
  }
  /**
   * Get the current timestamp in ISO format.
   * @returns {string} The current timestamp.
   * @private
   */
  getCurrentTimestamp() {
    const now = new Date();
    return now.toISOString();
  }

  /**
   * Get the logs recorded by the WorldLogger.
   * @returns {string[]} An array of log entries.
   */
  getLogs() {
    return LogDB.get('log');
  }
  clearLogs(){
    this.logs = [];
    return this.logs;
  }
}
