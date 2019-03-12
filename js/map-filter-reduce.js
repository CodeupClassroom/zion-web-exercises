"use strict";
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
const threeLanguages = users.filter(n => n.languages.length > 2);
console.log(threeLanguages);

//Use .map to create an array of strings where each element is a user's email address
const emailAddresses = users.map(n => n.email);
console.log(emailAddresses);
//Use reduce to get the total years of experience from the list of users.
const sumOfYears = (total,user) => total + user.yearsOfExperience;
const totalYears = users.reduce(sumOfYears,0);
console.log(totalYears);
//Once you get the total of years you can use the result to calculate the average.
const averageYears = totalYears/users.length;
console.log("Average number of years:" + averageYears);
//Use reduce to get the longest email from the list of users.
const findLongest = (prev,current) => {
    let myString = current.email;
    if(myString.length > prev.length){
        return myString;
    } else {
        return prev;
    }
};
const longestEmail = users.reduce(findLongest,'');
console.log(longestEmail);
//Use reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

const compileList = (list,user,index,all) => {
    let myList = user.name;
    if(index < all.length - 1){
        return list + myList + '';
    }
};
const listOfNames = users.reduce(compileList,"Your instructors are: ");
console.log(listOfNames);



/**
 * BONUS:
 * List instructors WITHOUT weird comma at the end?
 *
 * Use reduce to get the unique list of languages from the list of users.
 *
 */
//Solution #1
const languages = users.reduce((acc,current) => {
    let langs = current.languages;
    for(let lang of langs){
        //.add is like .push but for Sets
        acc.add(lang);
    }
    return acc;
},new Set);
console.log(Array.from(languages));

const listOfLanguages = (list,user) => {
    list.push(user.languages);
    return list;
};
console.log(listOfLanguages);


//Solution #2
let languages = users.reduce(listOfLanguages,[]);

//flattens out Array -> Strings
languages = languages.flat();

//takes unique values and creates a list object
languages = new Set(languages);

//turns Set back into an Array
languages = Array.from(languages);

console.log(languages);


