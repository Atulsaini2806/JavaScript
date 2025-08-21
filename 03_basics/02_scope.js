// scope witnin {} is called block scope and outside scope is caled global scope like below

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