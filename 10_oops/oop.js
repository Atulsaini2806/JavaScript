//Object literals:- objects laterals are used to store multiple values in a single variable
const user = {
    username: "mohan",
    loginCount: 8,
    signedIn: true,

getUserDetails: function(){
         //console.log("Got user details from database");
         console.log(`Username: ${this.username}`);//this keyword are used to access the current object properties.
         console.log(`Login count: ${this.loginCount}`);
         console.log(this);//here we have the access of complete object not a particular variable.
    }

}
     console.log(user.username)
     console.log(user.getUserDetails());
     // console.log(this);//{}
     //In browser this keyword point to window object but in node js(global context) it point to empty object.


//++++++++++++++++Constructor Function+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Constructor function are used to create multiple objects of same type.
//we use capital letter for constructor function.

//for example:-
     //const promise = new Promise();
     //const date = new Date();
// here new keyword is used as a constructor function to create multiple objects of same type.because we can make multiple date objects and promise objects.


function CreateUser(username,loginCount,signedIn){
    this.username = username;//here this denote that this.username is a property of the object being created(variable in which username is storded)
    this.loginCount = loginCount;
    this.signedIn = signedIn;

    return this;//it return the current object.or it is bydefault return this.
}

    // const user1 =  CreateUser("sohan",10,true);//here user1 is an object.
    // const user2 =  CreateUser("rohan",20,false);
    // console.log(user1);//here also prnit user2 object.thats'why we used new keyword.(Or it happened due to  override)
    
    

   const user1 =  new CreateUser("sohan",10,true);
     const user2 =  new CreateUser("rohan",20,false);
     //console.log(user1);
        console.log(user1.constructor);//it return the function which is used to create that object.

    //here .constructor property is used to reference itself.

    //first step:-when new keyword is used then a new empty object is created which is called instance and this keyword point to that instance.
    //second step:-then the function is called with the given arguments.
    //third step:- in this step all variable inject indside the empty object instance.
// fourth step:-then that instance is returned from the function and stored in the variable.