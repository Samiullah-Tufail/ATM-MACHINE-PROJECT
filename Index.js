#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let pinCode = 3101;
let myPin = await inquirer.prompt({
    name: "Pin",
    message: "Enter your Pin",
    type: "number",
});
let er = true;
while (er) {
    if (myPin.Pin === pinCode) {
        console.log("_____________Welcome Samiullah_____________");
        let wAmount = await inquirer.prompt({
            name: "Option",
            message: "Please select Option",
            type: "list",
            choices: ["Deposit", "withDraw", "checkBalance", "FastCash", "Exit"],
        });
        if (wAmount.Option === "withDraw") {
            let amount = await inquirer.prompt({
                name: "enterAmount",
                message: "Enter your Amount",
                type: "number",
            });
            if (amount.enterAmount <= myBalance) {
                myBalance -= amount.enterAmount;
                console.log(`you withDraw ${amount.enterAmount}`);
                console.log(`Your remaning Balance is ${myBalance}`);
                er = false;
            }
            else {
                console.log("Insufficaint balance");
                er = false;
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
                myBalance -= FastCash.Fast;
                console.log(`You withDraw ${FastCash.Fast}`);
                console.log(`Your remaning Balance is ${myBalance}`);
                er = false;
            }
            else {
                console.log("Insufficaint balance");
                er = false;
            }
        }
        else if (wAmount.Option === "Deposit") {
            let depositAmount = await inquirer.prompt([
                {
                    name: "deposit",
                    message: "Enter Deposit amount",
                    type: "number",
                },
            ]);
            myBalance += depositAmount.deposit;
            console.log(`You deposit ammount sucessfully`);
            console.log(`your current balance is ${myBalance}`);
            er = false;
        }
        else if (wAmount.Option === "checkBalance") {
            console.log(`Your Current Balance is ${myBalance}`);
        }
        else {
            er = false;
        }
    }
    else {
        console.log("inCorrect pin");
        er = false;
    }
}
