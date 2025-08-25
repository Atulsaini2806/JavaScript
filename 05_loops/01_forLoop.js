// for loop :
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
//Example 1:
for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);

}
//console.log(element);

//Example 2:
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number");
    }
      console.log(element);
}

//Example 3:
for (let i = 1; i <= 10; i++) {
     console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
   // console.log(`Inner loop value ${j} and inner loop ${i}`);
    console.log(i + '*' + j + ' = ' + i*j );
   }

}

//Example 4:
// for loop in array
     let myArray = [1,2,3,4,5];
     console.log(myArray.length);//5
       for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);//1,2,3,4,5
    
}

// break and continue:
// break :- it stops the execution of code when condition is meet.
for (let i = 0; i <=8; i++) {

    if(i==6){
        console.log("6 is detected");
        break;
    }
     console.log(i);//1,2,3,4,5,"6 is detected"
 }

 //continue :- it skips the value when condition is meet.
    for (let i = 0; i <=10; i++) {
    
        if(i==6){
            console.log("6 is detected");
            continue;
        }
        console.log(i);//1,2,3,4,5,"6 is detected",7,8,9,10
    }