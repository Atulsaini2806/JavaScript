//Reduce:-It is also a callback function that is used to reduce the array to a single value.
// Callback function takes two parameters, the first is the accumulator and the second is the current value.
//Reduce function is a higher-order function that takes a callback function as an argument and applies it to each element in the array.
// It returns a single value, which is the result of applying the callback function to each element in the array.

//Example 1:-
const myNums = [1,2,3,4];
const totalSum = myNums.reduce(function (acc,currval){
    console.log(`acc:${acc} and currval:${currval}`);
    
    return acc+currval;
},0)// here 0 is initial value
console.log(totalSum);//10

// or by arrow function
const Sum = myNums.reduce((acc,currval)=> acc+currval,0)
console.log(Sum);


//Example 2:-
const myNumbers = [1,2,3,4,5];
const sum = myNumbers.reduce((accum, currval) => {
    return accum + currval;
}, 0);
console.log(sum);//15

//Example 3:-
const shopingCart = [
    {
        itemName:"js course",
        price:1999,
    },
    {
        itemName:"py course",
        price:999,
    },
    {
        itemName:"java course",
        price:2999,
    },
    {
        itemName:"web dev course",
        price:5999,
    }
];

const totalPrice = shopingCart.reduce((acc,item)=> acc+item.price,0);
console.log(totalPrice);