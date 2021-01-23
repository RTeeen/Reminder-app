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
interface key{
    tag:string,
    reminder:string
}
export default class Reminder {

    private _reminders: any =[];
    addReminders() {
        do {
            let rem = question('Enter a reminder here ');
            let noOrYes = question(`You entered reminder: '${rem}', is it correct? y/n: `)
            if (noOrYes == 'y') {
                do {
                    let r = question('Enter a tag here: ');
                    let noy = question(`You entered tag: '${r}', is it correct? y/n: `)
                    if (noy == "y") {

                    let data:key={
                        tag : r,
                        reminder : rem
                    }
                    this._reminders.push(data);
                    console.log("Reminder added");
                    //console.log(this._reminders);

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
    let num = parseFloat(menuItem);
    if(num <= 6 && num >= 1 && !!(num % 1) == false ){

        if (num == 1) {
            reminder.showAllReminders();
        } else if (num == 2) {

        } else if (num == 3) {
            reminder.addReminders();
        } else if (num == 4) {

        } else if (num == 5) {

        } else if (num == 6) {
            console.log("See you later!");
            break;
        }
        }else{
        console.log("The input is invalid! please choose one of the options [1-6] and press [Enter]");
        }

}while(1);

