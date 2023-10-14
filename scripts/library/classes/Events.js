import { ItemStack, Player, system, world } from '@minecraft/server';
import {waitUntil as wait} from '../functions/util'



/**
* Generates a unique subscriber ID.
* @private
* @returns {string} A unique subscriber ID.
*/
function generateId() {
   return Math.random().toString(36).substr(2, 10);
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
 * @typedef ItemVirtualized
 * @property {ItemStack} itemStack
 */
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
         */
        this.itemStack = this.types.itemStack;
    }
}

/**
 * @typedef MixerProcess
 * @property {{name: string}} recipe
 * @property {boolean} [canceled=false]
 */
class MechanicalMixerProcessAfterEvent {
    /**
     * Creates an instance of MechanicalMixerProcessAfterEvent.
     * @param {MixerProcess} types - The event data containing recipe information.
     */
    constructor(types) {
        this.recipe = types.recipe;
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
         /**
         * @private
         */
        this.canceled = false
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
           if(this.canceled === true) return;
            // Create an instance of ItemVirtualizedBeforeEvent and use it.
            const eventData = new ItemVirtualizedBeforeEvent(JSON.parse(message));
            if (subscriberId in this.subscribers) {
                this.subscribers[subscriberId](eventData);
            }
            wait(message === 'true')
            this.canceled = true
         

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
         * @description itemStack that was virtualized.
         */
        this.itemStack = this.types.itemStack;
        this.canceled = this.types.canceled
        wait(this.canceled===true)
        create.brodcastEvent('itemVirtualizedBeforeEvent',false,JSON.stringify(this.canceled))
     
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
         /**
         * @private
         */
        this.canceled = false;
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
            if(this.canceled===true) return;
            if (id === 'create:mechanicalMixerProcessAfterEvent') {
                let data = JSON.parse(message)
                // Create an instance of MechanicalMixerProcessAfterEvent and use it.
                const eventData = new MechanicalMixerProcessBeforeEvent(data);
                if (subscriberId in this.subscribers) {
                    this.subscribers[subscriberId](eventData);
                }
                wait(message === 'true')
            this.canceled = true
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
        wait(this.canceled===true)
        create.brodcastEvent('mechanicalMixerProcess',false,JSON.stringify(this.canceled))
    }
}


/**
 * Represents the Create Class, providing access to afterEvents and beforeEvents of Create's Systems.
 * @class
 */
class Create {
    constructor() {
        this.afterEvents = new CreateAfterEvents();
        this.beforeEvents = new CreateBeforeEvents();
    }

    /**
     * @param {string} eventName
     * @param {string} data
     * @param {boolean} wait
     */
    brodcastEvent(eventName,wait = false,data){
        this.runCommand(`scriptevent create:${eventName} ${data}`,'overworld')
    

    }

    runCommand(command,dimension){
        world.getDimension(dimension).runCommand(command)
    }
}

/**
 * Represents the afterEvents of the Create mod.
 * @class
 */
class CreateAfterEvents {
    constructor() {
        this.itemVirtualized = new ItemVirtualizedAfterEventSignal();
        this.mixerProcess = new MechanicalMixerProcessAfterEventSignal()
    }
}

/**
 * Represents the beforeEvents of the Create mod.
 * @class
 */
class CreateBeforeEvents {
    constructor() {
        this.itemVirtualized = new ItemVirtualizedBeforeEventSignal();
        this.mixerProcess = new MechanicalMixerProcessBeforeEventSignal()
    }
}

// Export the Create instance and classes.
export const create = new Create();
export { CreateAfterEvents, CreateBeforeEvents };

create.afterEvents.mixerProcess.subscribe(ev=>{
    const {name} = ev 
    console.warn(name)
})
create.afterEvents.mixerProcess.subscribe(({name,recipe})=>{
    console.warn(name)
})

create.beforeEvents.mixerProcess.subscribe(ev=>{
    const {name} = ev
    ev.canceled = true
})


console.warn(cooldown);