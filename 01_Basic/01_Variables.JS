const accountID = 145264;
let accountEmail = "jayeshbhai@gmail.com"
var accountPassword = 4518752
accountCity = "Mumbai" // this type of declaration is not recommened


// accountID =  15  cannot change const values once declare

/*
    Always use Let or const keyword for declaring variables as there is issue with var 
    in block scope s

*/



console.log(" This is a Constant Account ID: " +accountID);

accountEmail = "Johny@gmail.com"
accountCity = "Chennai"
accountPassword = 145926

console.table([accountID,accountEmail,accountPassword,accountCity])


