// const makePromise = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let number = Math.random();
//
//             // console.log(`Our number is ${number}`);
//             if (number > 0.5) {
//                 resolve(`Our number is ${number}`);
//             } else {
//                 reject(`Our number is ${number}`);
//             }
//
//         }, 1000);
//     })
//         .then((data) => console.log(`resolved! ${data}`))
//         .catch((data) => console.log(`rejected! ${data}`));
// }
//
// console.log(makePromise());

// fetch('https://api.github.com/users/danielfryar')
//     .then((data) => {
//         let info = data.json();
//         console.log(info.Object.login)
//     })
//     .catch(error => console.error(error));
//
// Promise.resolve('one').then((one) => {
//     console.log(one);
//     return 'two';
// }).then((two) => {
//     console.log(two);
//     return 'three';
// }).then((three) => {
//     console.log(three);
// });

const wait = (milliseconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(`You'll see this after ${milliseconds / 1000} second(s)`)
        },milliseconds)

        }
    ).then((message) => console.log(message));
}

// wait(1000)
// wait(3000)


fetch('https://api.github.com/users/danielfryar')
    .then((data) => {
        console.log(data);
        return data.json();
    })
    .then((jsonData) => {
        console.log(jsonData.login)
    })
    // .catch(error => console.error(error));
