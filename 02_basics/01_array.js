// Array:

//declaration of array::
// first rule:
    const arr1 = [1,2,3,4,5];
    console.log( "M =", arr1);

// seciond rule:
    const arr2 = new Array("apple","mango","banana","date");
    console.log(arr2); 
    console.log(arr2 [0]);

// Methods
    const myArr = [1,2,3,4,5,6,7,8];
    console.log(myArr.indexOf(5));//4
    console.log(myArr);//[1,2,3,4,5,6,7,8];
   // myArr.push(10)// add the value at the end.
      myArr.pop();// delete the value from the end.
      myArr.unshift(3);//add the value at the begining of the given array.
    //myArr.shift();//delete the value from the begining
    console.log(myArr);
    console.log(myArr.includes(9));//false
    console.log(myArr.indexOf(5));//5
    console.log(myArr.indexOf(11));//-1 if value is not exist.

//how to convert a array into a string:
    const newArr = myArr.join();
    console.log(newArr); 
    console.log(typeof newArr);


//slice and splice:
    const myArr1 = [15,45,21,34,24,18];
    console.log("A =",myArr1);
    const myn1 = myArr1.slice(0,3);
    console.log(myn1);//A = [15,45,21,34] return the range frome 0index to 4index but without 4.


    console.log("B =", myArr1);
    const myn2 = myArr1.splice(0,3);
    console.log(myn2);//B =[15,45,21] return the range from 1 index to 4 index but with 4.
    console.log( "C =",myArr1);//C = [ 34,24,18 ]
    
    
    //Important note: everyone say that difference between slice and splice is that slice does not includes range while splice includes.
    //but it is false.
    //slice() creates a shallow copy of a portion of an array into a new array, without modifying the original array.
    //splice() is used to add, remove, or replace elements in an array, and it modifies the original array.
    
 //   | Feature     | `slice()`                    | `splice()`               |
 // Modifies array? | ❌ No                       | ✅ Yes                    |
 // Return value    | Extracted part (new array)   |    Removed elements (array) |
 //Use case         |   Copy portion               | Insert/remove in-place   |
