#! /usr/bin/env node
import inquirer from "inquirer";
import promptSync from 'prompt-sync';
const prompt = promptSync();
console.log(" ********** Welcome To Do List Aap ********** ");
let myList = [];
while (true) {
    const answer = await inquirer.prompt([
        {
            type: "list",
            name: "query",
            message: "What do you want to do in To Do Application",
            choices: ["View List", "Add items in list", "Delete items", "Quit"]
        }
    ]);
    if (answer.query === "View List") {
        console.log('*************** Here is the List **************');
        for (let item of myList) {
            console.log(myList.indexOf(item) + ': ' + item);
        }
        if (myList[0] === undefined) {
            console.log('*************** List is Empty ***************');
        }
        console.log('***************************************************');
    }
    else if (answer.query === "Add items in list") {
        let input = prompt('Enter your To DO item here: ');
        myList.push(input);
        console.log(`"${input}" , added to the list`);
    }
    else if (answer.query === "Delete items") {
        for (let item of myList) {
            console.log(myList.indexOf(item) + ': ' + item);
        }
        let deleteindex = Number(prompt('Enter index of item that you want to delete: '));
        console.log(`${myList[deleteindex]} , is now removed form list,`);
        myList.splice(deleteindex, 1);
    }
    else {
        console.log('********** Thanks for using the App- Good Bye **********');
        break;
    }
}
;
