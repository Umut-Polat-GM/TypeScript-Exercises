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
tsc -w
```

Inside of tsconfig.json is changed  "outDir": "./build/js", and "rootDir": "./src", and added include atribute
```js
  "include": [
    "./src/**/*"
  ],
```

## Chapter02 Notes

```ts
let myName: string = 'Umut';
let myAge: number;
let canVote: boolean;
let album: string | number;
let anything: any;

myName = "Mehmet";
myAge = 28;
canVote = true;

const sum = (a: number, b: string) => {
    return a + b;
}
```