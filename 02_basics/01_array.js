// Array:

//declaration of array::
// first rule:
    const arr1 = [1,2,3,4,5];
    console.log( "M =", arr1);

// seciond rule:
    const arr2 = new Array("apple","mango","banana","date");
    console.log(arr2[0]);

// Methods
    const myArr = [1,2,3,4,5,6,7,8];
    console.log(myArr.indexOf(5));//4
    console.log(myArr);//[1,2,3,4,5,6,7,8];
   // myArr.push(10)// add the value at the end.
      myArr.pop();// delete the value from the end.
      myArr.unshift(3);//add the value at the begining of the given array.
    //myArr.shift();//delete the value from the begining
    console.log(myArr);
    console.log(myArr.includes(9));//false
    console.log(myArr.indexOf(5));//5
    console.log(myArr.indexOf(11));//-1 if value is not exist.

//how to convert a array into a string:
    const newArr = myArr.join();
    console.log(newArr); 
    console.log(typeof newArr);


//slice splice:
    const myArr1 = [0,1,2,3,4,5];
    console.log("A =",myArr1);
    const myn1 = myArr1.slice(1,4);
    console.log(myn1);//A = [1,2,3] return the range frome 1 to 4 but without 4.


    console.log("B =", myArr1);
    const myn2 = myArr1.splice(1,4);
    console.log(myn2);//B =[ 1, 2, 3, 4 ] return the range frome 1 to 4 but with 4.
    console.log( "C =",myArr1);//C = [ 0, 5 ]
    
    
    //Important note: everyone say that difference between slice and splice is that slice does not includes range while splice includes.
    //but it is false.


    