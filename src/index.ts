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
        groceries: [],
        coding: []
    }




    readMenu() {

    }



}

question('Press [Enter] key to display the menu:');

do {

    console.log(menu);
    let menuItem:number = parseInt(question('Choose a [Number] followed by [Enter]: '));
    
    if(menuItem <= 6 && menuItem >= 1 && !!(menuItem % 1)){
        console.log("Artin");
    }else{
        console.log("The input is invalid! please choose one of the options [1-6] and press [Enter]");
    }

}while(1);