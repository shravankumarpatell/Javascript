// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2) 
// }

// addTwoNumbers   //=> this give the reference of the functions
// addTwoNumbers(4, 7)      //11
// addTwoNumbers(4, "7")    //47
// addTwoNumbers("4", 7)    //47
// addTwoNumbers(4, "a")    //4a
// addTwoNumbers("a", 4)
// addTwoNumbers(4, null) 


function addTwoNumbers(num1, num2){
    return num1 + num2
}
const result = addTwoNumbers(4, 7)
console.log(result);


function loginUserMessage(userName){
    if(userName == undefined){
        console.log("please enter the username")
    }else
    return `${userName} just logged in`
}
console.log(loginUserMessage())                /*in thiis the ouput is: please enter the username 
                                                                        undefined */
console.log(loginUserMessage("hitesh"));      //in this the ouput is: hitesh just logged in



function loginUserMessage2(userName = "SKP"){       //as we have given the default value, userName never goes undefined
    return `${userName} just logged in`
}
console.log(loginUserMessage2())                // SKP just logged in
console.log(loginUserMessage2("jaya"))         // jaya jsut logged in 


function calculateCartPrice(val1, val2, ...number1){      // ... => is the rest operator
    return number1
}
console.log(calculateCartPrice(200, 500, 290, 400, 3434))   //val1 = 200, val2 = 500, number = [290, 400, 3434]
//rest operator is used when we don't have the idea how many agrument the user we give


const newName = {
    name: "skp",
    age: 21
}
function handleObject (anyObject){
    console.log(`${anyObject.name} is the name and age is ${anyObject.age}`)
}
// handleObject(newName)
handleObject({
    name: "Ashok",
    age: 24
})

const arr = [400, 330 , 2423, 2, 34, 234]
function getSecVal(anyArr){
   return anyArr[1]
}
console.log(getSecVal(arr))



/***************  Interesting  **************************/

addOne(5)
function addOne(number) {
    return number + 1;
}
addOne(4)

// addTwo(7)        // commented this bcz it gives the error, we can't call before when a function is decalre to a varible
const addTwo = function(number){
    return number + 2;
}
addTwo(9)