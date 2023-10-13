import { Player, Dimension, Block, Entity,Vector, world } from '@minecraft/server';


type BlockQueryOptions = {
  maxDistance: number;
  excludeType?: string[];
};

declare module '@minecraft/server' {
  interface Player {
    isAssembled: boolean;
    isBuilding: boolean;
  }

  interface Dimension {
    getBlocks(options: BlockQueryOptions): Block[];
  }

  interface Entity {
    startRiding(targetEntity: Entity): void;
  }
  
  interface Block{
    getAdjecent():Block[]
  }
}


Dimension.prototype.getBlocks = function (options: BlockQueryOptions): Block[] {
  const blocks: Block[] = [];
  for (let x = 0; x <= options.maxDistance; x++) {
    for (let y = 0; y <= options.maxDistance; y++) {
      for (let z = 0; z <= options.maxDistance; z++) {
        const block: Block = this.getBlock({ x, y, z });
        blocks.push(block);
      }
    }
  }

  return blocks.filter((b) => {
    return options.excludeType === undefined || !options.excludeType.includes(b.typeId);
  });
};

// Implement the startRiding function for Entity
Entity.prototype.startRiding = function (targetEntity: Entity):void {
  targetEntity.getComponent('rideable').addRider(this);
};

Block.prototype.getAdjecent = function():Block[] {
    const connectedBlocks :Block[] = [];
    const visited = new Set();
    const queue = [{ x:this.x, y: this.y, z: this.z }];
  
    while (queue.length > 0) {
        const { x, y, z } = queue.shift();
        const position = `${x},${y},${z}`;
  
        if (visited.has(position)) continue;
  
        visited.add(position);
  
        try {
            const adjacentBlock :Block = this.dimension.getBlock(new Vector(x, y, z));
  //Push the adjacent block to the connectedBlocks array.
            connectedBlocks.push(adjacentBlock);
            const directions = [
                { x: 0, y: 0, z: -1 }, // north
                { x: 1, y: 0, z: 0 },  // east
                { x: 0, y: 0, z: 1 },  // south
                { x: -1, y: 0, z: 0 }, // west
                { x: 0, y: 1, z: 0 },  // up
                { x: 0, y: -1, z: 0 }  // down
            ];
  
            for (const direction of directions) {
                const newX = x + direction.x;
                const newY = y + direction.y;
                const newZ = z + direction.z;
                const newPosition = `${newX},${newY},${newZ}`;
  
                if (!visited.has(newPosition)) {
                    queue.push({ x: newX, y: newY, z: newZ });
                }
            }
        } catch (err) {
      console.log(err,err.stack);
        }
    }
  
    return connectedBlocks;
} 

