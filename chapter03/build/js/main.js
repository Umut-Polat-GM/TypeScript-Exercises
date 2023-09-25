"use strict";
let stringArr = ["Hello", "TypeScript", "ES6"];
let guitars = ["Gibson", "Fender", "PRS", "G&L"];
let mixedData = [1, "Bill", "Gates", "Microsoft", true, "Apple"];
stringArr[0] = "Hi";
stringArr.push("ES7");
guitars[0] = "Gibson USA";
guitars.unshift("Gibson Custom Shop");
let bands = [];
bands.push("The Beatles");
//Tuple
let tuple = ["The Beatles", 1960];
//Object
let myObj = { name: "Bill", company: "Microsoft" };
let evh = {
    name: "Eddie Van Halen",
    active: true,
    albums: ["Van Halen I", "Van Halen II", 1984],
};
let jp = {
    name: "Jimmy Page",
    active: true,
    albums: ["Led Zeppelin I", "Led Zeppelin II", "Led Zeppelin III"],
};
const greatGuitarist = (guitarist) => {
    return guitarist.name + " rocks!";
};
console.log(greatGuitarist(jp)); // Jimmy Page rocks!
