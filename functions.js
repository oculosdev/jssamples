

function functions1() {
    function add(a, b) {
        return a + b;
    }

    function multiply(a, b) {
        return a * b;
    }

    let result = add(2, 2);

    result = multiply(result, 2);

    console.log("result: " + result);
}

function functions2() {
    function add(a, b) {
        return a + b;
    }

    function multiply(a, b) {
        return a * b;
    }

    let result = multiply(add(2, 2), 2);

    console.log("result: " + result);
}

function functions3() {
    let add = (a, b) => a + b;

    let multiply = (a, b) => a * b;

    let result = multiply(add(2, 2), 2);

    console.log("result: " + result);
}

function functions4() {
    const math = number => ({
        add: (toAdd) => math(number + toAdd),
        multiply: (multiplyWith) => math(number * multiplyWith),
        result: () => number
    });

    let result = math(2)
        .add(2)
        .multiply(2)
        .result();

    console.log("result: " + result);
}



function filterValuesRegular() {
    let myArray = [
        { id : 1, name: "test 1", wallet: 10.0},
        { id : 2, name: "test 2", wallet: 15.0},
        { id : 3, name: "test 3", wallet: 6.0},
        { id : 4, name: "test 4", wallet: 2.0},
        { id : 5, name: "test 5", wallet: 9.0},
        { id : 6, name: "test 6", wallet: 11.0},
    ];

    let walletSum = myArray.map(function(item) {
            return item.wallet;
        })
        .filter(function(value) {
            return value < 9;
        })
        .reduce(function(accumulator, currentValue) {
            return accumulator + currentValue;
        }
    );

    console.log(walletSum);
}

function filterValuesArrowFunctions() {
    let myArray = [
        { id : 1, name: "test 1", wallet: 10.0},
        { id : 2, name: "test 2", wallet: 15.0},
        { id : 3, name: "test 3", wallet: 6.0},
        { id : 4, name: "test 4", wallet: 2.0},
        { id : 5, name: "test 5", wallet: 9.0},
        { id : 6, name: "test 6", wallet: 11.0},
    ];

    let walletSum = myArray.map((item) => {
            return item.wallet;
        })
        .filter(value => value < 9)
        .reduce((accumulator, currentValue) => accumulator + currentValue);

    console.log(walletSum);
}

window.addEventListener("load", () => {
    document.getElementById("functions1").addEventListener("click", functions1);
    document.getElementById("functions2").addEventListener("click", functions2);
    document.getElementById("functions3").addEventListener("click", functions3);
    document.getElementById("functions4").addEventListener("click", functions4);
    
    document.getElementById("filterValuesRegular").addEventListener("click", filterValuesRegular);
    document.getElementById("filterValuesArrowFunctions").addEventListener("click", filterValuesArrowFunctions);
});
