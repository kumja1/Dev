import { itemRecords } from "../../server/blocks/crafter.js";
//@ts-ignore
import { WorldLogger } from './Logger.js'; // Import the WorldLogger class

const logger = new WorldLogger(); // Create an instance of the WorldLogger class

/**
 * Represents a Mechanical Crafter that allows for the creation and deletion of item recipes.
 */
class MechanicalCrafter {
  constructor() {
    /** 
     * @private
     */
    this.records = itemRecords;
    /**@private */    
    this.deleted_records = [];
    
  }

  /**
   * Adds a recipe for an item to the Mechanical Crafter.
   *
   * @param {string} itemName - The name of the item.
   * @param {number} cost - The cost of crafting the item.
   * @param {number} output - The property on the json side that gives you the output
   * @throws {Error} If the item recipe already exists or the cost/output value is invalid.
   */
  addItemRecipe(itemName, cost, output) {
    if (this.records[itemName]) {
      throw new Error(`Item Recipe ${itemName} already exists`);
    }

    if (!Number.isInteger(cost) || cost <= 0) {
      throw new Error(`Cost must be a positive integer`);
    }

    if (!Number.isInteger(output) || output <= 0) {
      throw new Error(`Output must be a positive integer`);
    }

    const newRecipe = {
      itemName: {
        current: 0,
        cost,
        output,
      },
    };

    Object.assign(this.records, newRecipe);
    
    // Log the addition of a recipe using the logger variable
    logger.log('[Recipe Added]', `Item: ${itemName}, Cost: ${cost}, Output: ${output}`);
  }

  /**
   * Deletes a recipe for an item from the Mechanical Crafter.
   *
   * @param {string} itemName - The name of the item recipe to be deleted.
   * @throws {Error} If the item recipe does not exist.
   */
  deleteItemRecipe(itemName) {
    if (!this.records[itemName]) {
      throw new Error(`Item ${itemName} does not exist`);
    }
this.deleted_records.push(this.records[itemName]);  
    delete this.records[itemName];

    // Log the deletion of a recipe using the logger variable
    logger.log('[Recipe Deleted]', `Item: ${itemName}`);
    return this.deleted_records;
  }
  /**
   * Adds a Deleted recipe for an item from the Mechanical Crafter.
   *
   * @param {string} itemName - The name of the item recipe to be added.
   * @throws {Error} If the item recipe does not exist.
   */
  addDeletedItemRecipe(itemName) {
    if (!this.deleted_records[itemName]) {
      throw new Error(`Item ${itemName} does not exist`);
    }
    this.records[itemName] = this.deleted_records[itemName];
    delete this.deleted_records[itemName];
    // Log the addition of a recipe using the logger variable
    logger.log('[Recipe Added]', `Item: ${itemName}`);
  return this.records[itemName];
}
}

export const MechanicalCrafters = new MechanicalCrafter();