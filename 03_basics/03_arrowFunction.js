//first we talk about "this" keywordbefore going to arrow function.
const user = {
    username: "Atul",
    age: 21,
    welcomeMessage: function () {
        console.log(`${this.username} , welcome to the website`); //here this keyword is used for refrence current context(block scope)
      //  console.log(this);
    }
}
    //   user.welcomeMessage();//Atul , welcome to the website;
    //   user.username = "sam";
    //   user.welcomeMessage();//sam , welcome to the website; b'coz now context is changed here now it is current context and this refers it

      //console.log(this);//{} empty object only for node. Not for browser. because in browser this refers to window object.
                       // it give the empyt object because there is no global content.

    
    // function chai(){
    //     let username = "Atul";
    //     console.log(this);
    // }
    //    chai(); 

 //Another method to declare a function.
    // const chai = function(){
    //     let username = "Atul";
    //     console.log(this.username);//undefined
    // }
    //    chai(); 


//Arrow function: it is a shorter syntax of function expression.[() => {}]
//first method:
    const chai = () => {
        let username = "Atul";
        console.log(this);//{}
        console.log(this.username);//undefined
    }
    chai();

//Secend method: (explicitly)
    const addTwo =(num1,num2)=>{
    return num1+num2;
}//if we use {} then we need to write return keyword.
    console.log(addTwo(7,3));//10


//third method: (implicitly)
    const addtwo = (num1,num2) => num1+num2;//in this method we do not need to write return keyword.
  // const addtwo = (num1,num2) => (num1+num2) ;
    console.log(addtwo(7,8));//15


//if we want to return an object inside the function then we need to put it into the paranthesis otherwise it will give undefined.
    const add2 = (num1,num2) => ({username:"Atul"});
    console.log(add2(7,8));//{username: 'Atul'}  