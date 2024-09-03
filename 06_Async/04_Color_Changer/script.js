const clock = document.querySelector('#clock')
// const clock = document.getElementById('clock')

setInterval(function (){
    let date = new Date();
   // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);


const randomColor = function(){const hex = "0123456789ABCDEF";
let color ="#";

for(let i=0; i<6; i++){
color += hex[Math.floor(Math.random()*16)];
}
return color
}
let intervalId;
const startChangingColor = function(){
    if(!intervalId)       //this is just for better code
    intervalId = setInterval(function(){
        document.body.style.backgroundColor = randomColor();
    }, 1000)
}
const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;    // //this is just for better code
}

document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)