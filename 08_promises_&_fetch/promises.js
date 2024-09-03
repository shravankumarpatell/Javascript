const promiseOne = new Promise((resolve, reject) => {
    //Do an async task 
    //DB calls, cryptography, network
    setTimeout(() => {
        console.log('Async task is complete')
        resolve()
}, 1000)
})
promiseOne.then(()=>{
    console.log('Promise consumed')
})

//same 
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task 2');
        resolve();
    }, 2000);
}).then(() => {
    console.log('Asunc 2 resolved')
})


const promiseThree = new Promise((resolve, reject)=> {
    setTimeout(() => {
        console.log('Async 3');
        resolve({username: 'skp', age: 21, mail: "22uec127@lnmiit.ac.in"})
    }, 3000);
})
promiseThree.then((user) => {
    console.log(user)
})


const promiseFour = new Promise((resolve, reject)=> {
    setTimeout(() => {
        console.log('Async 4');
       let error = false;
       if(!error){
        resolve({username: 'skp', age: 21, mail: "22uec127@lnmiit.ac.in"})
       }else {
        reject('Error: something went wrong')
       }
    }, 4000);
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username)
}).catch((error) => {
    console.log(error)
}).finally(() => console.log("The promise either resolved or rejected"))



const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async 5');
       let error = true;
       if(!error){
        resolve({username: 'uncle', age: 40, mail: "22uec051@lnmiit.ac.in"})
       }else {
        reject('Error: uncle went wrong')
       }
    }, 5000);
})
async function consumePromiseFive() {
    try {
        const response = await promise5
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()



async function getAllUsers(params) {
    try {
        const response = await fetch(' https://api.github.com/users/shravankumarpatell ')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("E:", error)
    }
}
getAllUsers()



fetch(' https://api.github.com/users/shravankumarpatell ')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))