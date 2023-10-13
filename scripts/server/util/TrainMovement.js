import { system, world } from "@minecraft/server";
import "./gametests/ui_1.js"
import "instagrapplehook.js"
import "stats.js"
import "spells.js"

class loreItem {
    constructor(itemId, lore) {
        this.itemId = itemId;
        this.lore = lore;
    }
}

const ItemArray = [
    new loreItem("minecraft:iron_helmet", [
        "§a❈Defense: §f+2"
    ]),
    new loreItem("minecraft:iron_chestplate", [
        "§a❈Defense: §f+6"
    ]),
    new loreItem("minecraft:iron_leggings", [
        "§a❈Defense: §f+4"
    ]),
    new loreItem("minecraft:iron_boots", [
        "§a❈Defense: §f+2"
    ]),
    new loreItem("bridge:dragon_dagger", [
        "§r§l§6ITEM ABILITY: §gON MOB IT",
        "§r§8Gives §l§h+6✦"
    ]),
    new loreItem("cc:zombie_sword", [
        "§r§l§6ITEM ABILITY: §gWHEN HELD",
        "§r§8Gives §l§4+4❤"
    ]),
    new loreItem("cc:golem_sword", [
        "§r§l§6ITEM ABILITY: §gWHEN HELD",
        "§r§8Gives §l§h-1✦, §4+8❤"
    ]),
    new loreItem("cc:tarantula_karambit", [
        "§r§l§6ITEM ABILITY: §gWHEN HELD",
        "§r§8Gives §l§h+1✦"
    ]),
    new loreItem("bridge:dragon_falchion", [
        "§r§l§6ITEM ABILITY: §gON MOB HIT",
        "§r§8Gives §l§h+6✦, §4+2❁"
    ]),
    new loreItem("bridge:health_necklace", [
        "§r§l§6Talisman: §4+12❤",
    ]),
    new loreItem("bridge:enchanted_cooked_porkchop", [
        "§o§8That is over 1.2 Million pigs",
        "§o§8that have to die to make one sword.",
        "§o§8-Technoblade"
    ]),
    new loreItem("bridge:pig_sword", [
        "§r§l§6ITEM ABILITY: §gRIGHT CLICK",
        "§r§8Deal §c+10⚔ §8to mobs around you!",
        "§r§8Cooldown: 15s"
    ]),
    new loreItem("bridge:spider_talisman", [
        "§r§l§6Talisman:",
        "§r§8Gives §4+2❁§r§8 when",
        "§r§8near spiders"
    ]),
    new loreItem("bridge:zombie_talisman", [
        "§r§l§6Talisman:",
        "§r§8Gives §4+2❣§r§8 when",
        "§r§8near zombies"
    ]),
    new loreItem("bridge:zombie_relic", [
        "§r§l§6Talisman:",
        "§r§8Gives §4+3❣§r§8 when",
        "§r§8near zombies.",
        "§r§8Inflict §2+2☣ damage to",
        "§r§8nearby zombies."
    ]),
    new loreItem("bridge:spider_relic", [
        "§r§l§6Talisman:",
        "§r§8Gives §4+3❁§r§8 when",
        "§r§8near spiders",
        "§r§8Inflict §2+2☣ damage to",
        "§r§8nearby spiders."
    ]),
    new loreItem("bridge:pig_talisman", [
        "§r§l§6Talisman:",
        "§r§8Buffs The §9✯ Pig Sword",
        "§r§8to give §4+3❣ §r§8when used"
    ]),
    new loreItem("bridge:pig_relic", [
        "§r§l§6Talisman:",
        "§r§8Buffs The §9✯ Pig Sword",
        "§r§8to give §4+3❣, §4+2❈",
        "§r§8when used"
    ]),
    new loreItem("bridge:ender_talisman", [
        "§r§l§6Talisman:",
        "§r§8Inflicts nearby endermen with",
        "§r§8§7+3☄"
    ]),
    new loreItem("bridge:ender_relic", [
        "§r§l§6Talisman:",
        "§r§8Inflicts nearby endermen with",
        "§r§8§7+3☄, §2+2☣"
    ]),
    new loreItem("bridge:ender_artifact", [
        "§r§l§6Talisman:",
        "§r§8Inflicts nearby endermen with",
        "§r§8§7+3☄, §2+3☣",
        "§r§8Buffs the §3۞ Dragon Falchion",
        "§r§8with §g+4❂ §r§8on hit"
    ]),
    new loreItem("bridge:guardian_sword", [
        "§r§l§6ITEM ABILITY: §gRIGHT CLICK",
        "§r§8Shoot a laser that deals",
        "§r§8§c+12⚔.",
        "§r§8Costs §41❤",
        "§r§8(Only reaches 35 blocks)",
        "§r§8Cooldown: 1s"

    ]),
    new loreItem("bridge:glacier_wand", [
        "§r§l§6ITEM ABILITY: §gRIGHT CLICK",
        "§r§8Temporarily freeze enemies",
        "§r§8you are looking at.",
        "§r§8Cooldown: 30s "
    ]),
    new loreItem("bridge:guardian_boots", [
        "§r§l§6ITEM ABILITY: §gWHEN WORN",
        "§r§8§a+6♞, §h+6✦"
    ]),
    new loreItem("bridge:diamond_drill_x355", [
        "§r§lMining Speed: §g+7"
    ]),
    new loreItem("bridge:diamond_drill_x455", [
        "§r§lMining Speed: §g+10"
    ]),
    new loreItem("bridge:diamond_drill_x555", [
        "§r§lMining Speed: §g+15"
    ]),
    new loreItem("bridge:gemstone_drill_x655", [
        "§r§lMining Speed: §g+45"
    ]),
    new loreItem("bridge:gemstone_drill_x755", [
        "§r§lMining Speed: §g+75"
    ]),
    new loreItem("bridge:brute_force_battleaxe", [
        "§r§l§6ITEM ABILITY: §gRIGHT CLICK",
        "§r§8Stun and deal §c+25⚔",
        "§r§8to mobs around you.",
        "§r§8Cooldown: 10s"
    ]),
    new loreItem("bridge:brute_force_falchion", [
        "§r§l§6ITEM ABILITY: §gRIGHT CLICK",
        "§r§8Gain §h+8✦, §4+3❁",
        "§r§8Cooldown: 10s"
    ]),
    new loreItem("bridge:soul_sand_wand", [
        "§r§l§6ITEM ABILITY: §gRIGHT CLICK",
        "§r§8Temporarily freeze enemies",
        "§r§8you are looking at",
        "§r§8and deal §c+125⚔ §8to withers",
        "§r§8Cooldown: 15s "
    ]),
    new loreItem("bridge:withered_longsword", [
        "§r§l§6ITEM ABILITY: §gRIGHT CLICK",
        "§r§8Stun and deal §c+35⚔",
        "§r§8to mobs around you.",
        "§r§8and gain §h+8✦, §4+3❁",
        "§r§8Cooldown: 5s"
    ]),
    new loreItem("bridge:blade_of_the_flames_1", [
        "§r§l§6ITEM ABILITY: §gRIGHT CLICK",
        "§r§8Stun and deal §c+45⚔",
        "§r§8to mobs around you.",
        "§r§8and gain §h+9✦, §4+4❁",
        "§r§8Cooldown: 3s"
    ]),
    new loreItem("bridge:pigman_talisman", [
        "§r§l§6Talisman:",
        "§r§8Buffs The §6✿ Pigman Sword",
        "§r§8to give §4+3❣ §r§8when used"
    ]),
    new loreItem("bridge:pigman_relic", [
        "§r§l§6Talisman:",
        "§r§8Buffs The §6✿ Pigman Sword",
        "§r§8to give §4+3❣, §4+2❈",
        "§r§8§g+3❂ §r§8when used"
    ]),
    new loreItem("bridge:pigman_sword", [
        "§r§l§6ITEM ABILITY: §gRIGHT CLICK",
        "§r§8Deal §c+25⚔ §8to mobs around you!",
        "§r§8Cooldown: 10s"
    ]),
    new loreItem("bridge:soul_sand_sword", [
        "§r§l§6ITEM ABILITY: §gRIGHT CLICK",
        "§r§8Shoot a laser that deals",
        "§r§8§c+25⚔.",
        "§r§8Costs §41❤",
        "§r§8(Only reaches 35 blocks)",
        "§r§8Cooldown: 0.5s"
    ]),
    new loreItem("bridge:blaze_talisman", [
        "§r§l§6Talisman:",
        "§r§8Gives §6♨§r§8 when",
        "§r§8near blazes"
    ]),
    new loreItem("bridge:blaze_relic", [
        "§r§l§6Talisman:",
        "§r§8Gives §6♨§r§8 when",
        "§r§8near blazes",
        "§r§8Inflict §2+4☣ damage to",
        "§r§8nearby blazes."
    ]),
    new loreItem("bridge:blaze_sword", [
        "§r§8Gives §a+10♞"
    ]),
    new loreItem("bridge:blade_of_the_flames_2", [
        "§r§l§6ITEM ABILITY: §gRIGHT CLICK",
        "§r§8Stun and deal §c+45⚔",
        "§r§8to mobs around you.",
        "§r§8and gain §h+9✦, §4+4❁, §a+10♞",
        "§r§8Cooldown: 1.75s"
    ]),
    new loreItem("bridge:blade_of_the_flames_3", [
        "§r§l§6ITEM ABILITY: §gRIGHT CLICK",
        "§r§8Stun and deal §c+50⚔",
        "§r§8to mobs around you.",
        "§r§8and gain §h+10✦, §4+5❁, §a+10♞",
        "§r§8Cooldown: 0.25s"
    ]),
    new loreItem("bridge:blaze_shield", [
        "§r§l§6ITEM ABILITY: §gRIGHT CLICK",
        "§r§8Temporarily take no damage",
        "§r§8but you are unable to deal",
        "§r§8damage and move.",
        "§r§8Cooldown: 15s"
    ]),
    new loreItem("bridge:wither_shield", [
        "§r§l§6ITEM ABILITY: §gRIGHT CLICK",
        "§r§8Temporarily take no damage",
        "§r§8but you are unable to deal",
        "§r§8damage and gain §4+2❁",
        "§r§8Cooldown: 15s"
    ]),
    new loreItem("bridge:reversededge_karambit", [
        "§r§l§6ITEM ABILITY: §gWHEN HELD",
        "§r§8Gives §l§h+100✦",
        "§r§l§6ITEM ABILITY: §gRIGHT CLICK",
        "§r§8Teleport a nearby mob to you",
        "§r§8and deal §c+50⚔. §8And gain",
        "§r§8§h+3✦, §4+3❁",
        "§r§8Cooldown: 12s"
    ])

];

system.runInterval(() => {
    for (const player of world.getPlayers()) {
    
        const playerContainer = player.getComponent("inventory").container
        for (let i = 0; i < playerContainer.size; i++) {
            const item = playerContainer.getItem(i);
            const findLore = ItemArray.find(x => x.itemId == item?.typeId);
            const lore = item?.getLore();
            if (!findLore || !item || lore?.length != 0) continue
            item.setLore(findLore.lore);
            playerContainer.setItem(i, item);
        }
    }
}, 1);


