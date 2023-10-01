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
