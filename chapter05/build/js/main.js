"use strict";
//convert to more or less specific types
let a = "hello";
let b = a; // less specific
let c = a; // more specific
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    else {
        return `${a}${b}`;
    }
};
let myVal = addOrConcat(1, 2, 'concat');
//Be careful! TS sees no problem - but a string is returned
let nextVal = addOrConcat(1, 2, 'concat');
