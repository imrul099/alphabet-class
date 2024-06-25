// function play(){
//     //step-1: hide the home screen.to hide the screen add the class hidden to the home section;
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     //show the playground.........
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }


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