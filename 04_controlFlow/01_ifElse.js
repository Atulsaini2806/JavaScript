// if and else statement:
//syntax:
    //    if (condition) {
    //        // code to be executed if condition is true
    //   } else {
    //        // code to be executed if condition is false
    // }

//Example 1:
      const age = 19;
        if(age>=18){
            console.log("eligible for voting");

        } else {
             console.log("not eligible");
     }
        console.log('executed');//always executed because it is outside the if-else block.

// < , <= , > , >= , == , === , != , !== these operators can be used in the condition.
// (=) is a assignment operator that are used to assign the value to a variable.
//(==) is a equality operator that checks only value.
//(===) is a strict equality operator that checks both value and type.


//Example 2:
    const score = 200
        if (score > 100) {
            var power = "fly"
            console.log(`User power: ${power}`); 
        }

         console.log(`User power: ${power}`);//if we use var instead of let/const then it will not give error because var is function scope.
//but it will give error due to block scope of let/const variable.or due to block scope of variables declared with let/const.//


//Example 3:(implicit scope)
     const amount = 1000
       if (amount > 500) console.log("test"),console.log("test2");// no need of write scope.
       // mostly avoided in modern JavaScript due to readability concerns.


//Example 4: nested if-else:
    const marks = 85;
       if (marks >= 90) {
           console.log("Grade: A");
       } else if (marks >= 80) {
           console.log("Grade: B");
       } else if (marks >= 70) {
           console.log("Grade: C");
       } else {
           console.log("Grade: D");
       }


//Example 5: if-else with logical operators:
       const userLoggedIn = true;
       const debitCard = true;
          if(userLoggedIn && debitCard){
        // if(userLoggedIn && debitCard && 2==3){
           console.log("allow to withdraw money");
          }else{
              console.log("withdrawal not allowed");
          }
//for logical AND (&&) both conditions must be true to execute the code inside the if block.


//Example 6: if-else with logical OR (||):
      const loggedFromGoogle = true;
      const loggedFromEmail = false;
         if(loggedFromGoogle || loggedFromEmail){
            console.log("allow to login");
          }else{
              console.log("login not allowed");
    }
//for logical OR (||) at least one condition must be true to execute the code inside the if block.