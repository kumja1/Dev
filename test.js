import { ChatSendAfterEvent, world,Entity, system, Dimension } from '@minecraft/server';
import { TickingArea } from './../main';
import { WorldLogger } from './library/classes/Logger';

/**
 * Represents a terminal for executing commands and tracking operations.
 */
class Terminal {
  /**
   * Creates a new Terminal instance with a unique name.
   */
  constructor() {
    /**
     * Set to store unique names.
     * @type {Set<string>}
     */
    this.names = new Set();
    
    /**
     * The name of the terminal.
     * @type {string}
     */
    this.name = this.generateUniqueName();

    /**
     * Array to store executed commands and their details.
     * @type {Array<{ c: string, t: Date, d: string, async: boolean }>}
     */
    this.commands = [];
     /**
     * Array to store executed commands and their details.
     * @type {Array<{ command: string, callback:Function,description:string}>}
     */
    this.custom = [];

  }

  /**
   * Generates a unique name for the terminal.
   * @private
   * @returns {string} A unique name.
   */
  generateUniqueName() {
    const randomString = () =>
      Math.random()
        .toString(36)
        .substring(2);

    let newName;
    do {
      newName = `deg${randomString()}${Math.random() * 3 - 3}${randomString()}`;
    } while (this.names.has(newName));

    this.names.add(newName); // Add the new name to the set.

    return newName;
  }

  /**
   * Executes a command in the specified dimension.
   * @param {string} command - The command to execute.
   * @param {boolean} [async=false] - Whether to run the command asynchronously.
   * @param {string} [dimensionName='overworld'] - The name of the dimension to execute the command in.
   * @returns {Array<{ c: string, t: Date, d: string, async: boolean }>} The updated list of executed commands.
   */
  async run(command, async = false, dimensionName = 'overworld') {
    const dimension = world.getDimension(dimensionName);
    this.commands.push({ c: command, t: new Date(), d: dimensionName, async });
    if (async) {
      await dimension.runCommandAsync(command);
    } else {
      await dimension.runCommand(command);
    }
  }

  /**
   * Tracks an entity with ticking areas.
   * @param {Entity} entity - The entity to track.
   * @param {number} duration- How long to track the entity for
   */
  track(entity,duration=Infinity) {
   
    return new TickingArea(true).Track(entity,duration);
    
  }

  /**
   * Retrieves logs from the world logger.
   * @returns {any} The logs from the world logger.
   */
   getLogs() {
    return new WorldLogger().getLogs();
  }

  /**
   * Retrieves a history of executed commands with timestamps.
   * Only returns commands executed with the terminal
   * @returns {string} The history of executed commands.
   */
  get getHistory() {
    return this.commands.map((cmd) => `${cmd.t.toISOString()} - ${cmd.c}`).join('\n');
  }
 /**
   * Adds a custom command to the terminal.
   * @param {string} command - The name of the command.
   * @param {ChatSendAfterEvent} callback - The callback function to execute when the command is invoked.
   * @param {string} [description] - A description of the command (optional).
   */
 addCommand(command, callback, description = '') {

    // Store the custom command along with its callback and description.
    this.custom.push({ command, callback, description });
  }
  
}

export default Terminal;