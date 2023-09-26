"use strict";
// Literal Types
let myName;
let userName;
userName = "umut";
//Functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg(add(5, 10)); // 15
logMsg("Hello World"); // Hello World
const multiply = (a, b) => a * b;
logMsg(multiply(5, 10)); // 50
// Rest Parameters
const sumAll = (...nums) => {
    return nums.reduce((total, num) => total + num, 0);
};
logMsg(sumAll(1, 2, 3, 4, 5)); // 15
