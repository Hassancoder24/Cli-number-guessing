#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\t\tWelcome To Hassancoder - Cli Number Gussing Game\n");
// 1. Computer will generate a random number.
// 2. User input for gussing number.
// 3. Compare user input with computer generated number and show result.
const randomNumber = Math.floor(Math.random() * 3 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessdNumber",
        type: "number",
        message: "Please Guess a Number (1 to 3): ",
    },
]);
console.log(answers);
if (answers.userGuessdNumber === randomNumber) {
    console.log("Congratulations ! You Guess a Correct Number.");
}
else {
    console.log("Sorry, You Guess a Wrong Number");
}
