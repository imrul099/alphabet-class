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

    if(playerPressed === 'Escape'){
        gameOver();
    }

    //get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(expectedAlphabet);

    //cheak mathced or not
    if(playerPressed === expectedAlphabet){
        console.log('you get a point');

        const getValue = getTextElementValueById('current-score');
        
        //2. increase the score by 1
        const newScore = getValue + 1;
        setTextElementValueId('current-score', newScore);


        //-----------------------------------
        //update score:
        //1. get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        //2. increase the score by 1
        // const newScore = currentScore + 1;
        // currentScoreElement.innerText = newScore;
        //3. show the updated score


        //start a new round
        removeBackgroundById(expectedAlphabet)
        contineGame();
    }else{
        console.log('you missed, you lost a life');
        const getLife = getTextElementValueById('current-life');

        const remainLife = getLife - 1;
        setTextElementValueId('current-life', remainLife);

        if(remainLife === 0){
            gameOver()
        }    

        //_--------------------------------------------
        //setp-1: get the current life number;
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        //step-2: reduce the life count:
        // const remainingLife = currentLife - 1;
        // currentLifeElement.innerText = remainingLife;
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
    //hide everything show only the playground..
    hideElementId('home-screen');
    hideElementId('score')
    showElementId('play-ground');

    //reset score and life
    setTextElementValueId('current-life', 5);
    setTextElementValueId('current-score', 0)
    removeBackgroundById('bg-orange-400');
    contineGame();
}

function gameOver(){
    hideElementId('play-ground');
    showElementId('score');

    //update final score
    //1. get the final score.
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueId('game-score', lastScore);

}