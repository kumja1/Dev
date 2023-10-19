import { ItemStack, Player, system, world,ScriptEventCommandMessageAfterEvent, Block } from '@minecraft/server';
import {waitUntil as wait} from '../functions/extensions'

/**
 * @typedef ItemVirtualized
 * @property {ItemStack} itemStack
 * @property {import('@minecraft/server').Vector3} location
 */

/**
 * @typedef MixerProcess
 * @property {{name: string}} recipe
 * @property {boolean} [canceled=false]
 * @property {Block} block
 */

/**
 * @typedef CrafterCrafting
 * @property {{item:string,count:number,current:number}[]} ingredients
 * @property {{ingredients: { item: string; count: number; current: number }[]; extraItems: Map<string, number>;}} recipe
 * @property {Block} block
 */

/**
 * @typedef MechanicalPress
 * @property {Block} block
 * 
 */
/**
* Generates a unique subscriber ID.
* @private
* @returns {string} A unique subscriber ID.
*/
function generateId() {
   return Math.random().toString(36).substring(2, 10);
}
/**
 * Represents a signal for the itemVirtualizedAfter event in Create.
 * @class
 */
class ItemVirtualizedAfterEventSignal {
    /**
     * Creates an instance of ItemVirtualizedAfterEventSignal.
     */
    constructor() {
        /**
         * @private
         */
        this.subscribers = {};
    }

/**
 * Subscribes to the itemVirtualizedAfter event and provides a callback.
 * @param {function(ItemVirtualizedAfterEvent): void} callback - The callback function to be executed when the event is triggered.
 * @returns {string} A subscriber ID for unsubscribing later.
 * @example
 * const listener = create.afterEvents.itemVirtualized.subscribe((event) => {
 *     // Handle the event here
 * });
 * create.afterEvents.itemVirtualized.unsubscribe(listener);
 */
subscribe(callback = (arg) => {
    const subscriberId = generateId();
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
});

    /**
     * Unsubscribes a subscriber from the itemVirtualizedAfter event.
     * @param {string} subscriberId - The ID of the subscriber to unsubscribe.
     */
    unsubscribe(subscriberId){
        delete this.subscribers[subscriberId];
    }

    
}

/**
 * Represents an event object for itemVirtualizedAfter.
 */
class ItemVirtualizedAfterEvent {
    /**
     * Creates an instance of ItemVirtualizedAfterEvent.
     * @param {ItemVirtualized} types - The event data containing an ItemStack.
     */
    constructor(types) {
        /**
         * @private
         */
        this.types = types;
        /**
         * @description itemStack about to be virtualized.
         * @readonly
         */
        this.itemStack = this.types.itemStack;
    }
}


class MechanicalMixerProcessAfterEvent {
    /**
     * Creates an instance of MechanicalMixerProcessAfterEvent.
     * @param {MixerProcess} types - The event data containing recipe information.
     */
    constructor(types) {
          /**
         * @readonly
         */
        this.recipe = types.recipe;
          /**
         * @readonly
         */
        this.name = types.recipe.name;
    }
}

/**
 * Represents a signal for the mechanicalMixerProcessAfter event in Create.
 * @class
 */
class MechanicalMixerProcessAfterEventSignal {
    /**
     * Creates an instance of MechanicalMixerProcessSignal.
     */
    constructor() {
        this.subscribers = {};
    }

    /**
     * Subscribes to the mechanicalMixerProcessAfter event and provides a callback.
     * @param {function(MechanicalMixerProcessAfterEvent): void} callback - The callback function to be executed when the event is triggered.
     * @returns {string} A subscriber ID for unsubscribing later.
     * @example
     * const listener = create.afterEvents.mechanicalMixerProcess.subscribe((event) => {
     *     // Handle the event here
     * });
     * create.afterEvents.mechanicalMixerProcess.unsubscribe(listener);
     */
    subscribe(callback = (arg) => {
        const subscriberId = generateId();
        this.subscribers[subscriberId] = callback;

        const eventCallback = (ev) => {
            const { id, message } = ev;
            if (id === 'create:mechanicalMixerProcessAfterEvent') {
                // Create an instance of MechanicalMixerProcessAfterEvent and use it.
                const eventData = new MechanicalMixerProcessAfterEvent(JSON.parse(message));
                if (subscriberId in this.subscribers) {
                    this.subscribers[subscriberId](eventData);
                }
            }
        };

        system.afterEvents.scriptEventReceive.subscribe(eventCallback);
        return subscriberId;
    })

