"use strict";


console.log("Hello from external JavaScript");

alert('Welcome to my Website!');

var userColor = prompt("Enter your favorite color!");

alert(userColor + " " + "is my favorite color too!!");




// 3. Write some JavaScript code, that is, variables and operators, to describe the following scenarios.
//     Do not worry about the real operations to get the values, the goal of these exercises is
// to understand how real world conditions can be represented with code.


// Movie Rental
//     You have rented some movies for your kids: The little mermaid (for 3 days),
// Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3, how much will you have to pay?

// ...

    var rentalPerDayDollars = prompt("What is the rental rate per day in dollars??");

    var littleMermaidDays = prompt("How many days was the Little Mermaid rented for?");
    var brotherBearDays = prompt("How many days was Brother Bear rented for?");
    var herculesDays = prompt("How many days was Hercules rented for?");


    var totalRentalCost;

    totalRentalCost = (+littleMermaidDays + +brotherBearDays + +herculesDays) * rentalPerDayDollars;

    alert("The total rental cost is" + " " + "$" + totalRentalCost.toFixed(2));


// Contractor
// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
// they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
//     How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

    // ...

    var googleHourlyRateDollars = prompt("What is the Google hourly rate in dollars?");
    var amazonHourlyRateDollars = prompt("What is the Amazon hourly rate in dollars?");
    var facebookHourlyRateDollars = prompt("What is the Facebook hourly rate in dollars?");

    var googleHours = prompt("How many hours were worked at Google?");
    var amazonHours = prompt("How many hours were worked at Amazon?");
    var facebookHours = prompt("How many hours were worked at Facebook?");

    var totalPayment;

    totalPayment = googleHours * googleHourlyRateDollars;
    totalPayment += amazonHours * amazonHourlyRateDollars;
    totalPayment += facebookHours * facebookHourlyRateDollars;

    alert("Total wages earned: $" + totalPayment.toFixed(2));


// Student Enrollment
// A student can be enrolled to a class only if the class is not full and the class schedule does not conflict with her current schedule.
//
// ...

    var classIsFull = confirm("Confirm that class is full"); // boolean
    var classSchedulesCheck = confirm("Class schedules check out"); // boolean

    var studentEnrolled = !classIsFull && classSchedulesCheck;

    alert("Student enrollment status: " + studentEnrolled);


// Product Offer
// A product offer can be applied only if people buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
//     Use the following code to follow the instructions below:

    var numberOfItems = prompt("Enter number of items bought: "); // number
    var offerIsValid = confirm("Offer is valid"); // boolean
    var isPremiumMember = confirm("Is a premium member"); // boolean

    var productDiscountApplied = (isPremiumMember || Number(numberOfItems) > 2) && offerIsValid;

    alert("Product discount status: " + productDiscountApplied);




