import { ItemStack, system, world } from '@minecraft/server';
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
     * Generates a unique subscriber ID.
     * @private
     * @returns {string} A unique subscriber ID.
     */
    generateId() {
        return Math.random().toString(36).substr(2, 10);
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
        this.runCommand(`/scriptevent create:${eventName} ${data}`,'overworld')
    

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
        this.mixerProcess 
    }
}

/**
 * Represents the beforeEvents of the Create mod.
 * @class
 */
class CreateBeforeEvents {
    constructor() {}
}

class MixerProcess {
    constructor(types){
        this.recipe = types.recipe

    }
}

// Export the Create instance and classes.
export const create = new Create();
export { CreateAfterEvents, CreateBeforeEvents };
