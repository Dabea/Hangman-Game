'use strict';

/**
 * HangMan Game constructor
 * @constructor
 */
function Hangman(){
    this.wordBank = ['program', 'hello' , 'world'];
    this.bankSpaces = [];
    this.chosenWord = null;
    this.incorectLetters = [];
    this.numberOfGusses = null;
    this.maximumNumberOfGusses = null;

}

/**
 * This will initilize the application
 * 
 * @for Hangman
 * @method init
 * @return string
 */
Hangman.prototype.init = function () {
    //functions that are required to run at the start of the application
};

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
};

/**
 * Triggers actions after an incorect guess is made
 * 
 * @for Hangman
 * @method incorectGuess
 */
Hangman.prototype.incorectGuess = function (letter) {
    this.numberOfGusses ++;
    // Validation is required
    this.incorectLetters.push(letter);
    //Draw stick figure
};

/**
 * This will chose a ranom word from the word bank
 * 
 * @for Hangman
 * @method correctGuess
 */
Hangman.prototype.corectGuess = function (letter) {

};

/**
 * This will chose a ranom word from the word bank
 * 
 * @for Hangman
 * @method checkGuess
 * @param string
 * @return array
 */
Hangman.prototype.checkGuess = function (letter) {
    var indices = [];
    var array = ['a', 'b', 'a', 'c', 'a', 'd'];
    var element = 'a';
    var idx = array.indexOf(element);
    while (idx != -1) {
    indices.push(idx);
    idx = array.indexOf(element, idx + 1);
    }
console.log(indices);
};



const game = new Hangman();

game.pickRandomWord();
game.buildBlankSpaces('hello');
