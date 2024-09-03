const coding = ["js", "ruby", "ava", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     // console . log(item) ;
//     return item
// })
// console.log(values) ;

//for each don't return any value.

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNum = myNum.filter( (num) => num>4)
// const newNum = myNum.filter( (num) => num+10)
console.log(newNum)

let neww = myNum.map( (num) => num+10)
console.log(neww)



//chaining
neww = myNum.map((num) => num*10)
            .map( (num) => num+10 )
            .filter( (nums) => nums >= 50)
console.log(neww)