    /**
     * Unsubscribes a subscriber from the mechanicalMixerProcessAfter event.
     * @param {string} subscriberId - The ID of the subscriber to unsubscribe.
     */
    unsubscribe(subscriberId) {
        delete this.subscribers[subscriberId];
    }
}


/**
 * Represents a signal for the itemVirtualizedBefore event in Create.
 * @class
 */
class ItemVirtualizedBeforeEventSignal {
    /**
     * Creates an instance of ItemVirtualizedBeforeEventSignal.
     */
    constructor() {
        /**
         * @private
         */
        this.subscribers = {};
    }

/**
 * Subscribes to the itemVirtualizedBefore event and provides a callback.
 * @param {function(ItemVirtualizedBeforeEvent): void} callback - The callback function to be executed when the event is triggered.
 * @returns {string} A subscriber ID for unsubscribing later.
 * @example
 * const listener = create.beforeEvents.itemVirtualized.subscribe((event) => {
 *     // Handle the event here
 * });
 * create.beforeEvents.itemVirtualized.unsubscribe(listener);
 */
subscribe(callback = (arg) => {
    const subscriberId = generateId();
    this.subscribers[subscriberId] = callback;

    const eventCallback = (ev) => {
        const { id, message } = ev;
        if (id === 'create:itemVirtualizedBeforeEvent') {
            let data = JSON.parse(message)
            // Create an instance of ItemVirtualizedBeforeEvent and use it.
            const eventData = new ItemVirtualizedBeforeEvent(data);
            if (subscriberId in this.subscribers) {
                this.subscribers[subscriberId](eventData);
            }
         

        }
    };

    system.afterEvents.scriptEventReceive.subscribe(eventCallback);
    return subscriberId;
});

    /**
     * Unsubscribes a subscriber from the itemVirtualizedBefore event.
     * @param {string} subscriberId - The ID of the subscriber to unsubscribe.
     */
    unsubscribe(subscriberId){
        delete this.subscribers[subscriberId];
    }
}
/**
 * @typedef ItemVirtualizedBefore
 * @property {ItemStack} itemStack
 * @property {boolean} [canceled=false]
 */

/**
 * Represents an event object for itemVirtualizedBeforeEvent Signal.
 */
class ItemVirtualizedBeforeEvent {
    /**
     * Creates an instance of ItemVirtualizedBeforeEvent.
     * @param {ItemVirtualizedBefore} types - The event data containing an ItemStack.
     */
    constructor(types) {
        /**
         * @private
         */
        this.types = types;
        /**
         * @description itemStack about to be virtualized.
         */
        this.itemStack = this.types.itemStack;
        this.canceled = this.types.canceled
        system.run(async ()=>{
        await wait(this.canceled===true)
        create.brodcastEvent('itemVirtualizedBeforeEventCancelled',true,JSON.stringify(this.canceled))
    })
    }
}



/**
 * Represents a signal for the mechanicalMixerProcessBefore event in Create.
 * @class
 */
class MechanicalMixerProcessBeforeEventSignal {
    /**
     * Creates an instance of MechanicalMixerProcessBeforeEvent Signal.
     */
    constructor() {
        /**
         * @private
         */
        this.subscribers = {};
    }

    /**
     * Subscribes to the mechanicalMixerProcessBefore event and provides a callback.
     * @param {function(MechanicalMixerProcessBeforeEvent): void} callback - The callback function to be executed when the event is triggered.
     * @returns {string} A subscriber ID for unsubscribing later.
     * @example
     * const listener = create.beforeEvents.mixerProcess.subscribe((event) => {
     *     // Handle the event here
     * });
     * create.beforeEvents.mixerProcess.unsubscribe(listener);
     */
    subscribe(callback = (arg) => {
        const subscriberId = generateId();
        this.subscribers[subscriberId] = callback;

        const eventCallback = (ev) => {
            const { id, message } = ev;
            if (id === 'create:mechanicalMixerProcessAfterEvent') {
                let data = JSON.parse(message)
                // Create an instance of MechanicalMixerProcessAfterEvent and use it.
                const eventData = new MechanicalMixerProcessBeforeEvent(data);
                if (subscriberId in this.subscribers) {
                    this.subscribers[subscriberId](eventData);
                }
            }
        };

        system.afterEvents.scriptEventReceive.subscribe(eventCallback);
        return subscriberId;
    })

