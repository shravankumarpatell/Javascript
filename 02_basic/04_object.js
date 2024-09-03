//const tinderUser =  new Object()   => this the singleton object
const tinderUser = {}     //=> non sigleton object

tinderUser.id = "1234"
tinderUser.name = "skp"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {            //objects in a object
    email: "Skp@gmail.com",
    fullName: {
        userfullName: {
            firstName: "shravan",
            lastName: "Patel"
        }
    }
}

console.log(regularUser.fullName.userfullName.lastName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {9: "a", 4: "c"}
const obj3 = {5: "s", 7: "p"}

// const obj3 = {obj1, obj2}    //so this is not the way to merge the objects
// console.log(obj3)

const obj4 = Object.assign({} /*target object => where all the objs get merged*/, obj1, obj2, obj3 /*this all are source objects*/)
console.log(obj4)              // we will not be using this much

const obj5 = {...obj1, ...obj2, ...obj3}   //=> spread operator // we will be using this majorly to merge the objects and arrays
console.log(obj5)    

//if we create a array of objects  => in this format we get the data from the database
const newArray = [
    {
        name: "Manju",
        age: 28
    },
    {
        name: "Jeetu",
        age: 26
    },
    {
        name: "Ashok",
        age: 24
    },
    {
        name: "Shravan",
        age: 22
    }
]

//this is how we can access the element
console.log(newArray[1].age)

console.log(Object.keys(tinderUser))     //this give me the all keys in object in an array
console.log(Object.values(tinderUser))    //this give me the all values in object in an array
console.log(Object.entries(tinderUser))    //this give the key and values of a element in one array and this all array in one array

console.log(tinderUser.hasOwnProperty('isLoggedIn'))    
console.log(tinderUser.hasOwnProperty('isLogged'))


//object destructuring 
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
// console.log(course.courseInstructor)        //why to write this big course.courseInstructor, use object destructure  

const {courseInstructor} = course    //this is destrcture of object
console.log(courseInstructor)
const {courseInstructor: inst} = course    //this is destrcture of object
console.log(inst)

//even we can destructure the arrays

//object destrcturing in React
const navbar = ({company}) => {       //{company}   => this is destructuring 

}
navbar(company = "hitesh")


//JSON API

// {
//     "name" : "Hitesh",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }

//even API may be in array
// [
//     {},
//     {},
//     {}
// ]