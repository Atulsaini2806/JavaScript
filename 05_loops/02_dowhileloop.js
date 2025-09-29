// while loop:
//syntax:
    // while(condition){
    //     //code
    // }

//Example 1:
    let i = 1;
       while (i<=8) {
         //console.log(i);//0,1,2,3,4,5,6,7,8
          i++;
       }
// In while loop first it checks the condition then it executes the code.
// In do-while loop, it executes the code first then checks the condition.and if the condition is false, it will not execute the code again.

//Example 2:
      let score = 100
      while (score < 200) {
          console.log(score);
          score = score + 10;
          //score ++;
      }

//Example 3: while loop in array
   let arr = ["mukul","atul","deepak","nitin"]
   let j = 0;
   while(j<arr.length){
       console.log(arr[j]);  
       j++;
   }


// do while loop: syntax
//    do {
//        // code
//    } while (condition);

//Example 1:
   let k = 1;
   do {
       console.log(k);
       k++;
   } while (k <= 8);


//Example 2: do while loop in array
let myarr = ["mukul","atul","deepak","nitin"];
let m = 0;
do {
    console.log(myarr[m]);
    m++;
} while (m < myarr.length);

// Example 4: if while condition is false
let n = 11;
do {
    console.log(n);
    n++;
} while (n < 10);
//if the condition is false, it will not execute the code again.

//Difference between while loop and do while loop:
//while loop :
    // In a while loop, the condition is checked before the execution of the loop body.
    // If the condition is false initially, the loop body may not execute at all.
    // A while loop may not execute at all if the condition is false from the beginning.


//do while loop:
    // In a do-while loop, the loop body is executed first, and then the condition is checked.
    // If the condition is false, the loop body will still execute once before terminating.
    // If the condition is false, it will not execute the code again.
    // A do-while loop is guaranteed to execute at least once,


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