    /**
     * Unsubscribes a subscriber from the MechanicalMixerProcessBefore event.
     * @param {string} subscriberId - The ID of the subscriber to unsubscribe.
     */
    unsubscribe(subscriberId) {
        delete this.subscribers[subscriberId];
    }
}




class MechanicalMixerProcessBeforeEvent {
    /**
     * Creates an instance of MechanicalMixerProcessBeforeEvent.
     * @param {MixerProcess} types - The event data containing recipe information.
     */
    constructor(types) {
        this.recipe = types.recipe;
        this.name = types.recipe.name;
        this.canceled = types.canceled
        system.run(async ()=>{
       await wait(this.canceled===true)
        create.brodcastEvent('mechanicalMixerProcessBeforeEventCancelled',true,JSON.stringify(this.canceled))
    })
    }

/**
 * @param {{name:string}} recipe
 * Sets the recipe it should process(Note:will only process recipe if it has materials for it)
 */
    setRecipe(recipe){
create.brodcastEvent('mechanicalMixerProcessRecipeSet',true,JSON.stringify(recipe))
    }
}

/**
 * Represents a signal for the CrafterStartCraftingAfter event in Create.
 * @class
 */
class CrafterStartCraftingAfterEventSignal {
    /**
     * Creates an instance of CrafterStartCraftingAfterEvent Signal.
     */
    constructor() {
        /**
         * @private
         */
        this.subscribers = {};
    }

    /**
     * Subscribes to the CrafterStartCraftingAfter event and provides a callback.
     * @param {function(CrafterStartCraftingAfterEvent): void} callback - The callback function to be executed when the event is triggered.
     * @returns {string} A subscriber ID for unsubscribing later.
     * @example
     * const listener = create.afterEvents.crafterStartCrafting.subscribe((event) => {
     *     // Handle the event here
     * });
     * create.afterEvents.crafterStartCrafting.unsubscribe(listener);
     */
    subscribe(callback = (arg) => {
        const subscriberId = generateId();
        this.subscribers[subscriberId] = callback;

        const eventCallback = (ev) => {
            const { id, message } = ev;
            if (id === 'create:mechanicalMixerProcessAfterEvent') {
                let data = JSON.parse(message)
                // Create an instance of MechanicalMixerProcessAfterEvent and use it.
                const eventData = new MechanicalMixerProcessBeforeEvent(data);
                if (subscriberId in this.subscribers) {
                    this.subscribers[subscriberId](eventData);
                }
            }
        };

        system.afterEvents.scriptEventReceive.subscribe(eventCallback);
        return subscriberId;
    })

    /**
     * Unsubscribes a subscriber from the CrafterStartCraftingAfter event.
     * @param {string} subscriberId - The ID of the subscriber to unsubscribe.
     */
    unsubscribe(subscriberId) {
        delete this.subscribers[subscriberId];
    }
}




class CrafterStartCraftingAfterEvent {
    /**
     * Creates an instance of CrafterStartCraftingAfterEvent.
     * @param {CrafterCrafting} types - The event data containing recipe information.
     */
    constructor(types) {
        this.recipe = types.recipe;
        this.ingredients = types.ingredients;
        this.block = types.block
    }
}
/**
 * Represents the Create Class, providing access to afterEvents and beforeEvents of Create's Systems.
 * @class
 */
class Create {
    constructor() {
          /**
         * @readonly
         */
        this.afterEvents = new CreateAfterEvents();
          /**
         * @readonly
         */
        this.beforeEvents = new CreateBeforeEvents();
    }

