//other datatype to number coversion
let score = "33abc"   // or any string like "skp"
let valueInNumber = Number(score)   //this is used to typecast in number
console.log(typeof valueInNumber)   
console.log(valueInNumber)          //NaN //bcz it is stored as NaN(Not a Number) and datatype of NaN is number
//if scope = 
//"33" => 33
//true => 1; false =>0
//null => 0
//undefined => NaN
//"skp" => NaN


//Other datatype to boolean conversion
let islog = 1   // or any value greater than 0
let booleanIsLog = Boolean(islog)
console.log(booleanIsLog)  // true
//if isLog = 
//0 => false
//"skp" => true
//"" => false
//null => false
//undefined => false


//Other datatype to string conversion
let s = 47  // "47"
let str = String(s)
console.log(str)
//if s = 
//null => "null"
//undefined => "undefined"
//true => true; false => "false"


//*********************  Operations  ******************************
//Arthemetic Operations (+, -, *, /, %)

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")
//After string every thing is convert to string