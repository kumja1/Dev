import {  BlockPermutation, Block, system,world} from '@minecraft/server'
//@ts-ignore
import { WorldLogger as Logger} from './Logger';
const Log = new Logger('info').log
/**
* A manager for adding and setting block properties and permutations.
*/
class BlockPropertiesManager {
    /**
     * Creates a new `BlockPropertiesManager` instance.
     */
    constructor() {
      /**
       * @type {{[propertyName:string]: Array<string | number | boolean>}}
       *  @private */
      this.properties = {};
    }
  
    /**
     * Adds a new property with the given name and values.
     * @param {string} propertyName - The name of the property.
     * @param {boolean|number|string} propertyValue - The possible values for the property.
     */
    addProperty(propertyName, propertyValue) {
      if (Array.isArray(this.properties[propertyName])) this.properties[propertyName].push(propertyValue);
      else this.properties[propertyName] = [propertyValue];
      Log("[Permutation]",`Added property ${propertyName} with value of ${propertyValue}`,'info')
    }
  
    /**
     * Adds a new permutation with the given property name and value to the block
     * with the given ID.
     * @param {string} blockId - The ID of the block to set the permutation on.
     * @param {`${string}:${string}``} propertyName- The name of the property.
     * @param {string | number | boolean} propertyValue - The value of the property.
     * @returns {BlockPermutation}  The newly created block permutation.
     */ 
    addPermutation(blockId, propertyName, propertyValue) {
      const permutation = BlockPermutation.resolve(blockId).withProperty(propertyName, propertyValue);
      this.addPermutation(blockId, propertyName, propertyValue);
      Log("[Permutation]",`Added permutation ${propertyName}`,'info')
      return permutation;
    }
  
    /**
     * Gets all added block properties and their possible values.
     * @returns {Object} An object containing all added block properties and their
     * possible values.
     */
    getProperties() {
        Log("[Permutation]",`Get properties`,'info')
      
      return this.properties;
    }
  
    /**
     * Sets the given properties on the given block.
     * @param {Block} block - The block to set the properties on.
     * @param {{[property:string]:boolean|number|string}} properties - An object containing the property names and values
     * to set on the block.
     */
    setProperties(block, properties) {
      const permutation = BlockPermutation.resolve(block.typeId, properties);
      block.setPermutation(permutation);
      Log("[Permutation]",`Set properties ${properties.toString()} on ${block.typeId}`,'info')
    }
  
    /**
     * Sets a single property with the given name and value on the given block.
     * @param {Block} block - The block to set the property on.
     * @param {string} propertyName - The name of the property to set.
     * @param {boolean|number|string} propertyValue - The value to set for the property.
     */
    setProperty(block, propertyName, propertyValue) {
      const permutation = BlockPermutation.resolve(block.typeId).withProperty(propertyName, propertyValue);
      block.setPermutation(permutation);
      Log("[Permutation]",`Set property ${propertyName} of ${block.typeId} with value of ${propertyValue}`,'info')
    }
  
    /**
     * Adds a new permutation with the given property name and value to the
     * given block and sets it.
     * @param {Block} block - The block to set the permutation on.
     * @param {BlockPermutation} permutation - The permutation created.
     * @returns {BlockPermutation} The newly created block permutation.
     */
    setPermutation(block, permutation) {
      block.setPermutation(permutation);
      Log("[Permutation]",`Set permutation ${permutation.toString()} on ${block.typeId}`,'info')
      return permutation;
    }
  };
  
  
  export const BlockPropertiesManager = new BlockPropertiesManager();