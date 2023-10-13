
import { system, world, CompoundBlockVolumeAction,CompoundBlockVolume,BlockVolumeUtils,BlockAreaSize,BoundingBoxUtils, ItemStack} from "@minecraft/server";
import { Inventory } from "../../library/classes/Inventory";
import { ProcessHandler } from "../../library/classes/Process";
const handler = new ProcessHandler();
BoundingBoxUtils.createValid({x: 0, y: 0,z:0},{x:1,y:1,z:1})
CompoundBlockVolume.prototype
CompoundBlockVolumeAction.Add
/**
 * Generates a progress bar string based on the given percentage.
 * @param {number} percent - The percentage value (between 0 and 1) representing the progress.
 * @param {string} animationChar - The character used for the progress bar animation.
 * @param {number} delay - The delay (in milliseconds) between each character addition.
 * @returns {string} The progress bar string.
 */
function generateProgressBar(percent, animationChar = '|', delay = 100) {
  const barLength = 20;
  const completedLength = Math.floor(percent * barLength);
  const remainingLength = barLength - completedLength;

  let progressBar = '§|';

  for (let i = 0; i < completedLength; i++) {
    progressBar += animationChar;
  }
 
  progressBar += ' ||'.repeat(remainingLength);
  progressBar += '§|';

  return progressBar;
}
function getHealthDisplay(currentHealth, maxHealth) {
  const healthRatio = currentHealth / maxHealth;
  const barLength = 10;
  const segments = Math.ceil(healthRatio * barLength);

  let healthBar = "§a";
  for (let i = 0; i < segments; i++) {
      healthBar += "|";
  }

  healthBar += "§c";
  for (let i = segments; i < barLength; i++) {
      healthBar += "|";
  

  return healthBar;
}
}
function calculateBarPercentage(partialValue, totalValue) {
const percentage = (Number(partialValue) / Number(totalValue)) * 100;
const barCount = Math.round((percentage / 100) * 9);

const bars = "|".repeat(barCount) + "|".repeat(9 - barCount);
return bars;
}


const nonPonder= [
    'whisk',
    'sheet',
    'nugget',
    'ingot',
    'seat',
    'ore'
  
]
const ponder =()=>{
  for (const player of world.getPlayers()) {
        const inventory = new Inventory(player, player.name).inventory


      for(let item of inventory.items){
        if(item?.typeId.startsWith('rc') && nonPonder.every(id => !item?.typeId.endsWith(id))){
          item.setLore(["§fHold [w] to ponder",`§8${calculateBarPercentage(50,100)}`])
      }
          inventory.load(player)
        }   

    
    }
  }
handler.addProcess(ponder)

 
