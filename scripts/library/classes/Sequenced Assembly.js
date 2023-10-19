import {ItemStack} from '@minecraft/server'
class SequencedAssembly {
  /**
   * 
   * @param {ItemStack} itemStack 
   */
  constructor(itemStack){
    /**
     * @type {Map<string,{sequence:[],result:string,rounds:number}>}
     */
    this.steps = new Map()
    this.itemStack = itemStack
    this.recipe_index = new Map()
  }
  /**
   * 
   * @param {string} name 
   * @returns {SequencedAssembly}
   */
  createSequence(name){
    if (this.steps.has(name)){
      throw new Error(`Sequence ${name} already exists`)
    }
    this.steps.set(name,{
      sequence:[],
      result:'',
      rounds:0
    })
    return this
  }
/**
 * 
 * @param {string} name 
 * @param {{item:string,blockRequired:string,isComplete:boolean}} sequence 
 * @returns 
 */
    setSequence(name,sequence){
const data = this.steps.get(name)
data.sequence.push(sequence)
this.steps.set(name,data)
this.item.setLore
this.item.setLore([JSON.stringify(data)])
return this
    }

getSequence(name){
  return this.steps.get(name)
}
  }


  system.afterEvents.scriptEventReceive.subscribe(ev=>{
    const {sourceBlock,id} = ev;
    switch(id){
      case 'sequence':
new SequencedAssembly().createSequence(name).setSequence(name,{})
        break;
    }
  })