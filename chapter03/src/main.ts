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
