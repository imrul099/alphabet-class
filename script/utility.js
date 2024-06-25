function hideElementId(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementId(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}


function setBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400')
}


function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementValueId(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getRandomAlphabet(){
    //create an alphabet array.
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    //get a random index between 0 to 25;
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}