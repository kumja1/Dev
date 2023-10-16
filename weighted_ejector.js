import { world, EquipmentSlot, system, DynamicPropertiesDefinition } from '@minecraft/server';
const alertColor = '§6'; // Change this to the color you want for the totem alert message.
// world.afterEvents.worldInitialize.subscribe((arg) => {
//     const definition = new DynamicPropertiesDefinition();
//     definition.defineBoolean("fasttotem:postmortalgoal");
//     definition.defineBoolean("fasttotem:showpostmortal");
//     definition.defineString("fasttotem:postmortalmessage");
//     arg.propertyRegistry.registerWorldDynamicProperties(definition); 
// });
world.afterEvents.itemUse.subscribe((arg) => {
    const { itemStack, source } = arg;
    if ((itemStack.typeId != 'minecraft:totem_of_undying' && itemStack.typeId != 'minecraft:shield')) {
        return;
    };
    system.run(() => {
        const offhand = source.getComponent('minecraft:equippable');
        const offhandItem = offhand.getEquipment(EquipmentSlot.Offhand);
        const container = source.getComponent('minecraft:inventory').container;
        const mainhand = container.getSlot(source.selectedSlot);
        const mainhandItem = container.getItem(source.selectedSlot);
        offhand.setEquipment(EquipmentSlot.offhand, mainhandItem);
        source.playSound('armor.equip_generic');
        mainhand.setItem(offhandItem);
    })
});
world.afterEvents.entityHurt.subscribe((arg) => {
    const { hurtEntity, damage, damageSource } = arg;
    const health = hurtEntity.getComponent('minecraft:health');
    if (damage > 0 || damageSource.cause != 'none') {
        return;
    };
    if (!hurtEntity.hasTag('ReachedPostmortal')) {
        world.sendMessage({ "rawtext": [{ "text": `${hurtEntity.name} reached the goal §a[Postmortal]` }] });
        hurtEntity.addTag('ReachedPostmortal');
    };
    world.sendMessage({ "rawtext": [{ "text": `${alertColor}§l${hurtEntity.name}§r${alertColor} has used a totem.` }] });
    for (const player of world.getPlayers({ "excludeNames": [hurtEntity.name] })) {
        player.playSound('random.totem');
    };
}, { "entityTypes": ["minecraft:player"] });