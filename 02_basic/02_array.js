const mc_heros = ["IronMan", "hulk", "Thor"]
const dc_heros = ["flash", "batman", "superMan"]
const BC_heros = ["Azad", "simmi", "SKP"]
// mc_heros.push(dc_heros)    // don;t use for merge of two arrays
console.log(mc_heros)   //you can see the output that ther is array in an array
// this is because the array is a object and it can take the any datatype (in java we say generic class)
// console.log(mc_heros[3][2])       

const newArr = mc_heros.concat(dc_heros)   //can merge the two arrays only
console.log(newArr)

const newArr1 = [...mc_heros, ...dc_heros, ...BC_heros]   // Know as "Spread operator"can merge the any number of arrays
console.log(newArr1)

const another_array = [1,2, 3, [4, 5, 6], 7, [6, 7, [4, 5, 8, [ 9,0]]]]   // Arrays in an array
const real_another_array = another_array.flat(/* depth */ Infinity)   // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array)

console.log(Array.isArray("SKP"))
console.log(Array.from("SKP"))        //Creates an array from an iterable object.
console.log(Array.from({name : "SKP"}))  // interesting

let score1 = 100;
let score2 = 200;
let score3 = 400;
console.log(Array.of(score1, score2, score3))   //Returns a new array from a set of elements.