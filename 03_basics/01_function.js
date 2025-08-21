//Syntax:
// function functionName(){}
//Example:
    function sayMyName(){
       console.log("A");
       console.log("t");
       console.log("u");
       console.log("l");
       }
//Function is a block of code that will be executed when it is called.
   sayMyName(); // Output: A t u l// here sayMyName is refrence and () is for execution.
//Function can be called multiple times.

//Example:sum of two numbe elements
    function add(a, b){
       console.log(a + b);
    }
    add(); // Nan
    add(5, 10); // Output: 15
   // add(5,"4"); //Output: 54
    // add(100, 200); // Output: 300

//anothe example:
    function addTwoNumbers(number1, number2){
       console.log(number1 + number2);
    }
    addTwoNumbers(10, 20); // Output: 30
//when we write the defination of a function, which values we pass in the function is called parameters.
//when we call the function, the values we pass in the function is called arguments.

//Example: Function with return statement

// if we wnat to store the output into a variable.
       function addTwoNumbers(number1, number2){
         let result = number1 + number2;
         return result; // return statement is used to return the value from the function.

         // return number1 + number2;  // this will also work alone
       }
        const result = addTwoNumbers(40, 20); // Output: 30//if we use the return indide the function then we should need to store
                                              // it into a variable outside the function otherwise it will not work.
       console.log("Reult:" ,result); 





    