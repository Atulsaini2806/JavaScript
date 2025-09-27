//Primitive Datatypes
//7types : String , Number , Boolean , symbol , Null , Undefined , Bigint


//Reference(Non Primitive Datatypes)
//  3 types: Array , Objects , Function

//Primitive Datatypes
const score = 100
console.log(typeof 100);//number

const scoreValue = 90.3
console.log(typeof 90.3);//number if it is also in float.

const name = "Atul Saini"
console.log(typeof "Atul Saini");//string

 
const isLoggedIn = false
console.log(typeof false); //boolean


const outsideTemp  = null
console.log(typeof null);//object

let userEmail ;
console.log(typeof userEmail); //undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 4376545786787n


//Reference (Non Primitive Datatypes)
//Array
const cricketer = ["Rohit" , "Virat" ,"Gill" ]
console.log(cricketer);
console.log(typeof cricketer);



//object
     let myObject = { 
    name : "david",
    age : 25
  }
  console.log(typeof myobject);
  


  //Function
     let myFunction = function(){
         console.log("Hello");   
    }
    console.log(typeof myFunction);
    
  //Here, function treat as a variable