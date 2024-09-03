// const user = {
//     username : "hitesh",
//     logincount: 8,
//     signedIn: true, 

//     getUserDttails : function(){
//         console.log("got user dtails from database")
//     }
// }

// console.log(user.username);
// console.log(user.getUserDttails())


function User (username, logincount, isLoggedIn){
    this.username = username;
    this.logincount = logincount;
    this.isLoggedIn = isLoggedIn;

    this.gretting = function(){
        console.log(`Welcome ${this.username}`);
    }
    // return this;
}

// const userOne  = User("skp", 12, true);
// const userTwo = User("kk", 21,true);
// console.log(userOne)
//when using this line of code the return statement should be used 


const userOne = new User("skp", 12, true)
const userTwo = new User("kk", 33, true)
console.log(userOne.constructor)
// console.log(userTwo)


//instanceof