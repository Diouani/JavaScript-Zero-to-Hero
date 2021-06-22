'use strict';
function random(){

    return Math.floor(Math.random()*20)
} 


let numberGuess =  document.querySelector('.number').textContent = random() ;



let highscore = document.querySelector('.highscore');
let score = Number(document.querySelector('.score').textContent)
let count = 0;
let message = document.querySelector('.message')
document.querySelector('.check').addEventListener("click",(e)=>{
    
    let input = document.querySelector('.guess').value;
    e.preventDefault();
    
   
if(numberGuess < input && score >= 0 ){
    message.textContent = "n9ess chwiya";
    score--
    document.querySelector('.score').textContent = score
    
}else if(numberGuess > input  && score  >= 0){
    message.textContent =  "Zid chwiya";
    score--
    document.querySelector('.score').textContent = score
  
}else if(input == numberGuess){
    message.textContent =  "MEBROUK SIR L3EB LOTO";
    document.querySelector('.guess').value = '';
    highscore.textContent = score;
    document.querySelector('.score').textContent= 20;
    numberGuess =  document.querySelector('.number').textContent = random()
    setTimeout(()=>{
        message.textContent= "Start guessing..."
    },1000)
}




    
    
        
    



});

document.querySelector('.again').textContent;




