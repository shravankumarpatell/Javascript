const accountId = 4752
let accountEmail = "SKP@gmail.com"  
var accountPassword = "6969"  
/*Prefer not ot use var 
  because of issue in block scope and functional scope
*/
accountCity = "Jaipur"
let state  // Unassigned variables are set to undefined

// accountId = 2   Can't change the value of const variable
// console.log(accountId)

accountEmail = "patel@gmail.com"
accountPassword = 4752
accountCity = "Bijapur"

console.table([accountEmail, accountPassword, accountCity, state])