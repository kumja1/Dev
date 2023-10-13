import {Block,Entity, Player, world,DefinitionModifier, system, ScriptEventCommandMessageAfterEvent, ItemStack} from '@minecraft/server'
import Terminal from './test';


const terminal = new Terminal()

terminal.listen('mechanical_piston',(ev)=>{
    
    const {sourceBlock:block} = ev
    if(block.typeId === 'create:mechanical_piston'){
        const poles = getAdjacentPoleBlocks(?,block,'z')
    }
})
/**
 * 
 * @param {Entity} source 
 * @param {Block} block 
 * @param {string} axis - The axis along which to find adjacent blocks ('x', 'y', or 'z').
 * @returns {import('@minecraft/server').Vector3[]}
 */
function getAdjacentPoleBlocks(source, block, axis) {
    const connectedBlocks = [];
    const visited = new Set();
    const queue = [{ x: block.x, y: block.y, z: block.z }];

    while (queue.length > 0) {
        const { x, y, z } = queue.shift();
        const position = `${x},${y},${z}`;

        if (visited.has(position)) continue;

        visited.add(position);

    
        try {
            const adjacentBlock = source.dimension.getBlock(new Vector(x, y, z));
            // Check if the adjacent block is a pole block (customize this condition based on your block type).
            if (isPole(adjacentBlock, axis)) {
                connectedBlocks.push(adjacentBlock);
            }
            if (visited.size <= 64){
                return;
            }
            const directions = {
                'x': [{ x: 1, y: 0, z: 0 }, { x: -1, y: 0, z: 0 }],
                'y': [{ x: 0, y: 1, z: 0 }, { x: 0, y: -1, z: 0 }],
                'z': [{ x: 0, y: 0, z: 1 }, { x: 0, y: 0, z: -1 }]
            }[axis];

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
            console.log(err, err.stack);
        }
    }

    return connectedBlocks;
}

/**
 * Check if a block is a pole block based on the axis.
 * Customize this function based on your block type.
 * @param {Block} block
 * @param {string} axis - The axis along which to check for pole blocks ('x', 'y', or 'z').
 * @returns {boolean}
 */
function isPole(block, axis) {
    // Customize this condition based on your block type.
    // For example, check if the block has a certain block ID or block state property.
    // Return true if it's a pole block along the specified axis, otherwise false.
    return block.typeId === 'create:piston_pole_extension' && block.someProperty === axis;
}

class Database {
    constructor (name){

    }
}

