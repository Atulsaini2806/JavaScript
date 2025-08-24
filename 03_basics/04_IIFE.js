// Immediately Invoked Function Expression :- IIFE

//Defination:- a function which is executed immediately after function creation and IIFE is used for avoiding global scope's pollution

// syntax
(function chai(){ //named IIFE
    console.log(`db connected`);
    
})();
//()()
// here first () is used for function defination and second () is used for execution call

//unnamed IIFE or IIFE  in arrow function:
((name)=>{
    console.log(`welcome ${name}`);
    
})('Atul');

// when we write two immediately invoked function then first functionis invoked but it does not know where the context will be end that why we need to end
// the function with a semicolon(;) because if we do not put semicolon then it will give error in some cases.