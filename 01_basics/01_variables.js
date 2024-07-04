const accountId = 1235
let accountEmail = "123@gmail.com"
var accountPswd = "12345"
accountCity = "ASD"
let accountState;


// accountId = 2    not allowed

console.log(accountId);
accountEmail = "1@gmail.com"
accountPswd = "12"
accountCity = "s"

console.table([accountCity, accountPswd, accountEmail, accountId,accountState])

/* 
prefer not to use var
because of issue in block scope and functional scope

*/