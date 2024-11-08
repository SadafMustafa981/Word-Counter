#!/usr/bin/env node
"use strict";
// import inquirer modules which is command line interface for index.
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
//Declare a constant 'answer ' and assign it to the result of inquirer.prompt function
var answers = await inquirer_1.default.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word: "
    }
]);
var words = answers.sentence.trim().split(" ");
//print the array of word to the console
console.log(words);
// print the word count of the sentence to the console
console.log("Your sentence word count is ".concat(words.length));
