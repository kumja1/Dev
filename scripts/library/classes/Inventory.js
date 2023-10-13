import { Player, Vector } from "@minecraft/server"
export class Inventory {
    static containers = new Map()
    inventory = {
        items: Array.from({ length: 36 }),
        load(player) {
            const inv = player.getComponent('inventory')
            const container = inv.container
            this.items.forEach((_, slot) => {
                container.setItem(slot, this.items[slot])
            })

        }
    }
    equipment_inventory = {
        items: {
            head: null, chest: null, legs: null, feet: null, offhand: null
        },
        load(player) {
            const eq = player.getComponent('equippable')
            Object.keys(this.items).forEach(slot => {
                eq.setEquipment(slot, this.items[slot])
            })
        }
    }
    /**@param {Player} player  */
    constructor(player, name) {

        const inv = player.getComponent('inventory')
        const eq = player.getComponent('equipment_inventory')
        const container = inv.container
        const {
            equipment_inventory: { items: eqItems },
            inventory: { items: invItems }
        } = this
        invItems.forEach((_, slot) => {
            invItems[slot] = container.getItem(slot)?.clone()
        })
        Object.keys(eqItems).forEach(slot => {
            eqItems[slot] = eq.getEquipment(slot)?.clone()
        })
        Inventory.containers.set(name ?? player.id, this)
    }
    loadAll(player) {
        const { equipment_inventory, inventory } = this
        equipment_inventory.load(player)
        inventory.load(player)
    }
}

