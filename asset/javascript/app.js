'use strict';





function pickRandomword (){
    const wordBank = ['program', 'hello' , 'world'];
    const index = Math.floor(Math.random() * wordBank.length)  ;
    const chosenword = wordBank[index];
    return chosenword;
}

const chosenwod = pickRandomword();
alert(chosenwod)

const chosenWordLength = chosenwod.length;




alert (chosenWordLength);