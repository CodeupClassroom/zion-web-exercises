/*
 * Complete the TODO items below
 */
const users = [
    {
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash']
    },
    {
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript']
    },
    // {
    //     name: 'daniel',
    //     email: 'daniel@codeup.com',
    //     languages: ['java', 'javascript', 'pascal']
    // },
    {
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql']
    },
    {
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php']
    }
];

// Done: fill in your name and email and add some programming languages you know
// to the languages array
// Done: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
const name = 'daniel';
const email = 'daniel@codeup.com';
const languages = ['java', 'javascript', 'pascal'];
// name += " fryar";

// Done: rewrite the object literal using object property shorthand
users.push({
    name,
    email,
    languages
});
console.log(users[users.length - 1].name)

// Done: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// Done: rewrite the following using arrow functions
users.forEach((user) => {
    return emails.push(user.email);
});
users.forEach(user => {
    return names.push(user.name);
});

// Done: replace `var` with `let` in the following declaration
let developers = [];
users.forEach((user) => {
    // Done: rewrite the code below to use object destructuring assignment
    //       note that you can also use destructuring assignment in the function
    //       parameter definition
    // const name = user.name;
    // const email = user.email;
    // const languages = user.languages;
    const {name, email, languages} = user;


    // Done: rewrite the assignment below to use template strings
    developers.push(`${name}'s email is ${email}. ${name} knows ${languages.join(', ')}`);
});
console.log(developers);

// Done: Use `let` for the following variable
let list = '<ul>';

// Done: rewrite the following loop to use a for..of loop
// developers.forEach(function (developer) {
//
//     // Done: rewrite the assignment below to use template strings
//     list += '<li>' + developer + '</li>';
// });
for (let developer of developers) {
    list += `<li> ${developer} </li>`;
}
list += '</ul>';
document.getElementById("list").innerHTML = list;
