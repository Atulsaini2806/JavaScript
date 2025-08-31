//const clock = document.querySelector('#clock');
const clock = document.getElementById('clock');

//setInterval method are used to call a function at specified intervals (in milliseconds).
//or this method can be used to create a digital clock.
setInterval(function(){
   let date = new Date();
   //console.log(date.toLocaleTimeString());
   clock.innerHTML = date.toLocaleTimeString();
}, 1000)