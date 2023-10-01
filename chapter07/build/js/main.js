"use strict";
//Index Signature
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);
let prop = "Pizza";
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (let transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
const student1 = {
    name: "John",
    GPA: 3.5,
    classes: [1, 2, 3],
};
// console.log(student1.test);
for (let key in student1) {
    console.log(`${key}: ${student1[key]}`); //keyof is used to get the keys of the interface
}
Object.keys(student1).forEach((key) => {
    console.log(`${key}: ${student1[key]}`); //with typeof we can get the keys of the object
});
const logStudentKey = (student1, key) => {
    console.log(`${key}: ${student1[key]}`);
};
logStudentKey(student1, "name"); //we can only pass the keys of the interface
const montlyIncome = {
    Youtube: 1000,
    Twitch: 300,
    Facebook: 500,
};
for (let renueve in montlyIncome) {
    console.log(`${renueve}: ${montlyIncome[renueve]}`);
}
//or
for (let renueve in montlyIncome) {
    console.log(`${renueve}: ${montlyIncome[renueve]}`);
}
