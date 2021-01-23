import { question } from "readline-sync";

const menu:string = 
`------------------------------
|      Reminders menu:       |
------------------------------
|  [1] Show all reminders 👀  
|  [2] Search reminders 🔎    
|  [3] Add reminder ✏️        
|  [4] Modify reminders ✍️   
|  [5] Toggle completion ⭕️ 🔴  
|  [6] Exit 👋                
------------------------------
`
;

class Reminder {
    private _reminders: object = {
        groceries: [""],
        coding: ['']
    }




    readMenu() {

    }



}

do {
    let showMenu = question('Press [Enter] key to display the menu: ');
    console.log(menu);
}while(1)