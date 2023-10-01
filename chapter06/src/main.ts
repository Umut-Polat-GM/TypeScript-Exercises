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
