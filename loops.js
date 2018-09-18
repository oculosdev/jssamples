"use strict";


function whileLoop() {
    let i = 0;

    while(i < 10)
    {
        console.log(i);
        i = i + 1;
    }
}

function doWhileLoop() {
    let i = 11;
    do {
        console.log(i);
        i = i - 1;
    } while (i > 0 && i <= 10)
}

function forLoop() {
    for (let i = 0; i < 10; i = i + 1){
        console.log(i);
    }
}

window.addEventListener("load", () => {
    document.getElementById("whileLoop").addEventListener("click", whileLoop);
    document.getElementById("doWhileLoop").addEventListener("click", doWhileLoop);
    document.getElementById("forLoop").addEventListener("click", forLoop);
});
