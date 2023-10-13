import { ChatSendAfterEvent, world, Entity, system, Block,Vector, ScriptEventCommandMessageAfterEvent } from '@minecraft/server';
import { TickingArea } from './../main';
import { WorldLogger } from './library/classes/Logger';
import { ActionFormData } from '@minecraft/server-ui';

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
     * @type {Array<{ command: string, callback: Function, description: string }>}
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
   * @param {number} duration - How long to track the entity for.
   */
  track(entity, duration = Infinity) {
    return new TickingArea(true).Track(entity, duration);
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
   * Only returns commands executed with the terminal.
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

  /**
   * Listens for a custom event and executes a callback when it occurs.
   * @param {string} name - Name of the event to listen to.
   * @param {Function} callback - Callback to initialize for the event.
   */
  listen(name, callback) {
    system.afterEvents.scriptEventReceive.subscribe((e) => {
      const { id } = e;
      if (id === name) {
        callback(e)
      }
    });
  }
}

export default Terminal;

// Example usage of the listen method:
new Terminal().listen('fff', (event) => {
  // Handle the 'fff' event here.
  console.log('Received the "fff" event:', event);
});


const BlockFilter = [
'minecraft:air',
'minecraft:lava',
'minecraft:water',
'minecraft:bedrock',
'nes:bounding_block'
]
/**
 * 
 * @param {Entity} source 
 * @param {Block} block 
 * @returns {import('@minecraft/server').Vector3[]}
 */
function getAdjacentBlocks(source, block) {
  const connectedBlocks = [];
  const visited = new Set();
  const queue = [{ x: block.x, y: block.y, z: block.z }];

  while (queue.length > 0) {
      const { x, y, z } = queue.shift();
      const position = `${x},${y},${z}`;

      if (visited.has(position)) continue;

      visited.add(position);

      try {
          const adjacentBlock = source.dimension.getBlock(new Vector(x, y, z));
//Push the adjacent block to the connectedBlocks array.
          connectedBlocks.push(adjacentBlock);
          //Filter out unobtainable blocks from the blocks array
       if(BlockFilter.includes(adjacentBlock.typeId)) continue;
          const directions = [
              { x: 0, y: 0, z: -1 }, // north
              { x: 1, y: 0, z: 0 },  // east
              { x: 0, y: 0, z: 1 },  // south
              { x: -1, y: 0, z: 0 }, // west
              { x: 0, y: 1, z: 0 },  // up
              { x: 0, y: -1, z: 0 }  // down
          ];

          for (const direction of directions) {
              const newX = x + direction.x;
              const newY = y + direction.y;
              const newZ = z + direction.z;
              const newPosition = `${newX},${newY},${newZ}`;

              if (!visited.has(newPosition)) {
                  queue.push({ x: newX, y: newY, z: newZ });
              }
          }
      } catch (err) {
    console.log(err,err.stack);
      }
  }

  return connectedBlocks;
}
world.afterEvents.itemStartUseOn.subscribe(ev => {
  const { block, source: player } = ev;
  const locs = getAdjacentBlocks(player, block);

  let shipControl;

  locs.forEach(b => {
    const adjacentBlock = player.dimension.getBlock({ x: b.x, y: b.y, z: b.z });
    const item = adjacentBlock.getItemStack(1, true);

    if (adjacentBlock.typeId === 'nes:ship_control') {
     shipControl = player.dimension.spawnEntity('nes:ship_control', adjacentBlock.location);
      shipControl.getComponent('equippable').setEquipment('mainhand', item);
      adjacentBlock.setType('minecraft:air');
    } else {
      if (shipControl) {
        const entity = player.dimension.spawnEntity('nes:block', adjacentBlock.location);
        entity.getComponent('equippable').setEquipment('mainhand', item);
        // Removes the block
        adjacentBlock.setType('minecraft:air');
        entity.startRiding(shipControl);
      }
    }
  });

  const data = {
    player: player.name,
    area: locs,
  };
});





