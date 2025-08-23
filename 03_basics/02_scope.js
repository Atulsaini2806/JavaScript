// Scope within {} is called block scope and outside scope is called global scope like below

       let a = 300;
       const b =90;
       var c = 40;
// these are global scope

    if(true){
       let a=20;
       const b=30;
       var c =22;
// this is called block scope
     console.log("inner:", a);//20
     console.log(b);//30
}
     console.log(a);//300
     console.log(c);//22 b'coz var is changeble within scope
// block scope take value from global scope but it does not give it's value or leak value of it's own.

//++++ nested scope ++++++++++: -- function inside a function
     function one(){
            const username = "Atul";

        function two(){
             const website = "youtube"
             console.log(username);
        }
    // console.log(website); //it is not access here b'coz child function can access the variable of it's parent function but parent function don't
          two();
    
    }
        one();

        //or
     if(true){
         const username = "Atul";
         if(username==="Atul"){
             const website = "youtube";
             console.log(username + website);
         }
         //console.log(website);
         
     }
      // console.log(username);


      
//+++++++++++++++interesting concept +++++++++++++

console.log(addOne(5));//Here it is executed.
function addOne(num){
    return num+1;
}

// or
addTwo(7)//Here it does not execute b'coz of declaration method which is called hosting(discus it into later part)
const addTwo=function(num){
    return num+2;
}