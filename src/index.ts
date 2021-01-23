import { question } from "readline-sync";
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



class Reminder {
    private keys = {
    tag: '',
    reminder: ['']  
    } 
    private _reminders: any = [];
    addReminders() {
        do {
            let rem = question('Enter a reminder here ');
            let noOrYes = question(`You entered reminder: '${rem}', is it correct? y/n: `)
            if (noOrYes == 'y') {
                do {
                    let r = question('Enter a tag here: ');
                    let noy = question(`You entered tag: '${r}', is it correct? y/n: `)
                    if (noy == "y") {
                    this._reminders.push( { rem: r } )
                    console.log("Reminder added")
                    break;
                    }else if (noy == "n") {
                        console.log("please enter another tag")
                    }else if (noy !== "n" && noy !== 'y') {
                        console.log("please type y or n");
                    }
                }while(1)
                break;
            }
            else if(noOrYes == "n") {
                console.log("please try typing it again")
            }
            else if (noOrYes !== "n" && noOrYes !== 'y') {
                console.log("please type y or n");
            }
            
        }while(1)
    }

    showAllReminders(): void {
        if (JSON.stringify(this._reminders) == "{}") {
            console.log("You have no reminders")
        } else {
            let objectToString = JSON.stringify(this._reminders)
            objectToString.slice()
            console.log(``)
        }
       
    }

    readMenu() {

    }



}

let reminder = new Reminder()
question('Press [Enter] key to display the menu:');

do {
    
    console.log(menu);
    let menuItem:string = question('Choose a [Number] followed by [Enter]: ');
    let num = parseInt(menuItem)

    if(num <= 6 && num >= 1){
        if (num == 1) {
            reminder.showAllReminders();
        } else if (num == 2) {

        } else if (num == 3) {
            reminder.addReminders();
        } else if (num == 4) {

        } else if (num == 5) {

        } else if (num == 6) {

        }
    }else{
        console.log("The input is invalid! please choose one of the options [1-6] and press [Enter]");
    }

}while(1);

/*
do {
    let menu = question('Press [Enter] key to display the menu: ');
    console.log(menu);
}while(1)

*/