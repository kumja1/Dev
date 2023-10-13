/**
 * A class for managing and making new recipes.
 * @description Made for Crushing Wheel processing.
 */
 class RecipeBuilder {
  constructor() {
    /**
     * A map that stores recipes by name.
     * @type {Map<string,{ ingredients: Array<{string:number}>, extras: Map<string, number>, result: string }>}
     */
    this.recipes = new Map();
  }

  /**
   * Creates a new recipe with the given name.
   * @param {string} name - The name of the recipe.
   * @returns {RecipeBuilder} - Returns the current instance of RecipeBuilder for method chaining.
   * @throws {Error} - Throws an error if a recipe with the same name already exists.
   */
  createRecipe(name) {
    if (this.recipes.has(name)) {
      throw new Error(`Recipe with name '${name}' already exists.`);
    }
    
    // Initialize the recipe properties.
    this.recipes.set(name, {
      ingredients: [],
      extras: new Map(),
      result: ''
    });
    
    return this;
  }

  /**
   * Adds ingredients to an existing recipe.
   * @param {string} name - The name of the recipe.
   * @param {Object<string, number>} ingredients - An object representing ingredients and their quantities.
   * @returns {RecipeBuilder} - Returns the current instance of RecipeBuilder for method chaining.
   * @throws {Error} - Throws an error if the recipe does not exist.
   */
  addIngredients(name, ingredients) {
    if (!this.recipes.has(name)) {
      throw new Error(`Recipe with name '${name}' does not exist.`);
    }

    const recipe = this.recipes.get(name);
    recipe.ingredients.push(...ingredients);
    this.recipes.set(name, recipe);
    return this;
  }

  /**
   * Adds an extra result to a recipe with an optional chance.
   * @param {string} name - The name of the recipe.
   * @param {string} extra - The name of the result ingredient.
   * @param {number} [chance=0] - The chance of getting additional result (default is 0).
   * @returns {RecipeBuilder} - Returns the current instance of RecipeBuilder for method chaining.
   * @throws {Error} - Throws an error if the recipe does not exist.
   */
  addExtra(name, extra, chance = 0) {
    if (!this.recipes.has(name)) {
      throw new Error(`Recipe with name '${name}' does not exist.`);
    }

    const recipe = this.recipes.get(name);
    recipe.extras.set(extra, chance);
    this.recipes.set(name, recipe);
    return this;
  }

  /**
   * Sets the result of a recipe.
   * @param {string} name - The name of the recipe.
   * @param {string} result - The result of the recipe.
   * @returns {RecipeBuilder} - Returns the current instance of RecipeBuilder for method chaining.
   * @throws {Error} - Throws an error if the recipe does not exist.
   */
  setResult(name, result) {
    if (!this.recipes.has(name)) {
      throw new Error(`Recipe with name '${name}' does not exist.`);
    }
    const recipe = this.getRecipe(name);
    recipe.result = result;
    this.recipes.set(name, recipe);
    return this;
  }

  /**
   * Removes a recipe by name.
   * @param {string} name - The name of the recipe to remove.
   * @returns {RecipeBuilder} - Returns the current instance of RecipeBuilder for method chaining.
   * @throws {Error} - Throws an error if the recipe does not exist.
   */
  removeRecipe(name) {
    if (!this.recipes.has(name)) {
      throw new Error(`Recipe with name '${name}' does not exist.`);
    }
    this.recipes.delete(name);
    return this;
  }

  /**
   * Removes all ingredients from a recipe.
   * @param {string} name - The name of the recipe to remove ingredients from.
   * @returns {RecipeBuilder} - Returns the current instance of RecipeBuilder for method chaining.
   * @throws {Error} - Throws an error if the recipe does not exist.
   */
  removeIngredients(name) {
    if (!this.recipes.has(name)) {
      throw new Error(`Recipe with name '${name}' does not exist.`);
    }

    const recipe = this.recipes.get(name);
    recipe.ingredients = [];
    this.recipes.set(name, recipe);
    return this;
  }

  /**
   * Gets a list of all recipe names along with their corresponding recipe objects.
   * @returns {Array<[string, { ingredients: Array<{string:number}>, extras: Map<string, number>, result: string }]>} - An array containing all recipe names and their associated recipe objects.
   */
  get listRecipes() {
    return Array.from(this.recipes.entries());
  }

  /**
   * Gets the recipe object for a given name.
   * @param {string} name - The name of the recipe to retrieve.
   * @returns {{ ingredients: Array<Object<string, number>>, extras: Map<string, number>, result: string }} - The recipe object.
   */
   getRecipe(name) {
    return this.recipes.get(name);
  }
  /**
   * 
   * @param {string} name 
   * @returns {Array<object>}
   */
  getIngredients(name){
    return this.recipes.get(name).ingredients
  }
}
export const Recipe = new RecipeBuilder()