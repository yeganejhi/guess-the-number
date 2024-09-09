let guessRound = 1; 
const randomIntegerInRange = (min, max) =>{
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
let random = randomIntegerInRange(1, 100 );
console.log(random);
const validateNumber = (value)=>{
    if(isNaN(value)){
        return "please enter a valid number";
    }else if(+value < 1 || +value > 100){
        return "please enter a number between 1 to 100";
    }
};

const checkGuess = (guess)=>{
    guessRound++;
    console.log(guess);
    if(guess===random){
        console.log("you guessed correctly");
    }else if(guess < random){
        console.log("too low! try again");
        play();
    }else {
        console.log("too high! try again");
        play();
    }
}
const play =()=>{
    const userInput = prompt("enter a number between 1 to 100");
    if(userInput===null){
        return;
    }
    if(guessRound>=10){
        console.log("game over !");
        return;
    }
    const validation = validateNumber(userInput);
    if(validation){
        console.log(validation);
        return play();
    }
    checkGuess(+userInput);
    
}
play();


