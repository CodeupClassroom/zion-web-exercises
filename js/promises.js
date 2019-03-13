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

let headers = {'Authorization': `token ${GITHUB_TOKEN}`};

const getLastPush = (username) => {
    return fetch(`https://api.github.com/users/${username}/events`, {headers: headers})
        .then((data) => {
            // console.log(data);
            return data.json();
        })
        .then((data) => {
            // console.log(data);
            return data.filter((event) => {
                return event.type === "PushEvent";
            })
        })
        .then((data) => {
            // console.log(data);
            return data[0].created_at;
        })


}
getLastPush('danielfryar').then((timestamp) => console.log(timestamp));
        // return fetch(data.events_url, {headers: headers});
    // })
    // .then((data) => {
    //     console.log(data);
    // })
    // .catch(error => console.error(error));
