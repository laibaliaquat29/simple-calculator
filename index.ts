#! /usr/bin/env node
import inquirer from "inquirer";

const answers = await inquirer.prompt([
  { message: "Enter your firstNumber", type: "number", name: "firstNumber" },
  { message: "Enter your secondNumber", type: "number", name: "secondNumber" },
  {
    message: "select one of operators to perform action",
    type: "list",
    name: "operator",
    choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION"],
  },
]);
//conditional statement
if (answers.operator === "ADDITION") {
  console.log(answers.firstNumber + answers.secondNumber);
} else if (answers.operator === "SUBTRACTION") {
  console.log(answers.firstNumber - answers.secondNumber);
} else if (answers.operator === "MULTIPLICATION") {
  console.log(answers.firstNumber * answers.secondNumber);
} else if (answers.operator === "DIVISION") {
  console.log(answers.firstNumber / answers.secondNumber);
} else {
  ("please select the correct operator");
}
