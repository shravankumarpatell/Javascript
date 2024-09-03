const clock = document.querySelector('#clock')
// const clock = document.getElementById('clock')

setInterval(function (){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);


const form = document.querySelector('form')
// const height = parseInt(document.querySelector('#height').value)
//this usecase will give you empty 

form.addEventListener('submit', function(eventObj){
    eventObj.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `please give a valid height ${height}`
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `please give a valid height ${weight}`
    }else {
        const bmi = (weight/((height*height)/10000)).toFixed(1)
        //show result
        results.innerHTML = `<span>BMI INDEX: ${bmi}</span>`
        if(bmi < 18.6){
            results.innerHTML = `<span>BMI INDEX: ${bmi}, Your under Weight</span>`
        }else if(bmi >= 18.6 && bmi <= 24.9){
           results.innerHTML = `<span>BMI INDEX: ${bmi}, Your Weight is Normal</span>`
        }else {
         results.innerHTML = `<span>BMI INDEX: ${bmi}, Your Over Weight</span>`
        }
    }
})