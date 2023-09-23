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