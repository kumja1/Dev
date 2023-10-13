import { world,ItemStack } from '@minecraft/server';
world.afterEvents.itemUse.subscribe((event) => {
const {itemStack,source} = event;
const selectedItem = source.getComponent('inventory').container.getItem(source.selectedSlot)
const block = source.getBlockFromViewDirection().block

if (!block) return
if (itemStack.typeId == 'rc:andesite_alloy'){
switch (block.typeId) {
    case "minecraft:stripped_acacia_log":
        block.dimension.runCommand(`setblock ${block.x} ${block.y} ${block.z} rc:andesite_casing replace`)
        source.getComponent('inventory').container.setItem(source.selectedSlot, selectedItem.amount > 1 ? new ItemStack(selectedItem.typeId, selectedItem.amount - 1) :new ItemStack('minecraft:air'))
        break;
        case "minecraft:stripped_oak_log":
        block.dimension.runCommand(`setblock ${block.x} ${block.y} ${block.z} rc:andesite_casing replace`)
        source.getComponent('inventory').container.setItem(source.selectedSlot, selectedItem.amount > 1 ? new ItemStack(selectedItem.typeId, selectedItem.amount - 1) :new ItemStack('minecraft:air'))
        break;
        case "minecraft:stripped_dark_oak_log":
        block.dimension.runCommand(`setblock ${block.x} ${block.y} ${block.z} rc:andesite_casing replace`)
        source.getComponent('inventory').container.setItem(source.selectedSlot, selectedItem.amount > 1 ? new ItemStack(selectedItem.typeId, selectedItem.amount - 1) :new ItemStack('minecraft:air'))
        break;     
        case "minecraft:stripped_birch_log":
        block.dimension.runCommand(`setblock ${block.x} ${block.y} ${block.z} rc:andesite_casing replace`)
        source.getComponent('inventory').container.setItem(source.selectedSlot, selectedItem.amount > 1 ? new ItemStack(selectedItem.typeId, selectedItem.amount - 1) :new ItemStack('minecraft:air'))
        break;
        case "minecraft:stripped_spruce_log":
        block.dimension.runCommand(`setblock ${block.x} ${block.y} ${block.z} rc:andesite_casing replace`)
        source.getComponent('inventory').container.setItem(source.selectedSlot, selectedItem.amount > 1 ? new ItemStack(selectedItem.typeId, selectedItem.amount - 1) :new ItemStack('minecraft:air'))
        break;
        case "minecraft:stripped_mangrove_log":
        block.dimension.runCommand(`setblock ${block.x} ${block.y} ${block.z} rc:andesite_casing replace`)
        source.getComponent('inventory').container.setItem(source.selectedSlot, selectedItem.amount > 1 ? new ItemStack(selectedItem.typeId, selectedItem.amount - 1) :new ItemStack('minecraft:air'))
        break;
        case "minecraft:stripped_jungle_log":
            block.dimension.runCommand(`setblock ${block.x} ${block.y} ${block.z} rc:andesite_casing replace`)
            source.getComponent('inventory').container.setItem(source.selectedSlot, selectedItem.amount > 1 ? new ItemStack(selectedItem.typeId, selectedItem.amount - 1) :new ItemStack('minecraft:air'))
            break;
        case "minecraft:stripped_cherry_log":
        block.dimension.runCommand(`setblock ${block.x} ${block.y} ${block.z} rc:andesite_casing replace`)
        source.getComponent('inventory').container.setItem(source.selectedSlot, selectedItem.amount > 1 ? new ItemStack(selectedItem.typeId, selectedItem.amount - 1) :new ItemStack('minecraft:air'))
        break;
        
}
}
})
