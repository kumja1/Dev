import { world } from '@minecraft/server';
import { MechanicalCrafters } from '../../../library/classes/Crafter';

const { beforeEvents } = world;
beforeEvents.chatSend.subscribe((event) => {
  const { message, sender } = event;

  // Split the message into command and arguments
  const [command, ...args] = message.split(' ');

  // Handle different commands using a switch statement
  switch (command) {
    case '!Remove':
      {
        const [subCommand, arg] = args;
        switch (subCommand) {
          case 'Recipe':
            MechanicalCrafters.deleteItemRecipe(arg);
            break;
          // Add more cases for different sub-commands
        }
      }
      break;
   case '!tpa':{
       
   }
  }
});
