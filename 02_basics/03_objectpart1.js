//Decleration of object.

//when we declear the object by cunstructors then type of  obj is singleton object.Example: objrct.create
//when we declear the object by literlas then type of  obj is not singleton object.

//obeject literals:
     
    const mySym = Symbol("key1");

     const myObject = {
     name : "Atul",//here name (key) treat as string behaind the scene.
     fullName:"Atul Saini",
     age:21, 
     location:"meerut",
     email:"atul@google.com",
     isLoggeIn:false,
     lastloginDays : ["Monday" ,"saturaday"],
     [mySym] : "mykey1" //if we want to add a symbol into object's key then always write the key inside the [](bracket).
                      // without this bracket it does not treat as a symbol.
                     //hence we can say that [variable name] is the syntex to add the symbol inside the object.                      
}
     console.log(myObject);

//second method to declear the object by non sinlheton object.
 const instaUser1 = {};
          instaUser1.id = "123abc";
          instaUser1.name = 'sammy';
          instaUser1.isLoggedIn = false;
          console.log(instaUser1);
          
//Accessiny the object
   console.log(myObject.email);//mostly use this.
   console.log(myObject["email"]);// but sometime prefer this method.
   console.log(myObject["full name"]);
   console.log(myObject[mySym]);// no need of "".

// if we want to change some of object keys then use 
   myObject.email = "atulsaini@chatgpt.com"
   console.log(myObject.email);//atulsaini@chatgpt.com

//if we do not want to change object key's value then use freeze().
   // Object.freeze(myObject);//important
    myObject.location ="noida"
    console.log(myObject.location);
    console.log(myObject);


// if we want to   add a function into a object:
    myObject.greeting = function(){
    console.log("hello Js User"); 
}

    myObject.greetingTwo = function(){
    console.log(`hello Js user,${this.name}`); //(this.name) is use to refrence name key from myObj
}

    console.log(myObject.greeting());//hello Js User
    console.log( myObject.greetingTwo());//hello Js user,Atul
    
    

 

   

