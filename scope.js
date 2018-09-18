"use strict";

var globalVar = "my global var";
let globalLet = "my global let";

function hoisting() {
    
}

function globalScope(){
    console.log("globalVar: " + globalVar);
    console.log("window.globalVar: " + window.globalVar);

    globalVar = "changed not declared global";

    console.log("globalVar: " + globalVar);
    console.log("window.globalVar: " + window.globalVar);

    // Uncomment this for WTF about hoisting
    //var globalVar = "declared changed global var";

    console.log("globalVar: " + globalVar);
    console.log("window.globalVar: " + window.globalVar);
}

function dynamicScope() {

    console.log("starting dynamicScope()");
    
    var functionVar = "function";

    console.log("functionVar: " + functionVar);
    console.log("globalVar: " + globalVar);

    function f1() {
        console.log("starting f1()");
        var functionVar = "inner function";
        
        console.log("functionVar: " + functionVar);
        console.log("globalVar: " + globalVar);

        console.log("ending f1()");
    }

    function f2() {
        console.log("starting f2()");
        var globalVar = "inner globalVar";

        console.log("functionVar: " + functionVar);
        console.log("globalVar: " + globalVar);

        console.log("ending f2()");
    }

    f1();
    f2();

    console.log("functionVar: " + functionVar);
    console.log("globalVar: " + globalVar);

    console.log("ending dynamicScope");
}

function lexicalScope() {

    console.log("starting dynamicScope()");
    
    let functionLet = "function";

    console.log("functionVar: " + functionLet);
    console.log("globalLet: " + globalLet);

    function f1() {
        console.log("starting f1()");
        let functionLet = "inner function";
        
        console.log("functionVar: " + functionLet);
        console.log("globalLet: " + globalLet);

        console.log("ending f1()");
    }

    function f2() {
        console.log("starting f2()");
        let globalLet = "inner globalVar";

        console.log("functionVar: " + functionLet);
        console.log("globalLet: " + globalLet);

        console.log("ending f2()");
    }

    f1();
    f2();

    console.log("functionVar: " + functionLet);
    console.log("globalLet: " + globalLet);

    console.log("ending dynamicScope");
}

window.addEventListener("load", () => {
    document.getElementById("hoisting").addEventListener("hoisting", globalScope);
    document.getElementById("globalScope").addEventListener("click", globalScope);
    document.getElementById("dynamicScope").addEventListener("click", dynamicScope);
    document.getElementById("lexicalScope").addEventListener("click", lexicalScope);
});