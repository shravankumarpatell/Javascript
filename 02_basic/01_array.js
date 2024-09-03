const myArr = [4, 1, 2, 9, 3]
const myHeros = ["stark", "hulk", "caption"]
const myArr2 = [0, 3, "SKP"]
const myArr3 = new Array(1,2,3,4)
console.log(myArr3)
console.log(myArr2)
console.log(myArr2[2])  //SKP
console.log(myArr2[3])  //undefined

//when u make a copy of a array, copy created through shallow copy  

// Array methods

myArr.push(47)    // adds the element to the last
console.log(myArr)
myArr.pop()    //removes the last element 
console.log(myArr)

myArr.unshift(4)    //this adds the element to the start by shifting the all elements 
console.log(myArr)

myArr.shift()      // removes the starting element 
console.log(myArr)

console.log(myArr.includes(9))  //true
console.log(myArr.indexOf(9))   // gives the index of an element if not returns -1

const newArr = myArr.join()
console.log(myArr)
console.log(newArr)      // converts the whole array into the string with comma seperated
console.log(typeof newArr)

//slice , splice

console.log("A", myArr)

const myn1 = myArr.slice(1,3)    //just returns the subarray
console.log("B", myArr)
console.log(myn1)

const myn2 = myArr.splice(1,3)   //deletes the subarray and returns the subarray
console.log("C", myArr)
console.log(myn2)