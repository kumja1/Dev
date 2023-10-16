// Import necessary modules and libraries
    import { world, BlockPermutation,system ,ItemStack} from '@minecraft/server';
import { ProcessHandler } from '../../library/classes/Process';

    
    // Define a constant to represent the max raycast distance
    const raycast = {
      maxDistance: 1
    };
   export const itemRecords = {
      'bread': {
          current: 0,
          cost: 3,
          output: 1
      },
      'shears': {
          current: 0,
          cost: 2,
          output: 2
      },
      'golden_apple': {
          current: 0,
          cost: 9,
          output: 3
      },
      'furnace': {
          current: 0,
          cost: 8,
          output: 5
      }
  }

    // Get the overworld dimension and store it in a constant variable
    const overworld = world.getDimension('minecraft:overworld');
    

    for (const query of overworld.getEntities({ type: 'create:physics' })) {
    
      // Use the query to get the correct block position
      const blockAtQuery = query.dimension.getBlock(query.location || query.getBlockFromViewDirection(raycast) );
    
      // Check if the block at the query position is a mechanical crafter
      if (blockAtQuery.typeId === 'create:mechanical_crafter') {
        
    
        // Get all entities at the block location
        const targetEntities = overworld.getEntitiesAtBlockLocation(blockAtQuery);

        // Loop through each entity and count the number of items found
        for (const entity of targetEntities) {
            const inventory = entity.getComponent('inventory').container;
            const containerSlot = inventory.getSlot(0);
            let { typeId, amount } = containerSlot
            // Check if the slot has an item
            if (typeId = (typeId?.split(':').pop())) {
                if (!itemRecords[typeId]) continue
                itemRecords[typeId].current += amount
                containerSlot.setItem()
            }
        }
        // Run code based on the item information
       new ProcessHandler().addProcess(
        function produce() {
            for (const typeId in itemRecords) {
                const {cost,current} = itemRecords[typeId]
                if (current < cost) continue;
                itemRecords[typeId].current -= cost

                if (Object.keys(itemRecords).indexOf(typeId) <= 16){
                    const perm_2 = BlockPermutation.resolve(blockAtQuery.typeId).withProperty('craft2',itemRecords[typeId].output)
                    blockAtQuery.setPermutation(perm_2)
                }else{
                const perm = BlockPermutation.resolve(blockAtQuery.typeId).withProperty('craft',itemRecords[typeId].output)
               blockAtQuery.setPermutation(perm)
                }
       
        }
           }
        ,10000,1)
      }
    }