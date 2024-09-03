//IIFE => Immidiately Invoked Function Expresion
//this is used for the function to be excuted at the begining of the program start


// (function chai() {
//     console.log("DB connected")
// })()

// ( () => {
//     console.log("DB connected two")
// })()


//once uncomment the the above code and see that it throw an error just for ";", so here the ; is important

(function chai() {
    console.log("DB connected")
})();

( () => {
    console.log("DB connected two")
})();

(function chai(name) {
    console.log(`DB connected ${name}`)
})("with skp");

( (name) => {
    console.log(`DB connected two ${name}`)
})("netflix");

