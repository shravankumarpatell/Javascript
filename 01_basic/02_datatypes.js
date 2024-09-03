"use strict"  // treat all JS code as newer version
// alert( 3 + 3)  // we are using nodejs, not browser


//Primitive: (call by value)
/*Type of datatype
    number => 2 to power 53
    BigInt
    string
    boolean
    null => standalone value
    undefined => value not assigned
    symbol => used to unqiueness
*/
let name = "skp"
let age = 21
let isLogged = false
console.log(typeof 123)       // typeof give the datatype
console.log(typeof "hello")
console.log(typeof null)       //object
console.log(typeof undefined)  //undefined



//Non-Primitive (Reference type)
/*
    Array
    Objects
    Functions
*/
const heros = ["shaktiman", "nagraj", "doga"];
let myObj = {
    name: "skp",
    age: 22
}
const myFunction = function(){
    console.log("hello SKP")
}

console.log(typeof myObj)      //object
console.log(typeof heros)       //object
console.log(typeof myFunction)  //function


/* In JS also Memory working is same as Java (stack and heap and their working) */