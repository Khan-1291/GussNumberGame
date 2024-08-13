'use strict';
let guessNumber = Math.floor(Math.random() * 10) + 1; // Generates a random number between 1 and 10

let score = 5;
let MyScore = 0;



function gussNumber() {
    let input = parseInt(document.getElementById("userInput").value); // Gets the input value and converts it to a number

    if (!input) {
        alert("Please put some Number")
    }
    else if (input === guessNumber) {

        document.getElementById("result").innerHTML = `👩‍💻        You Guess that :- ${guessNumber} 🎉` ;
        document.getElementById("score").innerHTML = ` 👩‍💻        Remaining Guess attempts:- ${score} 😑` ;
        MyScore += 1;
        document.getElementById("highScore").innerHTML = ` 👩‍💻       Your Score is:- ${MyScore} 💓`;
        guessNumber = Math.floor(Math.random() * 10) + 1;
        document.getElementById("userInput").value = "";




    } else if (input !== guessNumber) {
        if (score > 1) {
            alert("The correct number was " + guessNumber);
            document.getElementById("result").innerHTML = (`👩‍💻  The Number was : ${guessNumber} 😜 `);
            score--;
            document.getElementById("score").innerHTML = (`👩‍💻  Remaining Guss attepmts :- ${score} 😑 `);

            document.getElementById("highScore").textContent = (`👩‍💻  Your Score is : ${MyScore} 💔`);
        guessNumber = Math.floor(Math.random() * 10) + 1;
            
            document.getElementById("useScoreButton").addEventListener("click",function () {
                   score +=0;
                
                    score += MyScore; // Add the score to guess attempts
                    MyScore=0;
                    document.getElementById("score").innerHTML = `Remaining Guess attempts: ${score}`;
                    document.getElementById("highScore").innerHTML = `Your Score is: ${MyScore}`;
            document.getElementById("userInput").value = "";
                
            })
            document.getElementById("userInput").value = "";
                
        }
    
            

        else {
            alert("You lost the GAME");
            document.getElementById("score").innerHTML = (`👩‍💻  Remaining Guss attepmts :- ${0} 😪 `);
            if (MyScore > 0) {
                alert(`😀😀😀 Vary Well Your Score is ${MyScore} `)

                document.getElementById("userInput").value="";
                

            }
            else {
                alert(" 😪😪 Better Luck Try Again")
    location.reload();

            }

        }


    }
}
document.getElementById("relod").addEventListener("click", function () {
    
    
})

 
    
   
//document.getElementById("userInput").addEventListener("input", function () {
// document.getElementById("result").value = "";
//});