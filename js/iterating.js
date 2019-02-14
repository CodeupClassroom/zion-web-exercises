(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
        var names = [
            'daniel',
            'sophie',
            'justin',
            'fer'
        ];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
         console.log(names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
        console.log(names[0]);
        console.log(names[1]);
        console.log(names[2]);
        console.log(names[3]);
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
        for(var i = 0; i < names.length; i++){
            console.log(names[i]);
        }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
        names.forEach(function(element){
            console.log(element);
        });
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

        function first(array){
           return array[0];
        }

        function second(array){
            return array[1];
        }
        function last(array){
            return array[array.length - 1];
        }

        console.log(first(names));
        console.log(second(names));
        console.log(last(names));


        /**BONUSES:*/

    /**
     * TODO:
     * Create an array of shapes
     * - prompt the user to search for a specific shape
     * - using for loop, iterate through the array until the shape is found
     * - once the shape is found, log a message then break to exit loop
     */

    var shapes = ['square', 'circle', 'rectangle', 'trapezoid'];
    var search = prompt("Search for a shape");
    for(var i = 0; i < shapes.length; i++){
        console.log(shapes[i]);
        if(search === shapes[i]){
            console.log("found the shape");
            break;
        }
    }

    /**
     * TODO:
     * Create a function that returns a random day of the week
     */

    function randomDay(){
        var days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
        var random = (Math.floor(Math.random() * 7) + 1) - 1;
        return days[random];
    }

    console.log(randomDay());




})();
