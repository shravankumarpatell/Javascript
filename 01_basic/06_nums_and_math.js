const score = 400
console.log(score)

const balance = new Number(100.4769)
console.log(balance)

console.log(balance.toString())
console.log(typeof balance.toString())
console.log(balance.toFixed(2))

const otherNumber = 1123.8966
console.log(otherNumber.toPrecision(6))
console.log(otherNumber.toPrecision(5))
console.log(otherNumber.toPrecision(4))
console.log(otherNumber.toPrecision(3))
console.log(otherNumber.toPrecision(2))

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))

//there are more methods u can learn.


//***************************  MATH  *********************************/

console.log(Math)
console.log(Math.abs(-4))     //4
console.log(Math.round(4.6))   //5
console.log(Math.round(4.3))   //4
console.log(Math.ceil(4.3))    //5
console.log(Math.floor(4.9))   //4

console.log(Math.min(4,6,3,7,7,5,42,5))   //3
console.log(Math.max(4,6,3,7,7,5,42,5))   //42

console.log(Math.random())  // ramdom value between 0-1
console.log(Math.floor(Math.random()*10) + 1)  // to get number from 1 to 10

const min = 10;
const max =20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min)    //to get numbers from 10 to 20