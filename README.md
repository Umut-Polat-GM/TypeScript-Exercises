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

## Chapter06 Notes

### Classes

```ts
class Coder {
  secondLand!: string;

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "TypeScript" //protected is only accessible in the class and its subclasses
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hello ${this.name}, you are ${this.age} years old`;
  }
}

const Umut = new Coder("Umut", "Rock", 28);
console.log(Umut.getAge());

class WebDev extends Coder {
  constructor(
    name: string,
    music: string,
    age: number,
    public computer: string
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getLang() {
    return `Hello ${this.name}, you are a ${this.lang} developer`;
  }
}

const Mehmet = new WebDev("Mehmet", "Rock", 28, "Mac");
console.log(Mehmet.getLang());

// interface and class
interface Musician {
  name: string;
  insturment: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  insturment: string;
  constructor(name: string, insturment: string) {
    this.name = name;
    this.insturment = insturment;
  }

  public play(action: string) {
    return `${this.name} is playing ${this.insturment} by ${action}`;
  }
}

const James = new Guitarist("James", "Guitar");
console.log(James.play("Strumming"));

class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  public id: number;
  constructor(public name: string) {
    this.id = ++Peeps.count; // with ++Peeps.count first count is 1 then id is 1
  }
}

const Ahmet = new Peeps("Ahmet");
const Ali = new Peeps("Ali");
const Ayse = new Peeps("Ayse");

console.log(Peeps.getCount());
console.log(Ahmet.id);
console.log(Ali.id);
console.log(Ayse.id);

class Bands {
  private dataState: string[];
  constructor() {
    this.dataState = [];
  }
  public get data(): string[] {
    return this.dataState;
  }
  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
    } else throw new Error("Param is not an array of strings");
  }
}

const MyBands = new Bands();
MyBands.data = ["Metallica", "Megadeth", "Slayer"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "Iron Maiden"];
console.log(MyBands.data);
// MyBands.data = [...MyBands.data, "Iron Maiden", 1]; // Error
```

## Chapter07 Notes

### Most Replayed

```ts
//Index Signature

// interface TransactionObj {
//     Pizza: number;
//     Books: number;
//     Job : number;
// }
interface TransactionObj {
  [index: string]: number;
}

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
};

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);

let prop: string = "Pizza";
console.log(todaysTransactions[prop]);

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (let transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};
console.log(todaysNet(todaysTransactions));
/////////////////////////////////////////

interface Student {
  //   [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student1: Student = {
  name: "John",
  GPA: 3.5,
  classes: [1, 2, 3],
};
// console.log(student1.test);

for (let key in student1) {
  console.log(`${key}: ${student1[key as keyof Student]}`); //keyof is used to get the keys of the interface
}

Object.keys(student1).forEach((key) => {
  console.log(`${key}: ${student1[key as keyof typeof student1]}`); //with typeof we can get the keys of the object
});

const logStudentKey = (student1: Student, key: keyof Student): void => {
  console.log(`${key}: ${student1[key]}`);
};

logStudentKey(student1, "name"); //we can only pass the keys of the interface

/////////////////////////////////////////

// interface Incomes {
//   [index: string]: number;
// }

type Streams = "Youtube" | "Twitch" | "Facebook";

type Incomes = Record<Streams, number | string>;

const montlyIncome: Incomes = {
  Youtube: 1000,
  Twitch: 300,
  Facebook: 500,
};

for (let renueve in montlyIncome) {
  console.log(`${renueve}: ${montlyIncome[renueve as Streams]}`);
}
//or
for (let renueve in montlyIncome) {
  console.log(`${renueve}: ${montlyIncome[renueve as keyof Incomes]}`);
}
```

## Chapter08 Notes

### Generics

```ts
const echo = <T>(arg: T): T => arg;

//////////////////////////////////

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

console.log(isObj(true));
console.log(isObj("John"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "John" }));
console.log(isObj(null));

///////////////////////////////////

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }
  return { arg, is: !!arg };
};

console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue("Dave"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({})); // modified
console.log(isTrue({ name: "Dave" }));
console.log(isTrue([])); // modified
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));

////////////////////////////////////

interface BoolCheck<T> {
  value: T;
  is: boolean;
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false };
  }
  return { value: arg, is: !!arg };
};

//////////////////////////////////////

interface HasID {
  id: number;
}

