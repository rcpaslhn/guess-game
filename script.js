'use strict';

const p = document.querySelector(".message")
const div=document.querySelector(".number")
const body= document.querySelector("body")
const input_guess=document.querySelector(".guess")
const span=document.querySelector(".score")
const btn_check=document.querySelector(".check")
const again=document.querySelector(".again")
let secret_number=Math.trunc(Math.random()*20)+1
const hgscr=document.querySelector(".highscore")
let score=20
let highscore=0

btn_check.addEventListener("click", function(){
  const guess=Number(input_guess.value)
if(!guess){
    p.textContent="😔 No Number"
}
else if(secret_number===guess){
        p.textContent=" 😀 Correct Number"
        div.textContent=secret_number
        body.style.backgroundColor="#60b347"
        div.style.width="30rem"
        if(score>highscore){
            highscore=score
            hgscr.textContent=highscore

        }
      

}else if(guess>secret_number){
    if(score >  1){
        p.textContent="Too High !"
        score--
        span.textContent=score
        
       
    }else{
        p.textContent="😭 You Lost The Game"
        span.textContent=0
    }

   
}
else if(guess<secret_number){
    if(score>1){
        p.textContent="Too Low !"
        score--
        span.textContent=score
    }  else{
        p.textContent="😭 You Lost The Game"
        span.textContent=0
    }

}


 })

 again.addEventListener("click",function(){
    score=20
    span.textContent=score
    secret_number=Math.trunc(Math.random()*20)+1
    body.style.backgroundColor="#222"
    p.textContent="Start guessing"
    input_guess.value=""
    div.textContent="?"
    div.style.width="15rem"

 })








