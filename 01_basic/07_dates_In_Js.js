let myDate = new Date();  // chotti
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toDateString())
console.log(myDate.toTimeString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())

// let myCreatedDate = new Date(2023, 0, 23)    //YY, MM, DD  -> MM starts from 0
// let myCreatedDate = new Date(2023, 0, 23, 5, 4, 45, 99)    // YY, MM, DD, Hours, min, sec, ms
// let myCreatedDate = new Date("2023-01-14")    //YY, MM, DD
let myCreatedDate = new Date("01-14-2023")      //MM, DD, YY
console.log(myCreatedDate.toLocaleDateString())

let myTimeStamp = Date.now()   // give the timestamp of now in ms
console.log(myTimeStamp)          
console.log(myCreatedDate.getTime())  //give the stamp of created time in ms

console.log(Math.floor(Date.now()/1000))    //Timestamp in sec


let newDate = new Date()
console.log(newDate.getDate())
console.log(newDate.getMonth()+1)     //MM -> starts from the 0, so +1

//by this we can customize the thing what we want to print 
newDate.toLocaleString('default', {
    weekday: "long", 
})