# TypeScript Exercises

## Chapter01 Notes

for tsconfig.json

```js
tsc --init
```

```js
tsc main.ts -w
```

or

```js
tsc - w;
```

Inside of tsconfig.json is changed "outDir": "./build/js", and "rootDir": "./src", and added include atribute

```js
  "include": [
    "./src/**/*"
  ],
```

## Chapter02 Notes

```ts
let myName: string = "Umut";
let myAge: number;
let canVote: boolean;
let album: string | number;
let anything: any;

myName = "Mehmet";
myAge = 28;
canVote = true;

const sum = (a: number, b: string) => {
  return a + b;
};
```

## Chapter03 Notes

### Arrays & Objects

```ts
let stringArr = ["Hello", "TypeScript", "ES6"];

let guitars = ["Gibson", "Fender", "PRS", "G&L"];

let mixedData = [1, "Bill", "Gates", "Microsoft", true, "Apple"];

stringArr[0] = "Hi";
stringArr.push("ES7");

guitars[0] = "Gibson USA";
guitars.unshift("Gibson Custom Shop");

let bands: string[] = [];
bands.push("The Beatles");

//Tuple
let tuple: [string, number] = ["The Beatles", 1960];

//Object
let myObj: object = { name: "Bill", company: "Microsoft" };

//interface
interface Guitarist {
  name: string;
  active: boolean;
  albums: (string | number)[];
}

let evh: Guitarist = {
  name: "Eddie Van Halen",
  active: true,
  albums: ["Van Halen I", "Van Halen II", 1984],
};
let jp: Guitarist = {
  name: "Jimmy Page",
  active: true,
  albums: ["Led Zeppelin I", "Led Zeppelin II", "Led Zeppelin III"],
};

const greatGuitarist = (guitarist: Guitarist) => {
  return guitarist.name + " rocks!";
};
console.log(greatGuitarist(jp)); // Jimmy Page rocks!
```

## Chapter04 Notes

### Functions

```ts
//Type Aliases
type StringOrNumber = string | number;
type StringOrNumberArray = (string | number)[];

type Guitarist = {
  name: string;
  active: boolean;
  albums: (string | number)[];
};

type UserId = StringOrNumber;

// Literal Types
let myName: "Umut";

let userName: "umut" | "Ali" | "Can";
userName = "umut";

//Functions
const add = (a: number, b: number): number => {
  return a + b;
};
const logMsg = (message: any): void => {
  console.log(message);
};
logMsg(add(5, 10)); // 15
logMsg("Hello World"); // Hello World

type mathFunction = (a: number, b: number) => number;
const multiply: mathFunction = (a, b) => a * b;
logMsg(multiply(5, 10)); // 50

// Rest Parameters
const sumAll = (...nums: number[]): number => {
  return nums.reduce((total, num) => total + num, 0);
};
logMsg(sumAll(1, 2, 3, 4, 5)); // 15
```

## Chapter05 Notes

### Type Assertions

```ts
type One = string;
type Two = string | number;
type Three = "hello";

//convert to more or less specific types
let a: One = "hello";
let b = a as Two; // less specific
let c = a as Three; // more specific

let d = <One>"world";
let e = <string | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") {
    return a + b;
  } else {
    return `${a}${b}`;
  }
};

let myVal: string = addOrConcat(1, 2, "concat") as string;

//Be careful! TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(1, 2, "concat") as number;
```
