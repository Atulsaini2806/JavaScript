const coding = ["js", "ruby", "java", "python", "cpp"]


const values = coding.forEach( (item) => {
    //console.log(item);
    return item
} )

 console.log(values);//undefined
// for each loop does not return anything.it simply iterate over the array.
//that's we use the filter method.


//filter method:- It is also a callback function that is used to filter the array based on a condition.
// it is a higher-order function that takes a callback function as an argument and applies it to each element in the array.

//Example 1:-
// ex 1:-
const myArray = [1,2,3,4,5,6,7,8,9,10]
const newArray = myArray.filter( (num) => num>4 );
// const newArray = myArray.filter((num)=>{
//     return num>4; //here return is necessary
// })//if we open the scope then it is necssary that we use return keyword.otherwise we do not need return keyword.
console.log(newArray);//5,6,7,8,9,10

//Example 2:-
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBook = books.filter((bk)=>{ 
       return bk.genre==="History"});
  userBook = books.filter((bk)=>{
    return bk.publish>1995 && bk.genre==="Science";
  })
  console.log(userBook);
  

  

