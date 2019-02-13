"use strict";
  //logs even numbers from 2 - 65536
  let x = 2;
  while(x <= 65536){
      console.log(x);
      x += x;
  }

  //ice cream cones
//generates a random number btwn 50-100
var allCones = Math.floor(Math.random() * 50) + 50;

//ice cream cone loop simulator
//log out how many cones i have
console.log("I have " + allCones + " cones.");
do {
    //generates random number between 1 and 5
    var cones = Math.floor(Math.random() * 5) + 1;

    console.log(cones + " cone/s sold...")
    //subtract cones sold from total
    allCones -= cones
    //log new total
    console.log(allCones + " cone/s left.")

    if (allCones === 0) {
        console.log("Yayy! I sold all my cones!");
    }

    if ((cones > allCones) && (allCones !== 0)) {
        console.log("Can't sell you " + cones + " cones, I only have " + allCones);
        console.log("Did you want to buy my last " + allCones + " cone/s?")
        console.log(allCones + " more cones sold..");
        allCones -= allCones
        console.log("Yayy! I sold all my cones!");
    }

} while ((allCones - cones >= 0));