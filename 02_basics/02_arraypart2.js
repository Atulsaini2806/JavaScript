// We use concat and spread method to merge two array.
// concat method:-
     const myFav_heros = ['spiderman','ironman','thor'];
     const dc_heros = ['superman','flash','batman'];
     const device = ['laptop','mobile','computer'];

//merge using push metod:
    //myFav_heros.push(dc_heros);
    //console.log(myFav_heros);//[ 'spiderman', 'ironman', 'thor', [ 'superman', 'flash', 'batman' ] ]
    //console.log(myFav_heros[3]);//[ 'superman', 'flash', 'batman' ]
//here dc_heros array act as a single element that's why we get such output.hemce we use concate method to merge two array.


//merge using concat method:
    const all_heros = myFav_heros.concat(dc_heros,);
    console.log(all_heros);//[ 'spiderman', 'ironman', 'thor', 'superman', 'flash', 'batman' ]
    console.log(all_heros[3]);//superman

    const all_Heros = myFav_heros.concat(dc_heros,device);
    console.log(all_Heros);//[ 'spiderman', 'ironman', 'thor', 'superman', 'flash', 'batman',laptop','mobile','computer']
  

// spred method:
    const all_new_heros = [...myFav_heros, ...dc_heros];
    console.log(all_new_heros); //['spiderman','ironman','thor','superman','flash','batman'];


//if we have multiple aaray inside the aaray than we can use flat method to make it a single array.
    //  const another_array = [1,2,3,4,[5,6,7],8,[9,10,11[12,13,14]]];
    // const new_array = another_array.flat(4);
    // console.log(new_array); //[1,2,3,4,5,6,7,8,9,10,11,12,13,14]
      const another_array = [1,2,3,4,5,[6,7],8,[9,10,[11,12]]];
      const new_array = another_array.flat(4);
      console.log(new_array); //[1,2,3,4,5,6,7,8,9,10,11,12]



//If we want to convert a datatypes into array then we use from()...
     console.log(Array.isArray("Ujjwal"));// for check it is array or not //op-false
     console.log(Array.isArray("74578"));//false because it isa number datatypte
//convert into a array using from
     console.log(Array.from("Atul"));//[ 'A', 't', 'u', 'l' ]
     console.log(Array.from("74578"));//[ '7', '4', '5', '7', '8' ]

console.log(Array.from({name :"atul"}));//interesting case


//If we have multiple values and we want them to convert in array then we use of():
     let score1 = 100;
     let score2 = 200;
     let score3 = 300;
     console.log(Array.of(score1,score2,score3));//[100,200,300]