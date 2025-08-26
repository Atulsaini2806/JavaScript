//MAP:- map is also a callback function.
// It is used to iterate over the array and modify the original array and return a new array.


//difference between map() and filter():
//map() is used to modify the elements of an array and return a new array with the modified elements.
//filter() is used to filter the elements of an array based on a condition and return a new array with the elements that pass the condition.


//Example 1:-
const myNumbers = [1,2,3,4,5,6,7,8,9,10];
//const newNumbers = myNumbers.map( (num) => num + 10 );
const newNumbers = myNumbers.map( (num) => {
    return num + 10 
});

console.log(newNumbers);//[11,12,13,14,15,16,17,18,19,20]


//chainig:-
//Example 1:-
const myValues = [1,2,3,4,5,6,7,8,9,10];
const newValues = myValues
                .map((val)=> val*10)//[10,20,30,40,50,60,70,80,90,100]
                .map((val)=> val+1)//[11,21,31,41,51,61,71,81,91,101]
                .filter((val)=> val>=40)//[41,51,61,71,81,91,101]
     console.log(newValues);


//Example 2:-chainig example with return keyword.
const myNum = [1,2,3,4,5,6,7,8,9,10];
const newNum = myNum
.map( (num) => {
    return num + 10;
      })
.filter( (num) => {
    return num > 15;
   });
console.log(newNum);//[16,17,18,19,20]