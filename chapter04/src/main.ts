//Type Aliases
type StringOrNumber = string | number;
type StringOrNumberArray = (string | number)[];

type Guitarist = {
    name: string;
    active : boolean;
    albums: (string | number)[];
}

type UserId = StringOrNumber;

// Literal Types
let myName : 'Umut';

let userName : "umut" | "Ali" | "Can";
userName = "umut";

//Functions
const add = (a: number, b:number): number => {
    return a + b;
}
const logMsg = (message: any): void => {
    console.log(message);
}
logMsg(add(5, 10)); // 15
logMsg("Hello World"); // Hello World

type mathFunction = (a: number, b: number) => number;
const multiply: mathFunction = (a, b) => a * b;
logMsg(multiply(5, 10)); // 50

// Rest Parameters
const sumAll = (...nums: number[]): number => {
    return nums.reduce((total, num) => total + num, 0);
}
logMsg(sumAll(1, 2, 3, 4, 5)); // 15