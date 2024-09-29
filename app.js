let userScore= 0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");



'use strict';
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
    console.log('current class name: ' + className);
});



const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
   const randIdx= Math.floor(Math.random()*3);
   return options[randIdx];
};

const drawGame=()=>{
        msg.innerText="Game drawn.Play again.";
        msg.style.backgroundColor="blueviolet";
};

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats computer's ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lose :( Computer's ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    console.log("user choice",userChoice);
    const compChoice=genCompChoice();

    if(userChoice===compChoice){
        //draw condition
        drawGame()
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissor, paper
            userWin=compChoice==="paper" ? false: true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors"? false: true;
        }
        else{
           userWin= compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice)
    }
};


choices.forEach((choice)=> {
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});