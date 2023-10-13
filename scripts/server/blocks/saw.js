import {world,Vector,system, ItemStack, ChatSendAfterEvent} from '@minecraft/server';

ChatSendAfterEvent

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
 * @param {"minecraft:overworld" | "minecraft:nether" | "minecraft:the_end"} dimension 
 */
function veinMine(position, dimension = 'minecraft:overworld') {
    const block = world.getDimension(dimension).getBlock(position);
let chest;
    if (block && block.name === "minecraft:oak_log") {
        const adjacentPositions = getAdjacent(position);
        const logsToBreak = []; 

        // Explore nearby positions for additional logs
        for (const adjacentPos of adjacentPositions) {
            const block = world.getDimension(dimension).getBlock(adjacentPos)
            if (block.typeId === "minecraft:oak_log") {
                logsToBreak.push(adjacentPos);
            }
            if(block.typeId === 'minecraft:chest'){
                chest = block
            }
        }

        // Break the logs
        for (const pos of logsToBreak) {
            world.getDimension(dimension).runCommand(`setblock ${pos} air destroy`);
        }

        if (chest) {
            const leavesDrops = calculateDrops(adjacentPositions, dimension);
            
                const totalDrops = { saplings: 0, sticks: 0, apples: 0 };

                for (const leafDrops of leavesDrops) {
                    totalDrops.saplings += leafDrops.saplings;
                    totalDrops.sticks += leafDrops.sticks;
                    totalDrops.apples += leafDrops.apples;
                }

                if (totalDrops.saplings > 0) {
                 chest.getComponent('inventory').container.addItem(new ItemStack("minecraft:sapling", totalDrops.saplings ));
                }
                if (totalDrops.sticks > 0) {
                    chest.getComponent('inventory').container.addItem(new ItemStack("minecraft:stick", totalDrops.sticks ));
                }
                if (totalDrops.apples > 0) {
                    chest.getComponent('inventory').container.addItem(new ItemStack( "minecraft:apple",  totalDrops.apples ));
                }
            
        }
        // Calculate the number of logs
        const number = logsToBreak.length;
        console.log(`Number of logs mined: ${number}`);
        
    }
}



/**
 * 
 * @param {Vector[]} adjacentPositions 
 * @param {id} dimension 
 * @returns {Array<{saplings:number,sticks:number,apples:number}>}
 */
function calculateDrops(adjacentPositions, dimension = 'minecraft:overworld') {
    const leavesDrops = [];

    for (const adjacentPos of adjacentPositions) {
        const block = world.getDimension(dimension).getBlock(adjacentPos);

        // Check for oak and dark oak leaves
        if (block && block.typeId.endsWith('leaves')) {
            const leafDrops = { saplings: 0, sticks: 0, apples: 0 };

            // Calculate the drops based on probabilities
            if (Math.random() <= 0.05) {
                leafDrops.saplings++;
            }
            if (Math.random() <= 0.02) {
                leafDrops.sticks += Math.floor(Math.random() * 2) + 1; // Random between 1 and 2 sticks
            }
            if (block.typeId === "minecraft:oak_leaves" && Math.random() <= 0.005) {
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
 veinMine(sourceBlock.north(1).location,sourceBlock.dimension.id)


    }
})

class ItemVirtualizedAfterEventSignal {
    /**
     * @protected
     */
    constructor() {
        /**
         * @private
         */
        this.subscribers = {};
    }

    /**
     * @private
     */
    generateId() {
        return Math.random().toString(36).substr(2, 10);
    }
    
    subscribe(callback = (parameter) => {
        const subscriberId = this.generateId();
        this.subscribers[subscriberId] = callback;
    
        const eventCallback = (ev) => {
            const { id, message } = ev;
            if (id === 'create:itemVirtualizedAfterEvent') {
                // Create an instance of ItemVirtualizedAfterEvent and use it.
                const eventData = new ItemVirtualizedAfterEvent(JSON.parse(message));
                if (subscriberId in this.subscribers) {
                    this.subscribers[subscriberId](eventData);
                }
            }
        };
    
        system.afterEvents.scriptEventReceive.subscribe(eventCallback);
    
        return subscriberId;
    })
}    


class ItemVirtualizedAfterEvent {
    
/**
 * @param {{itemStack:ItemStack}} types 
 */
    constructor(types) {
        /**
         * @private
         */
        this.types = types;
        this.itemStack = this.types.itemStack;
        
    }


}

  ItemVirtualizedAfterEventSignal.prototype.subscribe(ev=>{
    ev.prototype
})