import { world, Vector, system } from '@minecraft/server';

const overworld = world.getDimension("overworld");



for (const filter of overworld.getEntities({ type: "create:physics" })) {
  const block = filter.dimension.getBlock(filter.location);
  if (block.typeId === 'create:andesite_funnel') {
    const blockLoc = new Vector(block.location.x, block.location.y, block.location.z)
    system.runInterval(() => {
      const entities = block.dimension.getEntitiesFromRay(blockLoc,Vector.forward, { maxDistance: 3 });
      for (const entity of entities) {
        if (entity.entity.getComponent('item').itemStack.typeId !== filter.getComponent('item').itemStack.typeId) {
          continue;
        }
    
    
        const position = block.location;
        const direction = new Vector(
          position.x - entity.entity.location.x,
          position.y - entity.entity.location.y,
          position.z - entity.entity.location.z
        ).normalized();
        const speed = 0.2; // Adjust the speed as needed
        const impulse = new Vector(
          direction.x * speed,
          direction.y * speed,
          direction.z * speed
        );
        entity.entity.applyImpulse(impulse);
      }
    });
  }

}