#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let pinCode = 3101;
let myPin = await inquirer.prompt({
    name: "Pin",
    message: "Enter your Pin",
    type: "number",
});
if (myPin.Pin === pinCode) {
    console.log("correct pin");
    let wAmount = await inquirer.prompt({
        name: "Option",
        message: "Please select Option",
        type: "list",
        choices: ["withDraw", "checkBalance", "FastCash"],
    });
    if (wAmount.Option === "withDraw") {
        // console.log("Withdraw");
        let amount = await inquirer.prompt({
            name: "enterAmount",
            message: "Enter your Amount",
            type: "number",
        });
        if (amount.enterAmount <= myBalance) {
            console.log(`you withDraw ${amount.enterAmount}`);
            console.log(`Your remaning Balance is ${myBalance - amount.enterAmount}`);
        }
        else {
            console.log("Insufficaint balance");
        }
    }
    else if (wAmount.Option === "FastCash") {
        let FastCash = await inquirer.prompt({
            name: "Fast",
            message: "Select Amount",
            type: "list",
            choices: ["1000", "2000", "5000", "10000"],
        });
        if (FastCash.Fast === "1000" ||
            FastCash.Fast === "2000" ||
            FastCash.Fast === "5000" ||
            FastCash.Fast === "10000") {
            console.log(`You withDraw ${FastCash.Fast}`);
            console.log(`Your remaning Balance is ${myBalance - FastCash.Fast}`);
        }
        else {
            console.log("Insufficaint balance");
        }
    }
    else {
        console.log(`Your balance is ${myBalance}`);
    }
    // console.log(wAmount);
}
else {
    console.log("inCorrect pin");
}
