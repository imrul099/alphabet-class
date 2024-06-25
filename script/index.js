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
        removeBackgroundById(expectedAlphabet)
        contineGame();
    }else{
        console.log('you missed, you lost a life')
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