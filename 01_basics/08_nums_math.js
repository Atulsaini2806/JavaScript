//+++++++++++++++++++++++  Numbers  ++++++++++++++++++++//

// Declaration of numbers
// Rule:-1
const score = 600;
console.log(score);//600

// Rule:-2
const balance = new Number(800);//modern method
console.log(balance);//[Number:800]

// Methods used in Numbers

   console.log(balance.toString());//800
   console.log(balance.toFixed(3));//800.00


   const number1 = 123.8986;
   console.log(number1.toPrecision(4)); //123.9


   const number2 = 1000000;
   console.log(number2.toLocaleString('en-US')); //1,000,000 in us format
   console.log(number2.toLocaleString('en-IN')); //10,00,000 in indian format



//++++++++++++++++++++++++  Maths   +++++++++++++++++++++++++++//

// By default Math is a libarary in js.
       console.log(Math);// object [Math] {}

// methods in Math :

   console.log(Math.abs(-8)); //8(convert -ive to +ve not +ive to -ive)
   console.log(Math.round(3.4)); //3
   console.log(Math.ceil(0.28)); //1 Always give the upper value
   console.log(Math.floor(4.84)); //4 Always give the lower value 
   console.log(Math.min(6,7,8,9));// 6
   console.log(Math.max(2,3,4,5));// 5


   console.log(Math.random());// Always give the value from 0 to 1.
   console.log(Math.random()*10);// Always give the value from 0 to 9.
   console.log((Math.random()*10)+1);// Always give the value from 1 to 9.

// we have a range and we want a number between that range than use method like below example

    const min = 10;
    const max = 20;
    console.log(Math.floor(Math.random() * (max - min + 1)) + min); // always give value greater than 10 or between range