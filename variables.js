
function consoleLog() {
    console.log("Write somthing to the console.");
}

function variableDeclaration() {
    var a; // Declare

    a = 2; // Assign

    console.log(a); // Write value of variable to console

    var b = 5; // Declare and initialize in one statement

    console.log(b); // Write value of b

    b = 6; // Assign new value to variable b

    console.log(b); // Write new value
}

function trueFalse() {
    let a = true; // Boolean
    let b = false; // Boolean

    console.log("Variable a is " + a);
    console.log("Variable b is " + b);

    console.log("Not a (!a) is " + !a);
    console.log("Not b (!b) is " + !b);
}

function ifStatement() {
    let a = true;

    if (a) {
        console.log("a was true");
    } else {
        console.log("a was not true");
    }

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

function dataTypes() {
    // Boolean
    var bool = true;
    console.log(bool);

    // Number
    var a = 1;

    console.log(a);

    // String
    var s1 = "text 1";
    var s2 = 'text 2';

    console.log(s1);
    console.log(s2);

    var s3 = s1 + s2;
    console.log(s3);

    // Object
    var object = {}; //

    console.log(object);

    console.log(JSON.stringify(object));

    var object2 = {
        property: "some property"
    };

    console.log(object2);

    console.dir(object2); // Check actual console window

    console.log(JSON.stringify(object2));

    object.newProperty = "object new property";

    console.log(object);
    console.log(JSON.stringify(object));
}

function assignmentOperators() {
    let a = 5;
    let b = 10;
    let c = 0.5;

    console.log("a: " + a);
    console.log("b: " + b);
    console.log("c: " + c);
    
    console.log("");
    
    console.log("a: " + a);
    result = a += 2;
    console.log("a += 2: " + result);
    result = a -= 2;
    console.log("a -= 2: " + result);
    result = a *= 2;
    console.log("a *= 2: " + result);
    result = a /= 2;
    console.log("a /= 2: " + result);
 
    console.log("a: " +  a);
 }

function arithmeticOperators() {
    let a = 5;
    let b = 10;
    let c = 0.5;

    console.log("a: " + a);
    console.log("b: " + b);
    console.log("c: " + c);
    
    console.log("");

    // Addition
    let result = a + b;

    console.log("a + b: " + result);

    // Subtraction
    result = a - b;
    console.log("a - b: " + result);

    // Multiplication
    result = b * c;
    console.log("b * c: " + result);

    // Division
    result = b / a;
    console.log("b / a: " + result);

    console.log("");

    // Increment
    a = a + 1;
    console.log("a after a++: " + a);
    a++;
    console.log("a after a++: " + a);

    // Decrement
    a = a - 1;
    console.log("a after a++: " + a);
    a--;
    console.log("a after a--: " + a);

    console.log("");

    // Increment with assign side effect
    result = a++;
    console.log("result = a++;");
    console.log("result: " + result);
    console.log("a: " +  a);
    console.log("");

    // Decrement with assign side effect
    result = a--;
    console.log("result = a--;");
    console.log("result: " + result);
    console.log("a: " +  a);
    console.log("");

    // Increment with assign side effect
    result = ++a;
    console.log("result = ++a;");
    console.log("result: " + result);
    console.log("a: " +  a);
    console.log("");

    // Decrement with assign side effect
    result = --a;
    console.log("result = --a;");
    console.log("result: " + result);
    console.log("a: " +  a);
    console.log("");
}



window.addEventListener("load", () => {
    document.getElementById("consoleLog").addEventListener("click", consoleLog);
    document.getElementById("variableDeclaration").addEventListener("click", variableDeclaration);
    document.getElementById("trueFalse").addEventListener("click", trueFalse);
    document.getElementById("ifStatement").addEventListener("click", ifStatement);
    document.getElementById("dataTypes").addEventListener("click", dataTypes);
    document.getElementById("assignmentOperators").addEventListener("click", assignmentOperators);
    document.getElementById("arithmeticOperators").addEventListener("click", arithmeticOperators);
});

