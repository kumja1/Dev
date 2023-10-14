import { Vector,Entity,Block, world, EntityInventoryComponent,BlockInventoryComponent,Player } from "@minecraft/server";
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

Object.defineProperty(EntityInventoryComponent.prototype, "isFull", {
/**
 * @this {EntityInventoryComponent}
 * @returns {boolean} Whether this container is full or not
 */
  get: function() {
    return this.container.emptySlotsCount === 0 ? true: false;
  }
});

Object.defineProperty(EntityInventoryComponent.prototype, "isEmpty", {
  /**
 * @this {EntityInventoryComponent}
 * @returns {boolean} Whether this container is empty or not
 */
  get: function() {
    return this.container.emptySlotsCount === 32 ? true: false;
  }
});


Object.defineProperty(BlockInventoryComponent.prototype, "isEmpty", {
  /**
 * @this {BlockInventoryComponent}
 * @returns {boolean} Whether this container is empty or not
 */
  get: function() {
    return this.container.emptySlotsCount === 32 ? true: false;
  }
});



Object.defineProperty(BlockInventoryComponent.prototype, "isFull", {
  /**
   * @this {BlockInventoryComponent}
   * @returns {boolean} Whether this container is full or not
   */
    get: function() {
      return this.container.emptySlotsCount === 0 ? true: false;
    }
  });
/**
 * @param {Entity} target
 * @returns {boolean} Whether this entity sucessfully started riding the target entity
 */
  Player.prototype.startRiding = function(target){
    target.getComponent('rideable').addRider(this)
  }

  /**
 * @param {Entity} target
 * @returns {boolean} Whether this entity sucessfully started riding the target entity
 */
  Entity.prototype.startRiding = function(target){
    target.getComponent('rideable').addRider(this)
  }