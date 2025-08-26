//Difference between for loop and while loop:
    // A for loop is typically used when the number of iterations is known beforehand.
    // It consists of three parts: initialization, condition, and increment/decrement.
    // A while loop is more flexible and can be used when the number of iterations is not known in advance.

//1. For Loop
    //Usage: When you know in advance how many times you want to repeat the block of code.
    //Structure: Initialization, condition, and increment/decrement are all written in one line.

//2. While Loop
    //Usage: When you don’t know beforehand how many times the loop will run (depends on a condition).
    //Structure: Only the condition is inside the loop declaration; initialization and increment/decrement are usually outside.


//Difference between while loop and do while loop:
//1:while loop :
    // In a while loop, the condition is checked before the execution of the loop body.
    // If the condition is false initially, the loop body may not execute at all.
    // A while loop may not execute at all if the condition is false from the beginning.

//2:do while loop:
    // In a do-while loop, the loop body is executed first, and then the condition is checked.
    // If the condition is false, the loop body will still execute once before terminating.
    // If the condition is false, it will not execute the code again.
    // A do-while loop is guaranteed to execute at least once.


//Difference between break and continue:
    // break :- it stops the execution of code when condition is meet.
    // continue :- it skips the value when condition is meet.


// Difference between for of and for in loop:
      //1. for of loop is used to iterate over iterable objects (arrays, strings, maps)
      //2. for in loop is used to iterate over the properties of an object
      //3. for of loop can be used with any iterable object, while for in loop can only be used with objects.
      //4. for of loop returns the values of the iterable, while for in loop returns the keys of the object.


//Difference between for loop, for of loop, for in loop and for each loop:-
//1: for loop :
    //Usage: When you know in advance how many times you want to repeat the block of code.
    //Structure: Initialization, condition, and increment/decrement are all written in one line.
    //Can be used with arrays and other iterable objects.
    //Can be controlled using break and continue statements.

//2: for of loop :
    //Usage: When you want to iterate over the values of an iterable object.
    //Structure: Simplified syntax, no need for initialization or condition.
    //Can be used with arrays, strings, maps, and other iterable objects.
    //Cannot be used with objects directly.

//3: for in loop :
    //Usage: When you want to iterate over the properties of an object.
    //Structure: Uses the "in" keyword to loop through the keys.
    //Can only be used with objects.
    //Returns the keys of the object.

//4: for each loop :
    //Usage: When you want to iterate over the elements of an array.
    //Structure: A method called on the array, passing a callback function.
    //Can only be used with arrays.
    //Cannot be used with objects directly.


//Difference between for loop, for of loop, for in loop and for each loop:-
//1. for loop (traditional loop)
        //Used when you know how many times you want to run the loop.
         //Structure: Initialization, condition, and increment/decrement are all written in one line.
        //Works with counters (index-based iteration).
        //Best for arrays when you need the index.
        //Can be used with arrays and other iterable objects.
        //Can be controlled using break and continue statements.
//Ex:-
for (let i = 0; i < 5; i++) {
  console.log(i); // 0,1,2,3,4
}


// 2. for...of loop
     //Usage: When you want to iterate over the values of an iterable object.
    //Structure: Simplified syntax, no need for initialization or condition.
    //mainly used with arrays, strings, maps, and other iterable objects.
    //Cannot be used with objects directly.
    //Does not give index by default.

const arr = ["a", "b", "c"];
for (let val of arr) {
  console.log(val); // "a", "b", "c"
}


// 3. for...in loop:-(object loop)
    //Usage: When you want to iterate over the properties of an object.
    //Structure: Uses the "in" keyword to loop through the keys.
    //Can only be used with objects.
    //for in loop is not suitable for maps as it does not iterate over the values.
    // Can also be used on arrays, but not recommended because order is not guaranteed.
    //Returns the keys of the object.
    // Iterates keys (property names) of an object.
    
const obj = { name: "Atul", age: 22 };
for (let key in obj) {
  console.log(key, obj[key]);
}
// name Atul
// age 22



// 4. forEach() loop (Array method):-
        //Usage: When you want to iterate over the elements of an array.
        //Structure: A method called on the array, passing a callback function. in it we do not need write the function name.
        //Can only be used with arrays.
        //Cannot be used with objects directly
        // Takes a callback function for each element.
        // Provides value, index, and the whole array.
        // forEach loop cannot be breaked or continued like for loop.

const nums = [10, 20, 30];
nums.forEach((val, index) => {
  console.log(index, val);
});
// 0 10
// 1 20
// 2 30


// ✅ Quick Comparison Table:-

// Loop	          Use Case	                                Iterates Over	                         Index Available?	                     Can Break?
// for	          General, when count/index needed	        Index-based	                             ✔ Yes	                                 ✔ Yes
// for..of	      Arrays, strings, sets, maps (values)	    Values	                                 ✘ No (but can use .entries())	         ✔ Yes
// for..in	      Objects (keys)                            Keys (property names)	                 ✘ No	                                 ✔ Yes
// forEach	      Arrays (functional style)	                Values (with index callback)	         ✔ Yes (2nd param)	                     ✘ No


//High order function:-
    //filter,map,reduce,forEach are high order function.
    // A higher-order function is a function that takes another function as an argument or returns a function as its result.

//callback function:-
    // A callback function is a function that is passed as an argument to another function and is executed at a later time.
    // A callback function does not require function name.
    //such as - filter,map,reduce,forEach are callback function.