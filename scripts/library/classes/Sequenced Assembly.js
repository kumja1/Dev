import {ItemStack} from '@minecraft/server'
import { create as Create } from './Events'

class SequencedAssembly {
    /**
     * @param {ItemStack} itemStack
     */
    constructor(itemStack) {
      this.steps = new Map();
      this.itemStack = itemStack;
      this.recipe_index = new Map();
    }
  
    createSequence(name) {
      if (this.steps.has(name)) {
        throw new Error(`Sequence ${name} already exists`);
      }
      this.steps.set(name, {
        sequence: [],
        result: '',
        rounds: 0,
        progress: 0, // Add a progress property
        isFluid:false,
        fluid:''
      });
      return this;
    }
  
    setSequence(name, sequence) {
      const data = this.steps.get(name);
      data.sequence.push(sequence);
      this.steps.set(name, data);
      this.calculateProgress(name); // Calculate and set progress
      return this;
    }
  
    getSequence(name) {
      return this.steps.get(name);
    }
  
    setRounds(name, number) {
      const data = this.getSequence(name);
      data.rounds = number;
      this.calculateProgress(name); // Recalculate progress when rounds change
      this.itemStack.setLore([JSON.stringify(data)]);
    }
  
    // Calculate and set progress based on the current step and sequence length
    calculateProgress(name) {
      const data = this.getSequence(name);
      if (data && data.sequence.length > 0) {
        data.progress = (data.rounds / data.sequence.length) * 100;
      }
    }
  
    // Get the current step in the sequence
    getCurrent(name) {
      const data = this.getSequence(name);
      if (data) {
        const currentStepIndex = Math.floor((data.progress / 100) * data.sequence.length);
        return data.sequence[currentStepIndex];
      }
    }
  
    // Get the next step in the sequence
    getNext(name) {
      const data = this.getSequence(name);
      if (data) {
        const currentStepIndex = Math.floor((data.progress / 100) * data.sequence.length);
        return data.sequence[currentStepIndex + 1];
      }
    }
  }
  
  // Example usage:
  const itemStack = new ItemStack();
  const sequenceAssembler = new SequencedAssembly(itemStack);
  
  sequenceAssembler.createSequence("sequence1");
  sequenceAssembler.setSequence("sequence1", {
    item: "Item1",
    blockRequired: "Block1",
    isComplete: false,
  });
  
  sequenceAssembler.setRounds("sequence1", 3);
  
  // To retrieve the data:
  const sequenceData = sequenceAssembler.getSequence("sequence1");
  console.log(sequenceData);
  
  // To get the current and next step in the sequence:
  const currentStep = sequenceAssembler.getCurrentStep("sequence1");
  const nextStep = sequenceAssembler.getNextStep("sequence1");
  console.log(currentStep, nextStep);
  

  system.afterEvents.scriptEventReceive.subscribe(ev=>{
    const {sourceBlock,id} = ev;
    switch(id){
      case 'sequence':
new SequencedAssembly().createSequence(name).setSequence(name,{})
        break;
    }
  })