const name = "skp"
const repoCount = 50
console.log(name)
console.log(typeof name) // here the type string

// console.log(name + repoCount + " Value"); 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// we will use the second method and not the first one.

//another way to declare a string 
const Name = new String("Shravan")
console.log(Name)
console.log(typeof Name)   //and here the type is object. This is stored as key-value.

console.log(Name[0])   
console.log(Name.__proto__)
console.log(Name.length)     
console.log(Name.toUpperCase())
console.log(Name.charAt(2))
console.log(Name.at(-6));
console.log(Name.charCodeAt(3));

console.log(Name.indexOf("r"))

const newName = Name.substring(0,4)    //for -ve value are ignored, start from 0 in substring
console.log(newName) 
const otherName = Name.slice (-6, 4)     // -6 equivalent to start begining from 2 element
console.log(otherName)
 
 const newstring = "    SKP   "
 console.log(newstring)
 console.log(newstring.trim())        // remove the whitescape

 const url = "https:/hitesh.com/hitesh%20chaoudhary"
 console.log(url.replace('%20', '-'))      // replace the existing substring/string
 
 console.log(url.includes('hitesh'))       //check a substring in a string

 const newname = "shravan-kumar-patel"
 console.log(newname.split('-'));

//  you can follow link given below and learn methods of string
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods

//or use can insept in the browser and can see the all prototypes of string 