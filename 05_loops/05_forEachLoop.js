//for each loop:it is mainly use for array
// ex 1:-
   // syntax:
   // array.forEach((element) => {
   //     // code
   // });
//or
   // array.forEach(function(element, index, array) {
   //     // code to execute for each element
   // });

//Example 1:-
 const coding = ["js","java","python","cpp"]
 coding.forEach( function(item){  // by callback function(function myFunction(){}).
 //  it is call back function due to which we do need to write the function name and parameter can be anything.
     console.log(item);
     //js
     //java
    //python
    //cpp
 }
);

 // or
 coding.forEach( (item) => { // by arrow function[() =>{}]
    console.log(item);
    //js
    //java
    //python
    //cpp
    
 }
);

 //or
 coding.forEach((item,index,arr) => { //for printing all array
    console.log(item,index,arr);
    //js 0 ["js","java","python","cpp"]
    //java 1 ["js","java","python","cpp"]
    //python 2 ["js","java","python","cpp"]
    //cpp 3 ["js","java","python","cpp"]
 } 
);
//or
 function printMe(item){
    console.log(item);
 }
 coding.forEach(printMe); // by function name.output:-"js","java","python","cpp"]


 //Example 2:-if we have multiple objects in array
 const products = [
     { name: "Laptop", price: 1000 },
     { name: "Phone", price: 500 },
     { name: "Tablet", price: 300 }
 ];
 products.forEach(function(product) {
     console.log(product.name, "=", product.price);
     // Laptop 1000
     // Phone 500
     // Tablet 300
 });


 //Example 3:-
    const myCoding =[
     {
        languageName:"javascript",
        languageFile:"js",
     },
      {
        languageName:"python",
        languageFile:"py",
     },
      {
        languageName:"java",
        languageFile:"java",
     },
 ];

 myCoding.forEach( (item)=>{
    console.log(item.languageName, ":-", item.languageFile);
    //javascript js
    //python py
    //java java
 })

