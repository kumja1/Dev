import {world,ItemStack} from '@minecraft/server';
const {afterEvents} = world
const wrench_breakable = [
    "minecraft:repeater",
    "minecraft:comparator",
    "minecraft:redstone_wire",
    "minecraft:minecart",
    "minecraft:chest_minecart",
    "minecraft:hopper_minecart",
    "minecraft:tnt_minecart",
    "minecraft:powered_rail",
    "minecraft:detector_rail",
    "minecraft:activator_rail",
    "minecraft:rail"
]
afterEvents.entityHitBlock.subscribe((event)=>{
    const {hitBlock,damagingEntity} =event
   
    if (damagingEntity.getComponent('inventory').container.getItem(damagingEntity.selectedSlot)?.typeId== 'rc:wrench'&& damagingEntity.isSneaking){
if (hitBlock){
   if (hitBlock.typeId.startsWith('rc') || wrench_breakable.includes(hitBlock.typeId)){
        const typeid =  hitBlock.getItemStack().typeId


        damagingEntity.getComponent('inventory').container.addItem(new ItemStack(hitBlock.typeId,1))
    hitBlock.dimension.runCommand(`setblock  ${hitBlock.x} ${hitBlock.y} ${hitBlock.z} air destroy`)
 
   damagingEntity.dimension.getEntities({location:damagingEntity.location,maxDistance:7}).filter((e)=>e.typeId == 'minecraft:item' && e.getComponent('minecraft:item').itemStack.typeId == typeid || wrench_breakable.includes(hitBlock.typeId)).forEach((e)=>e.kill())

    }
    
}
}
})
   afterEvents.entityHitEntity.subscribe((event)=>{
        const {hitEntity,damagingEntity} =event
        
if (damagingEntity.getComponent('inventory').container.getItem(damagingEntity.selectedSlot)?.typeId== 'rc:wrench'&& damagingEntity.isSneaking){
 if (hitEntity){
    if (wrench_breakable.includes(hitEntity.typeId)|| hitEntity.typeId.startsWith('rc')){

     damagingEntity.getComponent('inventory').container.addItem(new ItemStack(hitEntity.typeId,1))
       
 const typeids =  hitEntity?.typeId
 hitEntity.dimension.runCommand(`kill @e[type=${hitEntity.typeId},x=${hitEntity.location.x},y=${hitEntity.location.y},z=${hitEntity.location.z}]`)
       damagingEntity.dimension.getEntities({location:damagingEntity.location,maxDistance:3,type: 'minecraft:item'}).filter((e)=> e.getComponent('minecraft:item').itemStack.typeId == typeids).forEach((e)=>e.kill())
        
        


}
    }
}
    })
