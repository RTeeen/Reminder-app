import { question } from "readline-sync";
import { ModuleKind } from "typescript";

export class ReminderList {

    private _reminders : Reminder[] = [];
    
    displayTag(reminder: Reminder): string {
        return `👀  ${reminder.grabTag().toUpperCase()}`;
    }
    displayTask(reminder: Reminder): string {
        if (reminder.checkDone() == false) {
            return `⭕️ ${reminder.grabTask()}`;
        } else {
            return `🔴 ${reminder.grabTask().strike()}`;
        }
    }
    showAll(): void {
        if (this._reminders.length == 0) {
            console.log("You have no reminders");
        } else {
           this._reminders.forEach((reminder: Reminder) => {
            console.log(`${this.displayTag(reminder)} \n`);
            console.log(this.displayTask(reminder));
        }); 
        }
    }
    searchReminders():void {
        if (this._reminders.length == 0) {
            console.log("You have no reminders");
            return;
        }
        do {
            let search:string = question("What are you searching for?: ");
            this._reminders.forEach((reminder: Reminder) => {
                if (reminder.grabTag().search(search) != -1 || reminder.grabTask().search(search) != -1 ) {
                    console.log(this.displayTask(reminder))
                } else {
                    console.log("There are no reminders that contain that search word")
                }
            });
            break;
        }while(1)
       
    }
    addReminder(): void {
        do {   
            var task:string = question('Enter a reminder here: ');
            var YoN:string = question(`You entered task: '${task}', is it correct? y/n: `);
            switch (YoN) {
                case 'y':
                    do {
                        var tag:string = question("Enter a tag here: ");
                        var yoN:string = question(`You entered task: '${tag}', is it correct? y/n: `);
                        switch (yoN) {
                            case 'y':
                                break;
                            case 'n':
                                console.log("Please try again");
                                break;
                            default:
                                console.log("Please use format: y or n");
                                break;
                        }
                    }while(yoN != "y")
                    break;
                case 'n':
                    console.log("Please try again");
                    break;
                default:
                    console.log("Please use format: y or n");
                    break; 
            }
        }while(YoN != "y")
        
        let reminder = new Reminder(task, tag);
        this._reminders.push(reminder); 
        console.log("Reminder added successfully");
    }
    sorts(): number | void {
        if (this._reminders.length == 0) {
            return;
        }
         for (let i: number = 0; i < (this._reminders.length -1); i++) {
            if (this._reminders[i].grabTag() < this._reminders[i+1].grabTag()) {
                return -1;
            }
            else if(this._reminders[i].grabTag() > this._reminders[i+1].grabTag()) {
                return 1;
            }
            else {
                return 0;
            }
         }
    }
    displayNumberedTasks(): void {
        let i: number = 0;
        this._reminders.forEach((reminder: Reminder) => {
            console.log(`[${i+1}]   ${reminder.grabTask()}`)
            i++;
        })
    }
    modifyReminders(): void {
        if (this._reminders.length == 0) {
            console.log("You have no reminders");
            return;
        }
        this.displayNumberedTasks();
        do {
            let num:string = question("Enter a reminder number to edit: ")
            var yon:string = question(`You entered reminder number: '${num}', is it correct? y/n: `);
            switch (yon) {
                case "y":
                    do {
                    let addDescription:string = question("Enter a description here: ")
                    var yOn:string = question(`You entered the description: '${addDescription}', is it correct? y/n: `);
                    switch (yOn) {
                        case 'y':
                            this._reminders[parseInt(num)-1].modifyTask(addDescription)
                            break;
                        case 'n':
                            console.log("Please try typing it again");
                            break;
                        default:
                            console.log("Please use format: y or n");
                            break;
                    }
                    }while(yOn != 'y')
                    break;
                case 'n':
                    console.log("Please try typing it again");
                    break;
                default:
                    console.log("Please use format: y or n");
                    break;
            }
            
        }while(yon != 'y')
        
        
    }
    toggleDone() {
        if (this._reminders.length == 0) {
            console.log("You have no reminders");
            return;
        }
        this.displayNumberedTasks();
        do {
            let num:string = question("Enter a reminder number to toggle: ");
            var decision = question(`You reminder number: '${num}', is it correct? y/n: `);
            switch (decision) {
                case 'y':
                    this._reminders[parseInt(num)-1].toggleDone();
                    break;
                case 'n':
                    console.log("Please try typing it again");
                    break;
                default:
                    console.log("Please use format: y or n");
                    break;
            }
        }while(decision != 'y')
    }


}


class Reminder {
    
    private _tag: string;
    private _task: string;
    private _completed: boolean;
    constructor(task: string, tag: string) {
      this._tag = tag;
      this._task = task;
      this._completed = false;
    }
    grabTag(): string {
        return this._tag;
    }
    grabTask(): string {
        return this._task;
    }
    checkDone(): boolean {
        return this._completed;
    }
    modifyTask(newTask: string) {
        this._task = newTask;
    }
    toggleDone() {
        if (this._completed = false) { this._completed = true; } 
        else { this._completed = false; }
    }
}
