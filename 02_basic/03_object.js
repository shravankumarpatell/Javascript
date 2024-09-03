//singleton  -> when the object created with the constractor it is always the singleton
//Object.create


// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name": "SKP",
    age: 18,
    mySym: "myKey1",              //this is string
    [mySym]: "myKey1",            //this is Symbol, which is refering to the above created symbol
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "saturday"] 
}

console.log(JsUser.email)      //majorly we use this this . to access the elements 
console.log(JsUser["email"])   //in some of the cases we have to use this [] to access the elements
// console.log(JsUser.full name)       // this way we can't access the object element full name
console.log(JsUser["full name"])  //we have to access the full name like this
console.log(JsUser.mySym)
console.log(JsUser[mySym])    //and this way the symbol element of an object is accessed

//override any element 
JsUser.email = "SKP@gmail.com"
console.log(JsUser.email)

//if u don't want to change/override the object, use the freeze 
// Object.freeze(JsUser)
// JsUser.email = "SKP@chatgpt.com"
// console.log(JsUser)       // u may see that there is no change in the email element 

JsUser.newName = "azad"        //u can add the new element like this
console.log(JsUser.newName)  

JsUser.greeting = function(){
    console.log("hello SKP")
}
console.log(JsUser.greeting)      // will study later
console.log(JsUser.greeting())    //with the hello skp, there is undefined, we will study about it later


JsUser.greetingTwo = function(){
    console.log(`hello user, ${this.name}`)
}
console.log(JsUser.greetingTwo())    