    /**
     * @param {string} eventName
     * @param {string} data
     * @param {boolean} isResponse Whether this is a response to a event
     */
    brodcastEvent(eventName,isResponse = false,data){

       return isResponse ? this.runCommand(`scriptevent create:${eventName+'response'} ${data}`,'overworld') : this.runCommand(`scriptevent create:${eventName} ${data}`,'overworld')
    

    }
/**
 * @param {string} command
 * @param {string} dimension
 */
    runCommand(command,dimension='overworld'){
        return world.getDimension(dimension).runCommand(command)
    }
    
/**
 * Allows you to listen/wait for a response(likely data whether it was canceled,the recipe was updated etc...)
 * @param {string} eventName event to listen for
 * @param {function(ScriptEventCommandMessageAfterEvent):void} callback the callback to excute when you recieve the events response
 */
    async waitForResponse(eventName,callback){
        system.afterEvents.scriptEventReceive.subscribe(ev=>{
            const {id} = ev
            await wait(id === eventName + 'response')
            callback(ev)
        },{namespaces:['create']})
    }
}

/**
 * Represents the afterEvents of the Create mod.
 * @class
 */
class CreateAfterEvents {
    constructor() {
        /**
         * @readonly
         */
        this.itemVirtualized = new ItemVirtualizedAfterEventSignal();
          /**
         * @readonly
         * This is after a mixer processes a recipe
         */
        this.mixerProcess = new MechanicalMixerProcessAfterEventSignal()
          /**
         * @readonly
         * This is after the crafter has started crafting
         */
        this.crafterStartCrafting = new CrafterStartCraftingAfterEventSignal();
    }
}

/**
 * Represents the beforeEvents of the Create mod.
 * @class
 */
class CreateBeforeEvents {
    constructor() {
          /**
         * @readonly
         */
        this.itemVirtualized = new ItemVirtualizedBeforeEventSignal();
          /**
         * @readonly
         */
        this.mixerProcess = new MechanicalMixerProcessBeforeEventSignal()
    }
}


// Export the Create instance and classes.
export const create = new Create();
export { CreateAfterEvents, CreateBeforeEvents };
create.waitForResponse('mechanicalMixerProcess',()=>{

})
create.afterEvents.mixerProcess.subscribe(ev=>{
    const {name} = ev 
    console.warn(name)
})
create.afterEvents.mixerProcess.subscribe(({name,recipe})=>{
    console.warn(name)
})

create.beforeEvents.mixerProcess.subscribe(ev=>{
    const {name,setRecipes} = ev
    ev.canceled = true
})
let canceled;
create.waitForResponse('mechanicalMixerProcessBeforeEventCancelled',(ev)=>{
    const {message} = ev
    const data = JSON.parse(message)
    if(data.canceled === true){
canceled = data.canceled
    } 
})
/**
 * @param {import('@minecraft/server').Vector3} start
 * @param {import('@minecraft/server').Vector3} end
 */
function splitLoc(start,end){
    const midX = (start.x+end.x)/2
    const midY = (start.y+end.y)/2
    const midZ = (start.z+end.z)/2

    const destination1 = {x:midX,y:midY,z:midZ}
    const destination2 = {x:end.x,y:end.y,z:end.z}
    const location = [
        destination1,
        destination2
    ]
    return location

}

const instances = {};

class DynamicPropertiesDB {
    /**
     * @param {string} name
     */
    constructor(name) {
        if (typeof name !== 'string') {
            throw new Error('Name must be a string.');
        }
        if (instances[name]) {
            return instances[name];
        }
        this.name = name;
        instances[name] = this;
    }

    set(value) {
        if (typeof value === 'object') {
            value = JSON.stringify(value);
        }    
        world.setDynamicProperty(this.name, value);
    }

    get(key = undefined) {
        const storedValue = world.getDynamicProperty(this.name);
    
        if (typeof storedValue === 'string') {
            try {
                const parsedValue = JSON.parse(storedValue);
                if (key !== undefined && typeof parsedValue === 'object' && key in parsedValue) {
                    return parsedValue[key];
                }
                return parsedValue;
            } catch (error) {
                return storedValue;
            }
        }
    
        return storedValue;
    }
    
    clear() {
        world.setDynamicProperty(this.name, null);
    }
}