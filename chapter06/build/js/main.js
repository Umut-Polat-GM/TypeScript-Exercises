"use strict";
class Coder {
    constructor(name, music, age, lang = "TypeScript" //protected is only accessible in the class and its subclasses
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello ${this.name}, you are ${this.age} years old`;
    }
}
const Umut = new Coder("Umut", "Rock", 28);
console.log(Umut.getAge());
class WebDev extends Coder {
    constructor(name, music, age, computer) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `Hello ${this.name}, you are a ${this.lang} developer`;
    }
}
const Mehmet = new WebDev("Mehmet", "Rock", 28, "Mac");
console.log(Mehmet.getLang());
class Guitarist {
    constructor(name, insturment) {
        this.name = name;
        this.insturment = insturment;
    }
    play(action) {
        return `${this.name} is playing ${this.insturment} by ${action}`;
    }
}
const James = new Guitarist("James", "Guitar");
console.log(James.play("Strumming"));
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.id = ++Peeps.count; // with ++Peeps.count first count is 1 then id is 1
    }
}
Peeps.count = 0;
const Ahmet = new Peeps("Ahmet");
const Ali = new Peeps("Ali");
const Ayse = new Peeps("Ayse");
console.log(Peeps.getCount());
console.log(Ahmet.id);
console.log(Ali.id);
console.log(Ayse.id);
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
        }
        else
            throw new Error("Param is not an array of strings");
    }
}
const MyBands = new Bands();
MyBands.data = ["Metallica", "Megadeth", "Slayer"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "Iron Maiden"];
console.log(MyBands.data);
// MyBands.data = [...MyBands.data, "Iron Maiden", 1]; // Error
