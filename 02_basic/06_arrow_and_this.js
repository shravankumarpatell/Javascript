const user = {
    name: "SKP",
    age: 21,
    welcomeMessage: function(){
        console.log(`Welcome, ${this.name}`)
        console.log(this)              //this gives the current context ki bat kar ta he
    }
}


user.welcomeMessage()
user.name = "uncle"
user.welcomeMessage()
console.log(this)          //here it is the empty object but when this line insecpted in the brwoser, there is the window objet.

function chai(){
    let username = "SKP"
    // console.log(this.username)    //this is used for objects only, no sense of "this" keyword in the function
    console.log(this)                //can see that there is empty object for the line 13 but here the it's showing something(will learn about all this later)
}
chai()

const chaii = () => {
    let username = "tell"
    // console.log(this.username)  => undefined
    console.log(this)       // can see that for this fuction "this" keyword is giving the empty object
}
chaii()


// const addOne = function (nums, nums1) {
//     return nums + nums1
// }
const addOne = (nums, nums1) => (nums + nums1)    //arrow
console.log(addOne(4,7))

const addTwo = (nums, nums1) => ({username: "SKP"})
console.log(addTwo(4,7))