import { question } from "readline-sync";
import { ReminderList } from "./reminder"

const menu:string = `
------------------------------
|      Reminders menu:       |
------------------------------
|  [1] Show all reminders 👀  
|  [2] Search reminders 🔎    
|  [3] Add reminder ✏️        
|  [4] Modify reminders ✍️   
|  [5] Toggle completion ⭕️ 🔴  
|  [6] Exit 👋                
------------------------------
`;


export const runApplication = ():void => {
    
   

    const reminderList = new ReminderList();
    do {

        const runApp = question("Hit [Enter] key to see main menu: ", {
            mask: "",
            hideEchoBack: true,
        });

        console.log(menu);
        let menuItem: string = question('Choose a [Number] followed by [Enter]: ');
        var parse = parseFloat(menuItem);
        switch (parse) {
            case 1:
                reminderList.showAll();
                break;
            case 2:
                reminderList.searchReminders()
                break;
            case 3:
                reminderList.addReminder();
                break;
            case 4:
                reminderList.modifyReminders();
                break;
            case 5:
                reminderList.toggleDone();
                break;
            case 6: 
                reminderList.toggleDone();
                break;
            default:
                console.log( "\nPlease enter a valid Input [1-6]!\n");
                break;
        }
    } while(parse != 6)
}




  
