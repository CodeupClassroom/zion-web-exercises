"use strict";

var input;
while(true){
    input = prompt("Please enter an odd number between 1 - 50");
    if(isNaN(input)){
        alert("That is not a number. Try again");
        continue;
    }
    if(input < 1 || input > 50){
        alert("That is out of range. Try again");
        continue;
    }
    if(input % 2 === 0){
        alert("Number must be odd. Try again");
    }
    else{
        break;
    }
}
console.log(input);
for(var i = 1; i <= 50; i++){
    if(i % 2 === 0){
        continue;
    }
    if(i == input){
        console.log("Yikes! Skipping: " + i);
    }else{
        console.log("Here is an odd number: " + i);
    }

}