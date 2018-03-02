'use strict';

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
};

Hangman.prototype.enable = function() {
    alert('test');
    $('.keyboard').on('click', 'div.key', function(){
        alert('a Key is pressed');
    })
};

const game = new Hangman();

game.pickRandomWord();
game.enable();
game.buildBlankSpaces('hello');
