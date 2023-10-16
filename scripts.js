import { EquipmentSlot, world, system, Vector } from '@minecraft/server';

system.runInterval(() => {
  for (const player of world.getPlayers()) {
    const inv = player.getComponent('equipment_inventory').getEquipment(EquipmentSlot.feet);
    const dimension = world.getDimension(player.dimension.id);
    const playerLocation = player.location;

    // Define a 3x3 area centered around the player's position.
    for (let xOffset = -1; xOffset <= 1; xOffset++) {
      for (let zOffset = -1; zOffset <= 1; zOffset++) {
        const block = dimension.getBlock(new Vector(playerLocation.x + xOffset, playerLocation.y - 1, playerLocation.z + zOffset));

        // Check if block is not undefined before accessing its properties.
        if (inv.typeId !== 'nea:cloudwalker_boots') {
          // Use executeCommand to set the block to 'nea:cloud_passthrough'.
          dimension.executeCommand(`setblock ${block.x} ${block.y} ${block.z} nea:cloud_passthrough replace`);
        }
      }
    }
  }
});
