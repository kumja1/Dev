import { Dimension, Entity, EntityInitializationCause, ItemStack, Vector, system, world,Player } from '@minecraft/server';
import { Recipe as recipeBuilder } from '../../../library/classes/RecipeBuilder'; // Import the RecipeBuilder class

// Define recipes using the RecipeBuilder
recipeBuilder
  .createRecipe('andesite')
  .addIngredients({ 'minecraft:andesite': 1 }) // Specify ingredients as an object
  .setResult('minecraft:cobblestone');

recipeBuilder
  .createRecipe('blaze rod')
  .addIngredients({ 'minecraft:blaze_rod': 1 })
  .setResult('minecraft:blaze_powder')
  .addExtra('minecraft:blaze_powder', 0.25);

recipeBuilder
  .createRecipe('bone')
  .addIngredients({ 'minecraft:bone': 1 })
  .setResult('minecraft:bone_meal')
  .addExtra('minecraft:bone_meal', 0.25)
  .addExtra('minecraft:light_gray_dye', 1);

recipeBuilder
  .createRecipe('brass')
  .addIngredients({ 'rc:brass_block': 1 })
  .setResult('rc:crushed_brass');

recipeBuilder
  .createRecipe('cactus')
  .addIngredients({ 'minecraft:cactus': 1 })
  .setResult('minecraft:some_result'); // Replace with a valid result

// Function to process a recipe using RecipeBuilder
function processRecipe(world, pos, inputItem) {
  const recipe = recipeBuilder.getRecipe(inputItem);

  if (recipe) {
    const ingredients = recipe.ingredients;

    // Access the ingredient amounts
    Object.entries(ingredients).forEach(([ingredient, amount]) => {
      console.log(`Ingredient: ${ingredient}, Amount: ${amount}`);
      // Add your logic here to process ingredients with amounts
    });

    // Check for chance of extra items
    if (recipe.extras.size > 0) {
      recipe.extras.forEach((chance, extraItem) => {
        if (Math.random() < chance) {
          world.dropItem(world.getBlockPosBelow(pos), extraItem, 1); // Adjust the drop logic as needed
        }
      });
    }
  }
}

/**
 * @param {Vector} max 
 * @param {Vector} min 
 */
function getBlocks(min, max) {
  const location = [];
  for (let x = min; x < max; x++) {
    for (let y = min; y < max; y++) {
      for (let z = min; z < max; z++) {
        const block = Dimension.prototype.getBlock({ x, y, z });
        location.push(block);
        return location;
      }
    }
  }
}

world.afterEvents.entitySpawn.subscribe(ev => {
  const { cause, entity } = ev;
  const block = getBlocks(entity.location, { x: entity.location.x + 2, y: entity.location.y - 1, z: entity.location.z + 2 }).find(b => b.typeId == 'create:crushing_wheel');

  if (entity.typeId == 'minecraft:item' && block) {
    // Process the recipe based on the input item
    const inputItem = 'blaze rod'; // Replace with the actual input item
    processRecipe(world, entity.location, inputItem);
  }
});


class SequencedAssembly {
  /**
   * 
   * @param {ItemStack} ItemStack 
   */
  constructor(ItemStack){
    /**
     * @type {Map<string,{sequence:[],result:string,rounds:number}>}
     */
    this.steps = new Map()
    this.item = ItemStack
  }
  /**
   * 
   * @param {string} name 
   * @returns {SequencedAssembly}
   */
  createSequence(name){
    if (this.steps.has(name)){
      throw new Error(`Sequence ${name} already exists`)
    }
    this.steps.set(name,{
      sequence:[],
      result:'',
      rounds:0
    })
    return this
  }
/**
 * 
 * @param {string} name 
 * @param {{item:string,blockRequired:string,isComplete:boolean}} sequence 
 * @returns 
 */
    setSequence(name,sequence){
const data = this.steps.get(name)
data.sequence.push(sequence)
this.steps.set(name,data)
this.item.setLore
this.item.setLore([JSON.stringify(data)])
return this
    }

getSequence(name){
  return this.steps.get(name)
}
  }


  system.afterEvents.scriptEventReceive.subscribe(ev=>{
    const {sourceBlock,id} = ev;
    switch(id){
      case 'sequence':
new SequencedAssembly().createSequence(name).setSequence(name,{})
        break;
    }
  })

Entity.prototype.playAnimation('',{})

Player.prototype.camera.fade({fadeColor:{blue:0,red:0,green:0}})