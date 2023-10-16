/**
 * A class for building and managing recipes.
 */
class RecipeBuilder {
    /**
     * Creates a new RecipeBuilder instance.
     */
    constructor() {
      /**
       * @type {Map<string, { ingredients: { [key: string]: number }, extraItems: Map<string, number> }>}
       * A map to store recipes.
       */
      this.recipes = new Map();
    }
  
    /**
     * Creates a new recipe with the given name.
     * @param {string} name - The name of the recipe.
     * @returns {RecipeBuilder} The RecipeBuilder instance for method chaining.
     */
    createRecipe(name) {
      this.recipes.set(name, {
        ingredients: {},
        extraItems: new Map(),
      });
      return this;
    }
  
    /**
     * Adds ingredients to the specified recipe.
     * @param {string} name - The name of the recipe.
     * @param {Object.<string, number>} ingredients - An object where keys are ingredient names and values are the amounts needed.
     * @returns {RecipeBuilder} The RecipeBuilder instance for method chaining.
     */
    addIngredients(name, ingredients) {
      const recipe = this.recipes.get(name);
      if (recipe) {
        recipe.ingredients = ingredients;
      }
      return this;
    }
  
    /**
     * Adds an extra item with a chance to the specified recipe.
     * @param {string} name - The name of the recipe.
     * @param {string} extraItem - The name of the extra item.
     * @param {number} chance - The chance of obtaining the extra item (between 0 and 1).
     * @returns {RecipeBuilder} The RecipeBuilder instance for method chaining.
     */
    addExtra(name, extraItem, chance) {
      const recipe = this.recipes.get(name);
      if (recipe) {
        recipe.extraItems.set(extraItem, chance);
      }
      return this;
    }
  
    /**
     * Retrieves a recipe by name.
     * @param {string} name - The name of the recipe.
     * @returns {object | undefined} The recipe object or undefined if not found.
     */
    getRecipe(name) {
      return this.recipes.get(name);
    }
  
    /**
     * Lists all available recipe names.
     * @returns {string[]} An array of recipe names.
     */
    listRecipes() {
      return Array.from(this.recipes.keys());
    }
  }
  
  // Example usage:
  const recipeBuilders = new RecipeBuilder()
    .createRecipe('Cake')
    .addIngredients('Cake', { 'Egg': 1, 'Sugar': 2, 'Wheat': 3, 'Chocolate': 2 })
    .addExtra('Cake', 'ExtraFrosting', 0.5);
  
  const cakeRecipe = recipeBuilder.getRecipe('Cake');
  console.log('Recipe:', cakeRecipe);
  
  // Create a RecipeBuilder instance and chain the recipe creation and definition
  const recipeBuilder = new RecipeBuilder()
    .createRecipe('andesite')
    .addIngredients('andesite', { 'minecraft:andesite': 1 })
    
    .createRecipe('blaze rod')
    .addIngredients('blaze rod', { 'minecraft:blaze_rod': 1 })
    .addExtra('blaze rod', 'minecraft:blaze_powder', 0.25)
    
    .createRecipe('bone')
    .addIngredients('bone', { 'minecraft:bone': 1 })
    .addExtra('bone', 'minecraft:bone_meal', 0.25)
    .addExtra('bone', 'minecraft:light_gray_dye', 1)
    
    .createRecipe('brass')
    .addIngredients('brass', { 'rc:brass_block': 1 })
  
    .createRecipe('cactus')
    .addIngredients('cactus', { 'minecraft:cactus': 1 });
  
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
      if (recipe.extraItems.size > 0) {
        recipe.extraItems.forEach((chance, extraItem) => {
          if (Math.random() < chance) {
            world.dropItem(world.getBlockPosBelow(pos), extraItem, 1); // Adjust the drop logic as needed
          }
        });
      }
    }
  }
  
  // Example usage
  const inputItem = 'blaze rod';
  const worldObject = /* obtain your 'world' object */;
  const position = /* obtain the position */;
  processRecipe(worldObject, position, inputItem);
