 // Object declaration by constructors :
//Singleton Objects creation:
       const instaUser = new Object();  // singleton object
        console.log(instaUser);//{}
//non singleton object crration:
        const instaUser5 ={}//non singleton object
          console.log(instaUser5);//{}
        

        const instaUser1 = {};
          instaUser1.id = "123abc";
          instaUser1.name = 'sammy';
          instaUser1.isLoggedIn = false;
          console.log(instaUser1);

// Methods in object:
      console.log(Object.keys(instaUser1)); //return keys of object(id,name,isLoggedIn)
      console.log(Object.values(instaUser1));//return values of object's keys("123abc",'abc',false)
      console.log(Object.entries(instaUser1));//return arrays of key and values([ ['id','123abc'],['name','sammy'],['isLoggedIn',false] ])
      console.log(instaUser1.hasOwnProperty('id'));// check this property belong to obj or not//true


    //     const instaUser2={
    //         id : "123abc",
    //         name :'sammy',
    //         isLoggedIn :false,
    //    }
    //       console.log(instaUser2);


//if we want to declear the object imside the object(object chaning):
     const regularUser ={
        email :"some@gmail.com",
        fullname :{
            userfullname :{
                firstname : "Atul",
                lastname : "Saini"
            }
        }
     }
     console.log(regularUser.fullname.userfullname);//similar we can access all obeject inside the main object.


//if we want to merge two or more object together:
        const User1 = {1: "a",2: "b"};
        const User2 = { 3: "c",4: "d"};
        const User3 = {5: "e",6: "f"};

        //const obj = {object1,object2}
           //const obj = Object.assign( {},User1,User2,User3)//here {} use as a target and other as a source code.
          // using spread method:
           const obj = {...User1,...User2,...User3}//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
           console.log(obj);
        


//if we wand to declare obect of an aaray or object inside the aaray :
     const myArray = [
        {
            id : "123",
            email : "some@.com"
        },
         {
            id : "456",
            email : "hello@.com"
        },
         {
            id : "789",
            email : "bye@.com"
        }
     ] 
     console.log(myArray);
     
     


//+++++++++++++++ De-structuring of Objects ++++++++++++

      const course={
      name:"JavaScript",
      price:1000,
    courseInstructor: "chai aur code",   
  };
    //console.log(course.courseInstructor);
// instead of this we use :--

      const {courseInstructor} = course; // this is called object's destructuring
      console.log(courseInstructor);//chai aur code
//or
      const {courseInstructor : instructor} = course;
      console.log(instructor);//chai aur code
      