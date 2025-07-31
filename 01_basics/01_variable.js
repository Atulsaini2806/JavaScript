const accountId = 11432536
let accountEmail = "atul@miet.com"
var accountPassward = "2132"
accountCity = "Delhi" /*not a good choice*/

// accountId = 12345// Not Allow

console.log(accountId);
accountEmail = "atul@gmail.com"
accountPssward = "6789"
accountCity = "Noida"

/*Prefer not yo use var
because of issue in block scope and functional scope
*/
console.table([accountId , accountEmail, accountPassward ,accountCity]);

