"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var menu = "\n------------------------------\n|      Reminders menu:       |\n------------------------------\n|  [1] Show all reminders \uD83D\uDC40  \n|  [2] Search reminders \uD83D\uDD0E    \n|  [3] Add reminder \u270F\uFE0F        \n|  [4] Modify reminders \u270D\uFE0F   \n|  [5] Toggle completion \u2B55\uFE0F \uD83D\uDD34  \n|  [6] Exit \uD83D\uDC4B                \n------------------------------\n";
var Reminder = /** @class */ (function () {
    function Reminder() {
        this._reminders = {
            groceries: [""],
            coding: ['']
        };
    }
    Reminder.prototype.readMenu = function () {
    };
    return Reminder;
}());
do {
    var menu_1 = readline_sync_1.question('Press [Enter] key to display the menu: ');
    console.log(menu_1);
} while (1);
