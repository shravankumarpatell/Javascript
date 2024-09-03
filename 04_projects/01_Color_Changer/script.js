const clock = document.querySelector('#clock')
// const clock = document.getElementById('clock')

setInterval(function (){
    let date = new Date();
   // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);


const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach( (button) => {
    // console.log(button);
    button.addEventListener('click', function(eventObj){
        // console.log(eventObj)
        console.log(eventObj.target)
        if(eventObj.target.id === "grey"){
           body.style.backgroundColor = eventObj.target.id; 
        }
        if(eventObj.target.id === "rebeccapurple"){
           body.style.backgroundColor = eventObj.target.id; 
        }
        if(eventObj.target.id === "blue"){
           body.style.backgroundColor = eventObj.target.id; 
        }
        if(eventObj.target.id === "orange"){
           body.style.backgroundColor = eventObj.target.id; 
        }
    })
})