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

    public task : string;
    public tag : string;
    public isDone : boolean;

    setReminder():void{
        do{
            let tempTask = question('Enter a reminder here:');
            let tempTag = question('Enter a tag here: ');
            let YoN = question(`You entered tag: '${tempTag}' your task: '${tempTask}', is it correct? y/n: `)
            if (YoN == "y") {
                this.task = tempTask;
                this.tag = tempTag;
                this.isDone = false;
                break;
            }else if (YoN == "n") {
            console.log("please renter the values!")
            }
        }while(true);
    }

    wordCheck(search:string):boolean {
        if(this.task.search(search)!==-1 || this.tag.search(search)!==-1){
            return true;
        }else return false;
    } 
}

question('Press [Enter] key to display the menu:');

let reminders = [];
let searchResult:any =[];

do {
    
    console.log(menu);
    let menuItem:string = question('Choose a [Number] followed by [Enter]: ');
    let num = parseFloat(menuItem);
    if(num <= 6 && num >= 1 && !!(num % 1) == false ){
        if (num == 1) {
            //reminder.showAllReminders();
        } else if (num == 2) {
            let keyWord = question("What are you searching for?");
            reminders.forEach((reminder)=>{
                let i = reminder.wordCheck(keyWord);
                if(i) searchResult.push(reminder);
            });
            console.log(searchResult);
            searchResult =[];

        } else if (num == 3) {
            let data = new Reminder();
            data.setReminder();
            reminders.push(data);
            console.log(reminders);
        } else if (num == 4) {

        } else if (num == 5) {

                // Should add a choosing system

                //if (reminder.isDone){
                //    reminder.isDone = false;
                //}else reminder.isDone = true;

            console.log(reminders);
        } else if (num == 6) {
            console.log("See you later!");
            break;
        }
        }else{
        console.log("The input is invalid! please choose one of the options [1-6] and press [Enter]");
        }

}while(1);

