// data.js

const obj = {
    someNumber: 42,
    whichSideOfTheForce: 'The Dark Side',
    arnie: 'Get to da choppa!',
};

const multiply = (num1, num2) => {
    let sum = 0;
    for (let i = 0;i<num2;i++) {
        sum += num1;
    }
    console.log("inside multiply");
    return sum;
}

module.exports = {obj, multiply};