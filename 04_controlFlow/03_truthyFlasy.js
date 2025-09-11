//Example 1: of truthy values
      const userEmail = "atul@gmail.com";
        if(userEmail){
         console.log("Got user email");
    
     }  else{
         console.log("Don't have user email");
      }

//Example 2: of falsy values
      const useremail = false;
        if(useremail){
         console.log("Got user email");

     }  else{
         console.log("Don't have user email");
     }


// truthy values:- values which are always asumed as true
// truthy values:- "0" , 'false' , " "/' ', [] , {}(object) ,function(){}(empty function)

// falsy values:-values which are always asumed as false
// falsy values:- false , 0 , -0 , bigInt 0n , null , undefined , ""/ '' , NaN


//Example 3:
  const arr = [];
    if(arr.length==0){
       console.log("array is empty");
    }

//Example 4:
  const user = {};
    if(Object.keys(user).length === 0){
       console.log("user object is empty");
    }

//note:- false == 0 //true
//note:- false == ''//true
//note:- 0 == ''//true

//Nullish coalescing Operator: Null or Undefined
// used for checking the null and undefined safety
//Example:-
     let val1;
      //val1= 5??10;//5
      // val1  = null??10; //10
      //val1 = undefined??15;//15
         val1= null ?? 10??15;// 10 
         console.log(val1);

// Terniary operator
// syntax:-
//condition ? true:false;
//Example:-
      const  batPrice = 1000;
       batPrice <= 800 ? console.log("less than 800"): console.log("more than 800");