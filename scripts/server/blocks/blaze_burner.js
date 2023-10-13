import {world,ItemStack,Vector,system, Block} from '@minecraft/server';
const {beforeEvents} = world


beforeEvents.itemUseOn.subscribe(event => {
  const {block,itemStack,source} = event
  const allowedBlocks = [
    'minecraft:nether_brick',
    'minecraft:red_nether_brick',
    'minecraft:chiseled_nether_brick',
    'minecraft:cracked_nether_brick'
  ]
  if (itemStack.typeId == 'create:empty_blaze_burner'){
let blockStepped  = world.getDimension('nether').getBlock(new Vector(source.location.x,source.location.y -1,source.location.z))
  if (allowedBlocks.includes(blockStepped.typeId) && source.dimension.id == 'minecraft:nether'&& block.typeId == 'minecraft:mob_spawner'){

  for (const player of world.getPlayers({type:source.typeId})){
  player.getComponent('inventory').container.addItem(new ItemStack('create:blaze_burner',1))
itemStack.amount -1 
  }
}
}
})