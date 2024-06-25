// function play(){
//     //step-1: hide the home screen.to hide the screen add the class hidden to the home section;
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     //show the playground.........
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }

function buttonPressed(event){
    const playerPressed = event.key;
    console.log(playerPressed);

    //get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(expectedAlphabet);

    //cheak mathced or not
    if(playerPressed === expectedAlphabet){
        console.log('you get a point');
        //update score:
        //1. get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        //2. increase the score by 1
        const newScore = currentScore + 1;
        currentScoreElement.innerText = newScore;
        //3. show the updated score


        //start a new round
        removeBackgroundById(expectedAlphabet)
        contineGame();
    }else{
        console.log('you missed, you lost a life');
        //setp-1: get the current life number;
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        //step-2: reduce the life count:
        const remainingLife = currentLife - 1;
        currentLifeElement.innerText = remainingLife;
        //step-3: display the updated life count;
        

    }
}

//capture keyboard key press
document.addEventListener('keyup', buttonPressed)



function contineGame(){
    const alphabet = getRandomAlphabet()


    //set randomly generated alphabet to the screen (show it)
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    //set background color;
    setBackgroundColor(alphabet)
}


function play(){
    hideElementId('home-screen');
    showElementId('play-ground');
    contineGame();
}