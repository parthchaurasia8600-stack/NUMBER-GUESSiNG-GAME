let maxNumber = 100;

let secretNumber = randomNumber();

let attempts = 0;

let lives = 10;

function randomNumber(){

    return Math.floor(Math.random()*maxNumber)+1;

}

function checkGuess(){
    let guessInput=document.getElementById("guessInput");

    let guess = Number(guessInput.value);

    let message = document.getElementById("message");

    if(isNaN(guess) || guess<1 || guess>maxNumber){

        message.style.color="red";

        message.innerHTML=
        `Enter a number between 1 and ${maxNumber}`;

        return;

    }

    attempts++;

    lives--;

    document.getElementById("attempts").innerHTML=attempts;

    document.getElementById("lives").innerHTML=lives;

    if(guess===secretNumber){

        message.style.color="orange";

        message.innerHTML=
        `🎉 Congratulations!<br>You guessed ${secretNumber}`;

        confetti({

            particleCount:250,

            spread:150,

            origin:{y:0.6}

        });

        disableGame();

    }

    else if(guess<secretNumber){

        message.style.color="darkviolet";

        message.innerHTML=`📈Number is HiGHER then ${guess}`;

    }

    else{

        message.style.color="brown";

        message.innerHTML= `📉Number is LoWER then ${guess}`;
        
    }

    if(lives===0){

        message.style.color="red";

        message.innerHTML=
        `Game Over! You Lost all Lives 💀 <br>The number was ${secretNumber}`;

        disableGame();

    }

    guessInput.value="";
    guessInput.focus();

}

function disableGame(){

    document.getElementById("guessInput").disabled=true;

}

function restartGame(){

    attempts=0;

    lives=10;

    secretNumber=randomNumber();

    document.getElementById("attempts").innerHTML=0;

    document.getElementById("lives").innerHTML=10;

    document.getElementById("message").innerHTML="";

    document.getElementById("guessInput").value="";

    document.getElementById("guessInput").disabled=false;

}

function changeDifficulty(){

    maxNumber= Number(document.getElementById("difficulty").value);

    document.getElementById("rangeText").innerHTML=`Guess a number between <b>1 and ${maxNumber}</b>`;

    restartGame();

}

function toggleTheme(){

    document.body.classList.toggle("dark");

    let btn=document.getElementById("themeBtn");

    if(document.body.classList.contains("dark")){

        btn.innerHTML="☀️ LiGHT MoDE";

    }else{

        btn.innerHTML="🌙 DARK MoDE";

    }

}

document.getElementById("guessInput").addEventListener("keypress",function(e){

    if(e.key==="Enter"){

        checkGuess();

    }

});