// Display the sorted leaderboard
leaderboardObjective.sendObjective();
for (const player of playerList) {
  const score = scoreboard.getScore(player, leaderboardObjective);
  // Display player and score
  console.log(`${player}: ${score}`);
}

import { world, system, Vector, BlockVolumeUtils } from "@minecraft/server";

export class ProtectedAreas {
  constructor() {
    if (!world.getDynamicProperty("protectedAreas")) {
      world.setDynamicProperty("protectedAreas", JSON.stringify([]));
    }
    if (!world.getDynamicProperty("protectedAreasAdmins")) {
      world.setDynamicProperty("protectedAreasAdmins", JSON.stringify([]));
    }
  }

  //GET

  getProtectedAreas() {
    return JSON.parse(world.getDynamicProperty("protectedAreas"));
  }

  getArea({ id }) {
    const protectedAreas = this.getProtectedAreas();

    return protectedAreas.find((area) => area.id == id);
  }

  getAreaWhitelist({ id }) {
    const protectedAreas = this.getProtectedAreas();

    const area = protectedAreas.find((area) => area.id == id);

    if (area) {
      return area.whitelist;
    }
  }

  getAdmins() {
    return JSON.parse(world.getDynamicProperty("protectedAreasAdmins"));
  }

  //SET

  areaWhitelistAdd({ id, player }) {
    const whitelist = this.getAreaWhitelist({ id });

    if (whitelist) {
      const isDuplicated = whitelist.some((name) => name == player);

      if (!isDuplicated) {
        whitelist.push(player);

        this.updateAreaWhitelist({ id, data: whitelist });

        console.warn(`§d${player}§f added to ${id} whitelist!`);
      }
    }
  }

  addAdmin({ player }) {
    const admins = this.getAdmins();

    const isInAdminList = admins.some((admin) => admin == player);

    if (!isInAdminList) {
      admins.push(player);

      this.updateAdmins({ data: admins });
    }
  }

  setArea({ name, from, to }) {
    const protectedAreas = this.getProtectedAreas();

    const isDuplicated = protectedAreas.find((area) => area.id == name);

    if (isDuplicated) {
      console.warn(
        `§d${name}§f name is already in use, try another area name!`
      );
      return;
    }

    if (from instanceof Vector && to instanceof Vector) {
      const area = {
        id: name,
        whitelist: [],
        from: {
          x: from.x,
          y: from.y,
          z: from.z,
        },
        to: {
          x: to.x,
          y: to.y,
          z: to.z,
        },
      };

      protectedAreas.push(area);

      this.update({ data: protectedAreas });

      console.warn(`§d${name}§f added to protected areas!`);
    } else {
      console.warn("§ePARAMS MUST BE VECTORS");
    }
  }

  //UPDATE

  update({ data }) {
    const stringify = JSON.stringify(data);

    world.setDynamicProperty("protectedAreas", stringify);
  }

  updateAdmins({ data }) {
    const stringify = JSON.stringify(data);

    world.setDynamicProperty("protectedAreasAdmins", stringify);
  }

  updateAreaWhitelist({ id, data }) {
    const protectedAreas = this.getProtectedAreas();

    const area = protectedAreas.find((area) => area.id == id);

    if (area) {
      area.whitelist = data;

      this.update({ data: protectedAreas });
    }
  }

  //DELETE

  deleteArea({ id }) {
    const protectedAreas = this.getProtectedAreas();

    const index = protectedAreas.findIndex((area) => area.id == id);

    if (index > -1) {
      const removedArea = protectedAreas.splice(index, 1);

      console.warn(`§d${removedArea[0].id}§f deleted from Protected Areas`);

      this.update({ data: protectedAreas });
    }
  }

  deleteAllAreas() {
    const protectedAreas = this.getProtectedAreas();

    protectedAreas.splice(0);

    this.update({ data: protectedAreas });
  }

