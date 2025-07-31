//First method to declearing string
   const  name = "Rohan"
   const age = 21
   console.log("Rohan" + 21); //not a good choice

   console.log('my name is ${Rohan} and my age is ${21}');//string interpolation.(modern method)


//Second important method to declear a string
   const myName = new String("Atul Saini")
    
   console.log(myName [0]);//A
   console.log(myName.length);//10
   console.log(myName.__proto__);//return object{}
   

   console.log(myName.charAt(7)); //i(here index start from 0)
   console.log(myName.charAt(4));//null
   console.log(myName.indexOf("u"));//2 (because index start from 0)

   console.log(myName.toLowerCase()); //atul saini
   console.log(myName.toUpperCase()); //ATUL SAINI

   const newString = myName.substring(0 , 3);// Note:here not include last index that is 3 
   console.log(newString);
      
    const anotherString = myName.slice(0 , 3);// slice also work with negative index.
    console.log(anotherString);
    

    const newStringOne = "     rohan    ";
    console.log(newStringOne);
    console.log(newStringOne.trim());//remove the extra space
    
    //const url = "https://sohan.com/sohan%60$choudhary"
    //console.log(url.replace(sohan, _));
    
     const newName= "Ankit-25-M.tech-EC";   
      console.log(newName.split('-'));// [ 'Ankit', '25', 'M.tech', 'EC' ]