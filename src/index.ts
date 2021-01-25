import { question } from "readline-sync";

let reminders:Array<Reminder> = [];
let searchResult:Array<any> =[];
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
// Logic for grabbing the tags into cache
const getTags = (reminders: Array<Reminder>) : string[] => {

    let cache: {[key: string]:boolean} = {};
    let tagList: string[] = [];

    for (let i= 0; i < reminders.length; i++) {
       
        let element:Reminder = reminders[i];
        if(!cache[element.tag]){
            cache[element.tag] = true;
            tagList.push(element.tag);
        }
    }
    return tagList;
};
const toggle = (reminder: Reminder, i: number): string => {
    if (reminder.isDone == false) {
        return `⭕️ ${reminders[i].task}`;
    } else {
        return `🔴 ${reminders[i].task}`;
    }
}

const showAll = (reminders: Array<Reminder>): void =>{
    if (reminders.length == 0) {
        console.log("You have no reminders");
        return;
    }
    let tagList:string[] = getTags(reminders);

    tagList.forEach((tag:string)=>{
        console.log(`👀  ${tag.toUpperCase()}`);
        for (let i = 0; i < reminders.length; i++) {
            if(tag == reminders[i].tag){
                reminders[i].listPrimaryKey = (i+1);
                console.log(`${toggle(reminders[i], i)}`);
            }
        }
    });

}



const modifyReminders = (reminders:Array<Reminder>) :void => {
  
    showAll(reminders);
  
    let menuItem = parseFloat(question('Enter the number of the reminder:'));
    if(menuItem <= reminders.length && menuItem >= 1 && !!(menuItem % 1) == false ){
        reminders.forEach((reminder:Reminder)=>{
            if(reminder.listPrimaryKey == menuItem){
                let newTag:string = question("Please enter the new tag and press [Enter]: ");
                let newTask:string = question("Please enter the new reminder and press [Enter]: ");
                reminder.tag = newTag;
                reminder.task = newTask;
                console.log(`Reminder has been updated: [Updated Tag]: ${reminder.tag} [Updated Reminder]: ${reminder.task}`);
            }
        });
    }else{
        console.log("The input is invalid! please choose one of the reminders from the list and press [Enter]");
    }
    
};


const toggleStatus = (reminders:Array<Reminder>):void=>{

    showAll(reminders);

    let menuItem = parseFloat(question('Enter the number of the reminder:'));
    if(menuItem <= reminders.length && menuItem >= 1 && !!(menuItem % 1) == false ){
        reminders.forEach((reminder:Reminder)=>{
            if(reminder.listPrimaryKey == menuItem){
                console.log(reminder.isDone);
                if (reminder.isDone){
                    reminder.isDone = false;
                }else reminder.isDone = true;
                console.log(reminder.isDone);
            }
        });
    }else{
        console.log("The input is invalid! please choose one of the reminders from the list and press [Enter]");
    }

};

const searchReminders = (reminders:Array<Reminder>):void => {
    if (reminders.length == 0) {
        console.log("You have no reminders");
        return;
    }
    let keyWord = question("What are you searching for?: ");
    reminders.forEach((reminder: Reminder) => {
        let i = reminder.wordCheck(keyWord);
        if (i) searchResult.push(reminder);
    });
    
    searchResult.forEach((reminder: Reminder) => {
        if (keyWord == reminder.tag) {

        }
    });
    console.log(searchResult);
    searchResult = [];
}



class Reminder {

    public task : string;
    public tag : string;
    public isDone : boolean;
    public listPrimaryKey: number = null;



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

const createReminder = ():void => {
    let data = new Reminder();
    data.setReminder();
    reminders.push(data);
    console.log(`Reminder with tag '${data.tag}' added to reminders`);
}

const runApplication = ():void => {
    
    do {
    
        console.log(menu);
        let menuItem:string = question('Choose a [Number] followed by [Enter]: ');
        let num = parseFloat(menuItem);
        if(num <= 6 && num >= 1 && !!(num % 1) == false ){
            if (num == 1) {
                showAll(reminders);
            } else if (num == 2) {
                searchReminders(reminders);
            } else if (num == 3) {
                createReminder();
            } else if (num == 4) {

                modifyReminders(reminders);

            } else if (num == 5) {

                toggleStatus(reminders);

                console.log(reminders);
            } else if (num == 6) {
                console.log("See you later!");
                break;
            }
            }else{
            console.log("The input is invalid! please choose one of the options [1-6] and press [Enter]");
            }

    }while(1);
}

question('Press [Enter] key to display the menu:');
runApplication();



