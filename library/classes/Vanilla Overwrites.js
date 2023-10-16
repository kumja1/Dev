import { Vector,Entity,Block, world, EntityInventoryComponent,BlockInventoryComponent,Player,EntityHurtAfterEvent } from "@minecraft/server";
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

  return blocks.filter((block) => options.types.includes(block.typeId) || undefined);
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

  
  import * as server from "@minecraft/server"
  //Enchantment handler
  class CustomEnchant {
      static list = []
      /**
       * @param {string} enchantName
       * @param {function(EntityHurtAfterEvent, number | string)} callback
       */
      static addHitListener(enchantName, callback) {
          this.list.push({ name: enchantName, callback: callback })
      }
  }
  
  //Testing for present enchantments and calling callbacks
  world.afterEvents.entityHurt.subscribe((event) => {
      const player = event.damageSource.damagingEntity;
      if (!(player instanceof server.Player)) return;
      /** @type {Container} */
      const container = player.getComponent("inventory").container;
      const heldItem = container.getItem(player.selectedSlot);
      const lore = heldItem.getLore();
      for (const enchant of lore) {
          const ench = CustomEnchant.list.find((x) => enchant.startsWith(x.name));
          if (!ench) continue;
          const level = parseInt(enchant.substring(ench.name.length)) || enchant.substring(ench.name.length).trim() || 0
          ench.callback(event, level)
      }
  })
  
  //applying enchantments using the chat (Change as you like)
  world.beforeEvents.chatSend.subscribe((event) => {
      const player = event.sender
      if (!(player instanceof server.Player)) return;
      /** @type {Container} */
      const container = player.getComponent("inventory").container;
      const heldItem = container.getItem(player.selectedSlot);
      heldItem.setLore(["explode 1", "strength 2"])
      container.setItem(player.selectedSlot, heldItem)
  })
  
  
  //custom explode enchantment that will explode on hit
  CustomEnchant.addHitListener("explode", (hurtEvent, level) => {
      const player = hurtEvent.damageSource.damagingEntity
      player.dimension.createExplosion(player.headLocation, level)
  })

  CustomEnchant.addHitListener("strength", (hurtEvent,level) => {
    const player = hurtEvent.damageSource.damagingEntity
    player.addEffect("minecraft:strength", 100, {amplifier:Number(level)})
})