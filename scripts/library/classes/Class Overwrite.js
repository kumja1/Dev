import { Vector,Entity,Block, world } from "@minecraft/server";
import { create } from "./Events";
/**
 * @typedef BlockQueryOptions
 * @property {number} maxDistance
 * @property {string[]} types
 */

/**
 * @type {BlockQueryOptions}
 */
const BlockQueryOptions = {
  maxDistance: 0, 
  types:['']
};
Entity.prototype.getBlocksFromViewDirection = function(options = BlockQueryOptions) {
  const location = this.location;
  const direction = this.getViewDirection();

  const blocks = [];

  for (let i = 1; i <= options.maxDistance; i++) {
    const blockLocation = new Vector(
      Math.floor(location.x + direction.x * i),
      Math.floor(location.y + direction.y * i),
      Math.floor(location.z + direction.z * i)
    );

    const block = this.dimension.getBlock(blockLocation);
    blocks.push(block);
  }

  return blocks.filter((block) => options.types.includes(block.typeId));
};

create.afterEvents.itemVirtualized.subscribe(ev=>{
  const {itemStack:item} = ev
  console.warn(item.typeId)
})