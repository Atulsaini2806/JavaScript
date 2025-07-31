 //Date:
    const myDate = new Date();
    console.log(myDate)//current date
    console.log(typeof myDate);//object(date is a object in js)
    

  //Methods with current dates:
     console.log(myDate.toString());//Thu Jul 31 2025 11:03:02 GMT+0530 (India Standard Time)
     console.log(myDate.toDateString());//Thu Jul 31 2025
     console.log(myDate.toLocaleString());//31/7/2025, 11:03:02 am
     console.log(myDate.getHours());//11
     console.log(myDate.getMonth());//6(beacuse in js month start from 0)
     console.log(myDate.getDay());//4


// other decleartion Methods:
   const myNewDate = new Date(2024,0, 8);
   console.log(myNewDate.toString());//Mon Jan 08 2024 00:00:00 GMT+0530 (India Standard Time)

   let mycreateDate = new Date(2025,2,11,4,3,50)
   console.log(mycreateDate.toLocaleString());//11/3/2025, 4:03:50 am
   
   const myDate1 = new Date("2025-6-14");
   console.log(myDate1.toDateString());//Sat Jun 14 2025

   let myDate2 = new Date("01-02-2025");
   console.log(myDate2.toLocaleString()); // 2/1/2025 ,12:00:00 AM
   

//Time Stamps:
    let myTimeStamp = Date.now(); //new Date();
    console.log(myTimeStamp);// value in mili seconds
    console.log(myDate2.getTime());
  
//  convert in secconds:
    console.log(Math.floor(Date.now()/1000));
  
    
    

 //++++++++++++++++++++++++    summary   ++++++++++++++++++++++++//

 //decleartion of string , number , date
     const myName = new String("Atul Saini")//string decleration
     const myDate5= new Date(); //decleration of date
     const balance = new Number(800);//decleration of number
     const arr2 = new Array(1,2,3,4,5);
     //these are the modern method that are used for declearation.