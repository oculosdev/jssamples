
function variableDeclaration() {
    var a; // Declare

    a = 2; // Assign

    console.log(a); // Write value of variable to console

    var b = 5; // Declare and initialize

    console.log(b);

    b = 6;

    console.log(b); // assigned new value
}

function dataTypes() {
    // boolean
    var bool = true;
    console.log(bool);

    // number
    var a = 1;

    console.log(a);

    // string
    var s1 = "text 1";
    var s2 = 'text 2';

    console.log(s1);
    console.log(s2);

    var s3 = s1 + s2;
    console.log(s3);

    // object
    var object = {};

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

function arithmeticOperators() {
    let a = 5;
    let b = 10;
    let c = 0.5;

    console.log("a: " + a);
    console.log("b: " + b);
    console.log("c: " + c);
    
    console.log("");

    /**********************
    Arithmetic operators
    ***********************/
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
    
    /**********************
    ARITHMETIC ASSIGNMENT OPERATORS
    ***********************/
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

window.addEventListener("load", () => {
    document.getElementById("variableDeclaration").addEventListener("click", variableDeclaration);
    document.getElementById("dataTypes").addEventListener("click", dataTypes);
    document.getElementById("arithmeticOperators").addEventListener("click", arithmeticOperators);
});