const processUser = <T extends HasID>(user: T): T => {
  // process the user with logic here
  return user;
};

console.log(processUser({ id: 1, name: "Dave" }));
//console.log(processUser({ name: 'Dave'}))

///////////////////////////////////////

const getUsersProperty = <T extends HasID, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map((user) => user[key]);
};

const usersArray = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
];

console.log(getUsersProperty(usersArray, "email"));
console.log(getUsersProperty(usersArray, "username"));

///////////////////////////////////////

class StateObject<T> {
  private data: T;

  constructor(value: T) {
    this.data = value;
  }

  get state(): T {
    return this.data;
  }

  set state(value: T) {
    this.data = value;
  }
}

const store = new StateObject("John");
console.log(store.state);
store.state = "Dave";
//store.state = 12

const myState = new StateObject<(string | number | boolean)[]>([15]);
myState.state = ["Dave", 42, true];
console.log(myState.state);
```

## Chapter09 Notes

### Utility Types

```ts
// Utility Types

// Partial

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "compsci123",
  title: "Final Project",
  grade: 0,
};

console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });

// Required and Readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
  // send to database, etc.
  return assign;
};

const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
};

// NOTE: assignVerified won't work with recordAssignment!
// Why? Try it and see what TS tells you :)

recordAssignment({ ...assignGraded, verified: true });

// Record
const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

type Students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrades: Record<Students, LetterGrades> = {
  Sara: "B",
  Kelly: "U",
};

interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 85, assign2: 93 },
  Kelly: { assign1: 76, assign2: 15 },
};

// Pick and Omit

type AssignResult = Pick<Assignment, "studentId" | "grade">;

const score: AssignResult = {
  studentId: "k123",
  grade: 85,
};

type AssignPreview = Omit<Assignment, "grade" | "verified">;

const preview: AssignPreview = {
  studentId: "k123",
  title: "Final Project",
};

// Exclude and Extract

type adjustedGrade = Exclude<LetterGrades, "U">;

type highGrades = Extract<LetterGrades, "A" | "B">;

// Nonnullable

type AllPossibleGrades = "Dave" | "John" | null | undefined;
type NamesOnly = NonNullable<AllPossibleGrades>;

// ReturnType

//type newAssign = { title: string, points: number }

const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

type NewAssign = ReturnType<typeof createNewAssign>;

const tsAssign: NewAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);

// Parameters

type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ["Generics", 100];

const tsAssign2: NewAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);

// Awaited - helps us with the ReturnType of a Promise

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });
  return data;
};

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then((users) => console.log(users));
```

## Chapter14 Notes

### useReducer

```ts
import { ReactNode, useReducer, ChangeEvent } from "react";

const initialState = {
  count: 0,
  text: "",
};

const enum REDUCER_TYPES {
  INCREMENT,
  DECREMENT,
  RESET,
  SET_TEXT,
}

type ReducerAction = {
  type: REDUCER_TYPES;
  payload?: string;
};

const reducer = (
  state: typeof initialState,
  action: ReducerAction
): typeof initialState => {
  switch (action.type) {
    case REDUCER_TYPES.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_TYPES.DECREMENT:
      return { ...state, count: state.count - 1 };
    case REDUCER_TYPES.RESET:
      return { ...state, count: 0 };
    case REDUCER_TYPES.SET_TEXT:
      return { ...state, text: action.payload ?? "" };
    default:
      throw new Error();
  }
};

type ChildrenType = {
  children: (num: number) => ReactNode;
};

const Counter = ({ children }: ChildrenType) => {
  //   const [count, setCount] = useState<number>(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  const Incresment = () => {
    dispatch({ type: REDUCER_TYPES.INCREMENT });
  };
  const Decresment = () => {
    dispatch({ type: REDUCER_TYPES.DECREMENT });
  };
  const ResetCount = () => {
    dispatch({ type: REDUCER_TYPES.RESET });
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: REDUCER_TYPES.SET_TEXT, payload: e.target.value });
  };
  return (
    <div>
      <h3>{children(state.count)}</h3>
      <button onClick={Incresment}>+</button>
      <button onClick={Decresment}>-</button>
      <button onClick={ResetCount}>Reset</button>
      <br />
      <input type="text" onChange={handleChange} />
      <h4>{state.text}</h4>
    </div>
  );
};

export default Counter;
```
