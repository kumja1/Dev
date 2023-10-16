
import { WorldLogger } from "../../library/classes/Logger";
import { ActionFormData, ModalFormData } from "@minecraft/server-ui";
import { forceShow } from "../util/forceShow";

const Log = new WorldLogger('info');

export function Menu(player) {
  const menu = new ActionFormData()
  .title('Menu')
    .button('Log', 'textures/items/paper');


 forceShow(player,menu).then(response => {
    switch (response.selection) {
      case 0:
        LogForm(player);
        break;
      default:
        break;
    }

  });
}

function sortLogs(logs, sortOption) {
  switch (sortOption) {
    case 'Default':
      return logs;
    case 'Ascending':
      return logs.sort((a, b) => a.localeCompare(b));
    case 'Descending':
      return logs.sort((a, b) => b.localeCompare(a));
    default:
      return logs;
  }
}
const Log_array = []
function LogForm(player) {
  const logForm = new ModalFormData()
    .dropdown('Log Level', ['info', 'warn', 'error']) // Add the dropdown with log levels
    .dropdown('Sort', ['Default', 'Ascending', 'Descending']) // Add the dropdown for sorting
    .toggle('Submit', false); // Add a checkbox for showing the timestamp

  forceShow(player, logForm)
    .then(response => {
      if (response.canceled) {
        // Handle cancellation if needed
        console.log('LogForm was canceled');
        return;
      }

      const submitValue = response.formValues[2];
      const selectedLogLevel = response.formValues[0];
      const selectedSortOption = response.formValues[1];

      const filteredLogs = filterLogs(Log.getLogs(), selectedLogLevel);
      const sortedLogs = sortLogs(filteredLogs, selectedSortOption);

      if (submitValue === true) {
        Log_array.push(sortedLogs.join('\n'))
return Log_array;
      }else return;
    })
    .catch(error => {
      console.error("Error occurred while showing logForm:", error);
    });
}


function Logs(player) {
  const logs = new ActionFormData().body(Log_array.toString).button('Back', 'textures/blocks/barrier');

  forceShow(player, logs)
    .then(response => {
      switch (response.selection) {
        case 0:
          // Handle back button action if needed
          console.log('Back button clicked');
          return;
        default:
          break;
      }
    })
    .catch(error => {
      console.error("Error occurred while showing Logs:", error);
    });
}

function filterLogs(logs, logLevel) {
  return logs.filter(log => log.includes(logLevel));
}