import * as boss from "@minecraft/server";
import * as boss2 from "@minecraft/server-gametest";
import * as ui from "@minecraft/server-ui";
console.warn("Hi");
const kinLetron = "sfnewmob:mecha_boss";
const shark = "sf:hammershark";
const world = boss.world;
const system = boss.system;
//Initazile
world.afterEvents.entityHitEntity.subscribe(mob => {
    const damager = mob.damagingEntity;
    const victim = mob.hitEntity;

    let damagerView = damager.getViewDirection();
    if (damager.typeId === kinLetron && victim.typeId != kinLetron) {
        //damager = new damager;
        let suBcommand = [
            `particle minecraft:redstone_ore_dust_particle ~~0.5~`,
            `particle minecraft:redstone_ore_dust_particle ~~1~`,
            `particle minecraft:redstone_ore_dust_particle ~~1.5~`,
            `particle minecraft:redstone_ore_dust_particle ~~2~`,
            `particle minecraft:redstone_ore_dust_particle ~~2.5~`,
            `execute as @a[tag=dev] run say Bleeded`,
        ];
        damager.applyImpulse({ x: victim.target.location.x, y: victim.target.location.y, z: victim.target.location.z });
        damager.setRotation({ x: 0, y: 0, z: 2 });
        victim.applyKnockback(damagerView.x, damagerView.z, 3, 1);
        victim.applyImpulse({ x: damagerView.x, y: 0.7, z: damagerView.z += 6 });
    } else if (damager.typeId === shark) {
        //damager = new damager;
        if (victim.typeId === "minecraft:player") {
            console.warn("Is Player");
            victim.applyKnockback(damagerView.x, damagerView.z, 3, 0);
        } else {
            console.warn("Not");
            victim.applyImpulse({ x: damagerView.x, y: 0, z: damagerView.z += 1 });
        }
        sharkBite(victim);
    } else {
        return null;
    }

})
function sharkBite(victims) {
    //let damagerView2 = damager.getViewDirection();
    victims.runCommand("particle minecraft:redstone_ore_dust_particle ~~0.5~");
    victims.runCommand("particle minecraft:redstone_ore_dust_particle ~~0.75~");
    victims.runCommand("particle minecraft:redstone_ore_dust_particle ~~1~");
    victims.runCommand("particle minecraft:redstone_ore_dust_particle ~~1.25~");
    victims.runCommand("particle minecraft:redstone_ore_dust_particle ~~1.5~");
    victims.runCommand("particle minecraft:redstone_ore_dust_particle ~~1.75~");
    victims.runCommand("particle minecraft:redstone_ore_dust_particle ~0.5~0.5~1");
    victims.runCommand("particle minecraft:redstone_ore_dust_particle ~0.5~0.75~1");
    victims.runCommand("particle minecraft:redstone_ore_dust_particle ~0.5~1~1");
    victims.runCommand("particle minecraft:redstone_ore_dust_particle ~0.5~1.5~1");
    victims.runCommand("particle minecraft:redstone_ore_dust_particle ~0.5~1.75~1");

    victims.runCommand("particle minecraft:redstone_ore_dust_particle ~-0.5~3~");
    victims.runCommand("particle minecraft:redstone_ore_dust_particle ~-0.5~0.5~1");
    victims.runCommand("particle minecraft:redstone_ore_dust_particle ~-0.5~0.75~1");
    victims.runCommand("particle minecraft:redstone_ore_dust_particle ~-0.5~1~1");
    victims.runCommand("particle minecraft:redstone_ore_dust_particle ~-0.5~1.5~1");
    victims.runCommand("particle minecraft:redstone_ore_dust_particle ~-0.5~1.75~1");
    system.runTimeout(() => {
        victims.applyDamage(5)
        sharkBite2(victims);
    }, 40)
    victims.runCommand("execute as @a[tag=dev] run say Bleeded");
}
function sharkBite2(e) {
    e.runCommand("particle minecraft:redstone_ore_dust_particle ~~0.5~");
    e.runCommand("particle minecraft:redstone_ore_dust_particle ~~0.75~");
    e.runCommand("particle minecraft:redstone_ore_dust_particle ~~1~");
    e.runCommand("particle minecraft:redstone_ore_dust_particle ~~1.25~");
    e.runCommand("particle minecraft:redstone_ore_dust_particle ~~1.5~");
    e.runCommand("particle minecraft:redstone_ore_dust_particle ~~1.75~");
    e.runCommand("particle minecraft:redstone_ore_dust_particle ~0.5~0.5~1");
    e.runCommand("particle minecraft:redstone_ore_dust_particle ~0.5~0.75~1");
    e.runCommand("particle minecraft:redstone_ore_dust_particle ~0.5~1~1");
    e.runCommand("particle minecraft:redstone_ore_dust_particle ~0.5~1.5~1");
    e.runCommand("particle minecraft:redstone_ore_dust_particle ~0.5~1.75~1");

    e.runCommand("particle minecraft:redstone_ore_dust_particle ~-0.5~3~");
    e.runCommand("particle minecraft:redstone_ore_dust_particle ~-0.5~0.5~1");
    e.runCommand("particle minecraft:redstone_ore_dust_particle ~-0.5~0.75~1");
    e.runCommand("particle minecraft:redstone_ore_dust_particle ~-0.5~1~1");
    e.runCommand("particle minecraft:redstone_ore_dust_particle ~-0.5~1.5~1");
    e.runCommand("particle minecraft:redstone_ore_dust_particle ~-0.5~1.75~1");
}