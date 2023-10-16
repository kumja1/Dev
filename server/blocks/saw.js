import {world,Vector,system,Dimension, ItemStack} from '@minecraft/server';
const logs = [
    'minecraft:spruce_log',
    'minecraft:oak_log',
    'minecraft:birch_log',
    'minecraft:jungle_log',
]

let id =Dimension.prototype.id

/**
 
 * @param {Vector} position 
@returns {Vector[]}
*/
// This function returns adjacent positions including diagonals
function getAdjacent(position) {
    const result = [];
    const offsets = [
       new Vector(1, 0, 0),
        new Vector(-1, 0, 0),
        new Vector(0, 1, 0),
        new Vector(0, -1, 0),
        new Vector(0, 0, 1),
        new Vector(0, 0, -1),
        new Vector(1, 1, 0),
        new Vector(1, -1, 0),
        new Vector(-1, 1, 0),
        new Vector(-1, -1, 0),
    ];

    for (const offset of offsets) {
        result.push(new Vector(position.x+offset.x,pos.y+offset.y,position.z+offset.z));
    }

    return result;
}
/**
 * 
 * @param {Vector} position 
 * @param {id} dimension 
 */
function veinMine(position, dimension = 'minecraft:overworld') {
    const block = world.getDimension(dimension).getBlock(position);

    if (block && block.name === "minecraft:oak_log") {
        const adjacentPositions = getAdjacent(position);
        const logsToBreak = []; // List of positions with logs

        // Explore nearby positions for additional logs
        for (const adjacentPos of adjacentPositions) {
            if (world.getDimension(dimension).getBlock(adjacentPos).typeId === "minecraft:oak_log") {
                logsToBreak.push(adjacentPos);
            }
        }

        // Break the logs
        for (const pos of logsToBreak) {
            world.getDimension(dimension).runCommand(`setblock ${pos} air destroy`);
        }

        // Calculate drops from adjacent leaves and add them to the chest
        const chestPosition = getChestPosition(position);
        if (chestPosition) {
            const leavesDrops = calculateLeaveDrops(adjacentPositions, dimension);
            const chestBlock = world.getBlock(chestPosition);
            if (chestBlock && chestBlock.name === "minecraft:chest") {
                const chest = minecraft.createChest(chestBlock);
                const totalDrops = { saplings: 0, sticks: 0, apples: 0 };

                for (const leafDrops of leavesDrops) {
                    totalDrops.saplings += leafDrops.saplings;
                    totalDrops.sticks += leafDrops.sticks;
                    totalDrops.apples += leafDrops.apples;
                }

                if (totalDrops.saplings > 0) {
                    minecraft.addEntityToChest(chest, { name: "minecraft:sapling", count: totalDrops.saplings });
                }
                if (totalDrops.sticks > 0) {
                    minecraft.addEntityToChest(chest, { name: "minecraft:stick", count: totalDrops.sticks });
                }
                if (totalDrops.apples > 0) {
                    minecraft.addEntityToChest(chest, { name: "minecraft:apple", count: totalDrops.apples });
                }
            }
        }

        // Calculate the number of logs
        const numberOfLogs = logsToBreak.length;
        console.log(`Number of logs mined: ${numberOfLogs}`);
    }
}



/**
 * 
 * @param {Vector[]} adjacentPositions 
 * @param {id} dimension 
 * @returns {Array<{saplings:number,sticks:number,apples:number}>}
 */
function calculateLeaveDrops(adjacentPositions, dimension = 'minecraft:overworld') {
    const leavesDrops = [];

    for (const adjacentPos of adjacentPositions) {
        const block = world.getDimension(dimension).getBlock(adjacentPos);

        // Check for oak and dark oak leaves
        if (block && (block.name === "minecraft:oak_leaves" || block.name === "minecraft:dark_oak_leaves")) {
            const leafDrops = { saplings: 0, sticks: 0, apples: 0 };

            // Calculate the drops based on probabilities
            if (Math.random() <= 0.05) {
                leafDrops.saplings++;
            }
            if (Math.random() <= 0.02) {
                leafDrops.sticks += Math.floor(Math.random() * 2) + 1; // Random between 1 and 2 sticks
            }
            if (block.name === "minecraft:oak_leaves" && Math.random() <= 0.005) {
                leafDrops.apples++;
            }

            leavesDrops.push(leafDrops);
        }
    }

    return leavesDrops;
}

system.afterEvents.scriptEventReceive.subscribe(ev=>{
    const {sourceBlock,id} = ev
    if(id == 'create:sawbreak'&& sourceBlock.typeId == 'create:mechanical_saw'){

    }
})