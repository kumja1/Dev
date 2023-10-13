import { Vector,Entity,Block } from "@minecraft/server";
/**
 * Represents a class that retrieves blocks in an entity's view direction and returns it as a array.
 */
export class Entities{
    /**
     * Create a Blocks instance.
     * @param {Entity} entity - The entity to find blocks from.
     */
    constructor(entity) {
      this.entity = entity;
    }
  
    /**
     * Get blocks within the view distance of the entity.
     * @param {number} distance - The maximum distance to search for blocks.
     * @returns {Block[]} An array of blocks within the view distance.
     */
    getBlocksFromViewDirection(distance) {
      const location = this.entity.location;
      const direction = this.entity.getViewDirection();
  
      const blocks = [];
  
      for (let i = 1; i <= distance; i++) {
        const blockLocation = new Vector(
          Math.floor(location.x + direction.x * i),
          Math.floor(location.y + direction.y * i),
          Math.floor(location.z + direction.z * i)
        );
  
        const block = this.entity.dimension.getBlock(blockLocation);
        blocks.push(block);
      }
  
      return blocks;
    }
  }
  