// for of loop:
//syntax:
   // for (variable of iterable) {
   //     // code
   // }

//Example 1: for of loop for array.
   let myArray = [10,20,30,40,50];
   for (const element of myArray) {
       console.log(element);//10,20,30,40,50
   }

//Example 2: for of loop of string.
   let myString = "Hello";
   for (const char of myString) {
       console.log(`Each char is ${char}`);//H,e,l,l,o
   }

// MAPS:
//Example 1: for of loop for map.
   let myMap = new Map();
   myMap.set("name", "John");
   myMap.set("age", 30);
   myMap.set("city", "New York");

   console.log(myMap);

   for (const [key, value] of myMap) {
       //console.log(`Key: ${key}, Value: ${value}`);
       console.log(key, ':-', value);
   }
// This syntax is specially used for map.

//Example 2: for of loop for map 
   let map = new Map();
   map.set('In',"india")
   map.set('Usa',"united state of america")
   map.set('Fr',"france")

   for (const [key ,value]of map) {
       console.log(key , '=' , value);
       
   }

// Example 3:for of loop for object:
// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

// Note:- for of loop does not work for object directly.

// Note:- for of loop most commonly used with arrays, strings, and maps.

// Difference between for of and for in loop:
// for of loop is used to iterate over iterable objects (arrays, strings, maps)
// for in loop is used to iterate over the properties of an object

//differences between for of loop and for in loop:
// 1. for of loop can be used with any iterable object, while for in loop can only be used with objects.
// 2. for of loop returns the values of the iterable, while for in loop returns the keys of the object.

// Difference between for of loop and for loop:
// for of loop is used to iterate over the values of an iterable object, while for loop is used to iterate over the elements of an array or the properties of an object.