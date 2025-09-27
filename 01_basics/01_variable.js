//In js const, let , var are used to declare a variable but they have different scopes rules and behavooyr.
const accountId = 11432536
let accountEmail = "atul@miet.com"
var accountPassward = "2132"
accountCity = "Delhi" /*not a good choice*/

// accountId = 12345// Not Allow

console.log(accountId);
console.log(accountEmail);
accountEmail = "atul@gmail.com"
accountPssward = "6789"
accountCity = "Noida"

/*Prefer not yo use var
because of issue in block scope and functional scope
*/
console.table([accountId , accountEmail, accountPassward ,accountCity]);

const name = "aarjun"
console.log(name); 

//name = "Atul" // not allow