  clearAreaWhitelist({ id }) {
    const whitelist = this.getAreaWhitelist({ id });

    if (whitelist) {
      whitelist.splice(0);

      this.updateAreaWhitelist({ id, data: whitelist });
    }
  }

  removeAdmin({ player }) {
    const admins = this.getAdmins();

    const isInAdminList = admins.some((admin) => admin == player);

    if (isInAdminList) {
      const index = admins.findIndex((admin) => admin == player);

      if (index > -1) {
        admins.splice(index, 1);

        this.updateAdmins({ data: admins });
      }
    }
  }

  removeAllAdmins() {
    const admins = this.getAdmins();

    admins.splice(0);

    this.updateAdmins({ data: admins });
  }

  areaWhitelistRemove({ id, player }) {
    const whitelist = this.getAreaWhitelist({ id });

    if (whitelist) {
      const isInWhitelist = whitelist.some((name) => name == player);

      if (isInWhitelist) {
        const index = whitelist.findIndex((name) => name == player);

        if (index > -1) {
          whitelist.splice(index, 1);

          this.updateAreaWhitelist({ id, data: whitelist });

          console.warn(`§d${player}§f removed from ${id} whitelist!`);
        }
      }
    }
  }
}

const protectedAreas = new ProtectedAreas();

world.beforeEvents.playerBreakBlock.subscribe((data) => {
  const isInside = data.player.getDynamicProperty("vb");

  if (isInside) {
    data.cancel = true;
  }
});

world.beforeEvents.playerPlaceBlock.subscribe((data) => {
  const isInside = data.player.getDynamicProperty("vb");

  if (isInside) {
    data.cancel = true;
  }
});

world.beforeEvents.playerInteractWithBlock.subscribe((data) => {
  const isInside = data.player.getDynamicProperty("vb");

  if (isInside) {
    data.cancel = true;
  }
});

system.runInterval(() => {
  const players = world.getAllPlayers();

  for (let player of players) {
    const face = player.getBlockFromViewDirection()?.face;

    let block;

    const MAX_DISTANCE = {
      maxDistance: 64,
    };
    switch (face) {
      case "Up": {
        block = player.getBlockFromViewDirection(MAX_DISTANCE)?.block?.above();
        break;
      }
      case "Down": {
        block = player.getBlockFromViewDirection(MAX_DISTANCE)?.block?.below();
        break;
      }
      case "North": {
        block = player.getBlockFromViewDirection(MAX_DISTANCE)?.block?.north();
        break;
      }
      case "South": {
        block = player.getBlockFromViewDirection(MAX_DISTANCE)?.block?.south();
        break;
      }
      case "East": {
        block = player.getBlockFromViewDirection(MAX_DISTANCE)?.block?.east();
        break;
      }
      case "West": {
        block = player.getBlockFromViewDirection(MAX_DISTANCE)?.block?.west();
        break;
      }
    }

    if (block && block.isValid()) {
      const isAdmin = protectedAreas
        .getAdmins()
        .some((admin) => admin == player.name);

      const isInside = protectedAreas.getProtectedAreas().some((area) =>
        BlockVolumeUtils.isInside(
          {
            from: protectedAreas.getArea({ id: area.id }).from,
            to: protectedAreas.getArea({ id: area.id }).to,
          },
          block.location
        )
      );

      const area = protectedAreas.getProtectedAreas().find((area) =>
        BlockVolumeUtils.isInside(
          {
            from: protectedAreas.getArea({ id: area.id }).from,
            to: protectedAreas.getArea({ id: area.id }).to,
          },
          block.location
        )
      );

      if (area) {
        if (isAdmin) {
          player.setDynamicProperty("vb", false);
        } else if (area.whitelist.includes(player.name)) {
          player.setDynamicProperty("vb", false);
        } else {
          player.setDynamicProperty("vb", isInside);
        }
      } else {
        player.setDynamicProperty("vb", isInside);
      }
    }
  }
});