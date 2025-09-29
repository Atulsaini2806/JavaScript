//for in loop:
//syntax:
   // for (variable in object) {
   //     // code
   // }
 
    

//Example 1: for in loop for object.
const myObj={
    js:"javascript",
    py:"python",
    rb:"ruby",
    cpp:"c++"
};

for(const keys in myObj){
    //console.log(keys);
    console.log(myObj[keys]);
    //console.log(`${keys} is shortcut for ${myObj[keys]}`);
    //js is shortcut for javascript
    //py is shortcut for python
    //rb is shortcut for ruby
    //cpp is shortcut for c++
}

//Example 2: for in loop for array.
     const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(key); //0,1,2,3,4
    console.log(programming[key]);//js,rb,py,java,cpp
}

//Example 3: for in loop for string.
const myString = "Atul";
for (const key in myString) {
    console.log(key);//0,1,2,3
    console.log(myString[key]);//A,t,u,l
}

//Example 4: for in loop for map.
      //  let myMap = new Map();
     //myMap.set("name", "John");
   // myMap.set("age", 30);
    // myMap.set("city", "New York");
    // for (const key in myMap) {
     //  console.log(key);
   //}
// Hence for in loop is not suitable for maps as it does not iterate over the values.


//Note:- for..in loop is not suitable for arrays and maps as it does not guarantee the order of iteration and can lead to unexpected results.
//Note:- for in loop is mainly used for iterating over the properties of an object.