"use strict";

function trueOrFalse() {
    let a = true;
    let b = false;

    console.log("a == " + a);
    console.log("b == " + b);

    console.log("!a == " + !a);
    console.log("!b == " + !b);
}

function equalityAndInequality() {
    let num1 = 1;
    let num2 = 2;

    let equal = num1 == num2;

    console.log("num1 == num2: " + equal);

    equal = num1 != num2;
    console.log("num1 != num2: " + notEqual);

    let c = "1";

    equal = num1 == c;

    console.log(typeof num1 + " a == " + typeof c + " c == " + equal);

    equal = num1 === c;

    console.log("a === c: " + equal);
}

function ifStatement() {
    let a = true;

    if (a === true) {
        console.log("a was true");
    }
    else {
        console.log("a was not true");
    }

    if (a !== false) {
        console.log("a was not false")
    }
}

function truthyOrFalsy() {
    let true1, true2 = true;
    let false1, false2 = false;

    let stringTrue = "true";
    

    let number1 = 1;
    let string1 = "1"

    let object1 = {};
    let unsassigned1;
    let null1 = null;

    if (true1) {
        console.log(typeof true1 + " true1 was true");
    } else {
        console.log(typeof true1 + " true1 was false");
    }

    if (stringTrue) {
        console.log(typeof stringTrue + " b was true");
    } else {
        console.log(typeof stringTrue + " b was false");
    }

    if (true1 == stringTrue) {
        console.log(typeof true1 + " true1 == " + typeof stringTrue + " b was true");
    } else {
        console.log(typeof true1 + " true1 == " + typeof stringTrue + " b was false");
    }

    if (true1 == !!stringTrue) {
        console.log(typeof true1 + " true1 == !!" + typeof stringTrue + " b was true");
    } else {
        console.log(typeof true1 + " true1 == !!" + typeof stringTrue + " b was false");
    }

    if (true1 === stringTrue) {
        console.log(typeof true1 + " true1 === " + typeof stringTrue + " b was true");
    } else {
        console.log(typeof true1 + " true1 === " + typeof stringTrue + " b was false");
    }

    if (true1 === !!stringTrue) {
        console.log(typeof true1 + " true1 === !!" + typeof stringTrue + " b was true");
    } else {
        console.log(typeof true1 + " true1 === !!" + typeof stringTrue + " b was false");
    }

    if (true1 === stringTrue) {
        console.log("true1 was equal to stringTrue");
    } else {
        console.log("true1 was not equal to stringTrue");
    }

    if (!false1) {
        console.log("!false1 was not true");
    }

    if (!number1) {
        console.log("!number1 was not true");
    }
}

function nullAndUndefined() {
 
    let a; // undefined: has been declared, but has not yet been assigned a value
    console.log(a);

    let b = null; // null: has been declared, and has been assigned null object as a representation of no value.

    console.log(b);

    if (a) {
        console.log("a == undefined is truthy");
    } else {
        console.log("a == undefined is falsy");
    }

    if (b) {
        console.log("b == null is truthy");
    } else {
        console.log("b == null is falsy");
    }
}

function nullChecks() {
    let a;
    let obj = {};

    if (a) {

    }

}

function booleanAlgebra() {
    console.log("true && true: " + (true && true));
    console.log("true && false: " + (true && false));
    console.log("false && true: " + (false && true));
    console.log("false && false: " + (false && true));

    console.log("true || true: " + (true || true));
    console.log("true || false: " + (true || false));
    console.log("false || true: " + (false || true));
    console.log("false || false: " + (false || true));
}



window.addEventListener("load", () => {
    document.getElementById("equality").addEventListener("click", equalityAndInequality);
    document.getElementById("trueOrFalse").addEventListener("click", trueOrFalse);
    document.getElementById("truthyOrFalsy").addEventListener("click", truthyOrFalsy);
    document.getElementById("nullAndUndefined").addEventListener("click", nullAndUndefined);
    document.getElementById("ifStatement").addEventListener("click", ifStatement);
    document.getElementById("nullChecks").addEventListener("click", nullChecks);
    document.getElementById("booleanAlgebra").addEventListener("click", booleanAlgebra);
});
