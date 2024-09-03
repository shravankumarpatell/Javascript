// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 <= 1)
// console.log(2 == 1)
// console.log(2 != 1)

// console.log("2" > 1)    true
// console.log("02" > 1)    true

//console.log(null > 0)       false
// console.log(null == 0)     false
// console.log(null >=0)      true
/* The reason is that an eqaulity check == and comparisons > < >= <= work differently.
   Comparisons convert null to number, treating it as 0.
   that's why (3) null>=0 is true and (1) null>0 is false */

//IMPORTANT NOTE: Always compare same datatypes, don't make confusion for unpredictable comparisons


//=== -> Strect check

console.log("2" === 2)
