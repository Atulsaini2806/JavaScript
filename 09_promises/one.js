//Promises:- The promise obj represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
// A Promise is in one of these states:
// 1. pending: initial state, neither fulfilled nor rejected.
// 2. fulfilled: meaning that the operation was completed successfully.
// 3. rejected: meaning that the operation failed.

//How to create a promise:-
//syntax 1:-
    const promiseone = new Promise(function(resolve,reject){
        //do an async task
        //DB calls,cryptography
        setTimeout(function(){
            console.log('Async task is completed');
            resolve();//it is used to connect the async task with the promise means resolve and .then. 
        },1000)

    })
    promiseone.then(function(){
        console.log('Promise consumed');
    })

//syntax 2:-        
   new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log('Async task 2 is completed');
            resolve();//it is used to connect the async task with the promise means resolve and .then. 
        },1000)
    })
    .then(function(){
        console.log('Promise 2 consumed');
    })
//.then is used to consume the promise. It is executed when the promise is resolved.

//syntax 3:-
    const promiseThree = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve([1,2,3]);
            //resolve({username:'john',password:'123456789'});
        },1000)
    })
    promiseThree.then(function(data){
        console.log(data);
    })

//syntax 4:- 
// if we want to handle error then use catch method like below
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"dev",password:"1234"})
        }else{
            reject("ERROR:Something went wrong")
        }
        
    })
})
promiseFour.then(function(data){
    console.log(data);
    return data.username;// to print username use chaining of then method
})
.then(function(username){
    console.log(username);
})
.catch(function(error){// catch is used for handling error
    console.log(error);
}).finally(function(){
    console.log("Promise is either resolved or rejected");
});


//promises via async await
//it is used to consume promise in a synchronous way
//syntax

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"javascript",password:"1234"})
        }else{
            reject("ERROR:Something went wrong")
        }
        
    })
})
async function consumePromise(){ //whenever we use  async await we have to use try catch block for error handling.
   try {
    const response = await promiseFive;
    console.log(response);
   } catch (error) {
    console.log(error);
    console.log(error);
   }
}
consumePromise();