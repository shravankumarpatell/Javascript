// for-of loop => it access the element when iterate

const arr = [1,2,3,4,5]

for (const element of arr) {
    console.log(element)
}

//Maps

const map = new Map();
map.set('ind', "india")
map.set('uk', "untied kingdom")
map.set('us', "united states")

console.log(map)

// for (const element of map) {
//     console.log(element)
// }

for (const [key, value] of map) {
    console.log("key is:",key, "and value is:",value)    
}
//for-of loop are not iterable for objects



//for-in loop => it acess the keys when iterate

const myobject = {
    js: "javascript",
    "cpp": "c++",
    java: "java"
}

for (const key in myobject) {
  console.log(`${key} shortcut for ${myobject[key]}`)
}

const array = ["new", "array", "here"]

for (const key in array) {
   console.log(key)
}  
//can see that it prints the indexs of an array
//can't iterate the map in for-in loop


//for-each loop => mostly used for arrays

const arrays = ["Ainne", "hughie", "Moher's Milk", "Homelander"]

arrays.forEach( function (element) {
    console.log(element)
    //or any other thing to do with element
})

//or using arrow function

arrays.forEach( (element) => {
    console.log(element)
    //or any other thing to do with element
})

// or use the function declare

function printme(ele){
    console.log(ele)
}

arrays.forEach(printme)    //NOTE: Refernce of the function not call function

arrays.forEach((item, index, arr) => {
    console.log(item, index, arr)
})


//major the data from the database is in the form of array contains objets.
const data = [
    {
        lanName: "Javascript",
        lanfile: "js"
    },
    {
        lanName: "Java",
        lanfile: "java"
    },
    {
        lanName: "c++",
        lanfile: "cpp"
    }
]


data.forEach( (obj) => {
    console.log(`${obj.lanName} is the language Name and ${obj.lanfile} is the file type.`)
})