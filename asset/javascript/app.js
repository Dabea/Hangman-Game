'use strict';




/**
 * picks a random word form the list

function pickRandomword () {
    const wordBank = ['program', 'hello' , 'world'];
    const index = Math.floor(Math.random() * wordBank.length)  ;
    const chosenword = wordBank[index];
    return chosenword;
}

const chosenwod = pickRandomword();
const chosenWordLength = chosenwod.length;




*/


/**
 * HangMan Game constructor
 * @constructor
 */
function Hangman(){
    this.wordBank = ['program', 'hello' , 'world'];
    this.bankSpaces = [];

}

/**
 * This will chose a ranom word from the word bank
 * 
 * @for Hangman
 * @method pickRandomWord
 * @return string
 */
Hangman.prototype.pickRandomWord = function () {
    const index = Math.floor(Math.random() * this.wordBank.length);
    const chosenword = this.wordBank[index];
    return chosenword;
};

/**
 * This will chose a ranom word from the word bank
 * 
 * @for Hangman
 * @method buildBlankSpaces
 * @return array
 */
Hangman.prototype.buildBlankSpaces = function (word) {
    for( let indexCounter = 0; indexCounter < word.length; indexCounter++){
        this.bankSpaces.push('_');
    }

    alert(this.bankSpaces);

};



const game = new Hangman();

game.pickRandomWord();
game.buildBlankSpaces('hello');
