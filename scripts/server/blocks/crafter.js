// Import necessary modules and libraries
    import { world, BlockPermutation,system ,ItemStack} from '@minecraft/server';
import { ProcessHandler } from '../../library/classes/Process';
import { RecipeBuilder as Build } from '../../library/classes/RecipeBuilder';
new Build().
createRecipe('bread')
.addIngredients('bread',{'minecraft:wheat':3})
.setResult('bread','bread')
.createRecipe('furnace')
.addIngredients('furnace',{'minecraft:cobblestone':8}).setResult('furnace','furnace')
.createRecipe('golden_apple')
.addIngredients('golden_apple',{'minecraft:gold_ingot':8,'minecraft:apple':1})
.setResult('golden_apple','golden_apple')

    
    // Define a constant to represent the max raycast distance
    const raycast = {
      maxDistance: 1
    };
   

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
     
      }
    }