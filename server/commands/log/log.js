import {world,system} from "@minecraft/server";
import { Menu } from "../../forms/logForm";
import { WorldLogger as Log } from "../../../library/classes/Logger";
 const Book = new Log('info')
const {beforeEvents} = world
beforeEvents.chatSend.subscribe((event)=>{
const {message,sender} = event;
event.cancel = true;
 
switch (message){
    case '!Logs':
        system.runTimeout(()=>{
     Menu(sender);
    })
break;
case '!Clear Logs':
Book.clearLogs();
    break;
}
 })
