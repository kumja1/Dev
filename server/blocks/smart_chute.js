import { world, BlockPermutation, Vector } from "@minecraft/server";

const overworld = world.getDimension("overworld");

for (const filter of overworld.getEntities({ type: "create:physics" })) {
  const block = filter.dimension.getBlock(
    filter.location || filter.getBlockFromViewDirection({ maxDistance: 0 })
  );

  const itemAbove = block.dimension
    .getEntities({
      type: "minecraft:item",
      location: new Vector(block.location.x, block.location.y + 1, block.location.z)
    })
    .filter(e => e.hasComponent('minecraft:item'))
    .map(e => e.getComponent('minecraft:item').itemStack.typeId);

  if (block.typeId === 'create:smart_chute') {
    const blockfilter = overworld.getEntitiesAtBlockLocation(block.location).filter(e => e.typeId === 'create:physics');
    const filters = blockfilter[0];

    for (const item of itemAbove) {
      if (filters.getComponent('inventory').container.getItem(0).typeId !== item) {
        const perm = BlockPermutation.resolve(block.typeId).withState('direction', 1);
        block.setPermutation(perm);
      }
    }
  }
}
