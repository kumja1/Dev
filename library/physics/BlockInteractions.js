import { world,system,Vector, ItemStack, BlockPermutation} from "@minecraft/server";


// Subscribe to the itemUseOn event before it happens
world.afterEvents.itemUseOn.subscribe(({block,source}) => {
const player = source
    const inventory = player.getComponent("minecraft:inventory").container;
    const selectedSlot = player.selectedSlot;
    const selectedItem = inventory.getItem(selectedSlot);
    const blockLocation = block.location;
    const middleX = blockLocation.x + 0.5;
    const middleY = blockLocation.y + 0.8;
    const middleZ = blockLocation.z + 0.5;
    
    switch (block.typeId) {
 
      case "rc:depot":
      let entity = player.dimension.spawnEntity("coptaine:physics", new Vector(middleX, middleY, middleZ));
        // Add the player's selected item to the inventory of the spawned entity
      entity.getComponent('equipment_inventory').getEquipmentSlot('mainhand').setItem(selectedItem)

        player.getComponent('inventory').container.setItem(selectedSlot, selectedItem.amount >= 1 ? new ItemStack(selectedItem.typeId, selectedItem.amount - 1) :new ItemStack('minecraft:air'));

                break;
      case "rc:physics":
entity = player.dimension.spawnEntity("coptaine:physics", new Vector(middleX, middleY, middleZ));
        // Add the player's selected item to the inventory of the spawned entity
      entity.getComponent('equipment_inventory').getEquipmentSlot('mainhand').setItem(selectedItem)
      // Set the upright rotation for the entity
      entity.setRotation(source.getRotation())
break;
      default:
    }
  })

    world.afterEvents.blockPlace.subscribe(({block}) => {
if(block.typeId == 'rc:basin'){
  block.setPermutation(BlockPermutation.resolve(block.typeId).withState('canal',0))
}
    })