//Basic comparision 
  console.log(2>1);
  console.log(2<1);
  console.log(3>=2);
  console.log(2<=4);
  console.log(2==3);
  console.log(2!=6);


//Avoid this type of conversion where data types is unmatched.
  console.log("2">1);//true
  console.log("02">1);//true


  console.log(null>0); // false
  console.log(null==0); //false
  console.log(null>=0); //true(Here, conversion problem is created)
// The reason is that in js an eqality check(==) & comparisions(<,>,<=,>=) work diffrently
       //  b'coz comparision convert null to a number.
// Treating it as 0.that's why (null>=0) is true and (null>0) is false.


//similer problem with undefined.
   console.log(undefined>0); //false
   console.log(undefined>=0); //false
   console.log(undefined==0); //false



 //strict check(===)
  console.log("5" === 5); false //because firstly conversin will happened then comparision
                                // that's why it is called strict check
