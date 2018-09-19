

function initArray() {
    let list1 = []; // Empty array

    console.log(list1);

    let list2 = [1, 26, 3.2, 41, 5];
    console.log(list2);

    let list3 = new Array(2);
    list3[0] = "4 melk";
    list3[1] = "dagbla' for i går";
    console.log(list3);

    // Read specific array item
    console.log("list[3]: " + list3[1]);
}

function fibonacciForLoop() {
    let list = [];
    list[0] = 0; // Assign index (position in list) 0 of list to be 0
    list[1] = 1; // Assign index 1 of list to be 1

    for(let i = 2; i < 20; i++) {
        list[i] =  list[i - 1] + list [i - 2];
    }

    console.log(list);
}

function fibonacciWhileLoop() {
    let list = new Array(20);
    list[0] = 0; // Assign index (position in list) 0 of list to be 0
    list[1] = 1; // Assign index 1 of list to be 1

    let i = 2;

    while(i < 20) {
        list[i] =  list[i - 1] + list [i - 2];
        i++;
    }

    console.log(list);
}

function iterateWithForLoop() {
    let list = [1, 26, 3.2, 41, 5];
    
    for(let i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
}

function iterateWithForEach() {
    let list = [1, 26, 3.2, 41, 5];

    list.forEach(function(item) { 
        console.log(item) 
    });
}

function mapValues() {
    let myArray = [
        { id : 1, name: "test 1", wallet: 10.0},
        { id : 2, name: "test 2", wallet: 15.0},
        { id : 3, name: "test 3", wallet: 6.0},
        { id : 4, name: "test 4", wallet: 2.0},
        { id : 5, name: "test 5", wallet: 9.0},
        { id : 6, name: "test 6", wallet: 11.0},
    ];

    let evenIds = myArray.map(function(item) {
        return item.id;
    });

    console.log(evenIds);
};

function reduceValues() {
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
        }).reduce(function(accumulator, currentValue) {
            return accumulator + currentValue;
        }
    );

    console.log(walletSum);
}

function filterValues() {
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



window.addEventListener("load", () => {
    document.getElementById("initArray").addEventListener("click", initArray);
    document.getElementById("fibonacciForLoop").addEventListener("click", fibonacciForLoop);
    document.getElementById("fibonacciWhileLoop").addEventListener("click", fibonacciWhileLoop);
    document.getElementById("iterateWithForLoop").addEventListener("click", iterateWithForLoop);
    document.getElementById("iterateWithForEach").addEventListener("click", iterateWithForEach);
    document.getElementById("map").addEventListener("click", mapValues);
    document.getElementById("reduce").addEventListener("click", reduceValues);
    document.getElementById("filter").addEventListener("click", filterValues);
});