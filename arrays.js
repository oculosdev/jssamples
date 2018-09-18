

function initArray(){
    let list1 = []; // Empty array

    console.log(list1);

    let list2 = [1,2,3,4,5];
    console.log(list2);

    let list3 = new Array(5);
    console.log(list3);
}

function initArrayInLoop(){
    
}

function iterateWithForLoop(){
    
}

function iterateWithForEach(){
    
}

function mapValues() {
    const myArray = [
        { id : 1, name: "test 1", wallet: 10.0},
        { id : 2, name: "test 2", wallet: 15.0},
        { id : 3, name: "test 3", wallet: 6.0},
        { id : 4, name: "test 4", wallet: 2.0},
        { id : 5, name: "test 5", wallet: 9.0},
        { id : 6, name: "test 6", wallet: 11.0},
    ];

    const evenIds = myArray.map((item) => item.id);

    console.log(evenIds);
};

function reduceValues() {
    const myArray = [
        { id : 1, name: "test 1", wallet: 10.0},
        { id : 2, name: "test 2", wallet: 15.0},
        { id : 3, name: "test 3", wallet: 6.0},
        { id : 4, name: "test 4", wallet: 2.0},
        { id : 5, name: "test 5", wallet: 9.0},
        { id : 6, name: "test 6", wallet: 11.0},
    ];

    const evenIds = myArray.map((item) => item.id);

    console.log(evenIds);
}

window.addEventListener("load", () => {
    document.getElementById("initArray").addEventListener("click", initArray);
    document.getElementById("initArrayInLoop").addEventListener("click", initArrayInLoop);
    document.getElementById("iterateWithForLoop").addEventListener("click", iterateWithForLoop);
    document.getElementById("iterateWithForEach").addEventListener("click", iterateWithForEach);
    document.getElementById("map").addEventListener("click", mapValues);
    document.getElementById("reduce").addEventListener("click", reduceValues);
    document.getElementById("filter").addEventListener("click", reduceValues);
});