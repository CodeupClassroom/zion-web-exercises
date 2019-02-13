"use strict";
//showMultiplicationTable
function showMultiplicationTable(x){
    let b;
    for(let a = 1; a <= 10; a++){
        b = x*a;
        console.log(x + " x " + a + " = " + b);
    }
}

showMultiplicationTable(7);

//generate 10 numbers from 20 - 200 output if odd or even.
for(let i = 1; i <= 10; i++){
    let randomNumber = Math.floor(Math.random() * 200) + 20;
    if(randomNumber % 2 === 0){
        console.log(randomNumber + " is even.");
    }else{
        console.log(randomNumber + " is odd.");
    }
}

//half-triangle of numbers
for (let i = 1; i < 10; i++) {
    let print = "";
    for (let j = 1; j <= i; j++){
        print += i;
    }
    console.log(print);
}
//count backwards by 5 from 100
for(let i = 100; i >= 5; i -= 5){
    console.log(i);
}