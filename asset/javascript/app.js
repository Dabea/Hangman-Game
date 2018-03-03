'use strict';

/**
 * HangMan Game constructor
 * @constructor
 */
function Hangman(){
    this.wordBank = ['program', 'hello' , 'world'];
    this.bankSpaces = [];
    this.activeWord = null;
    this.activeWordLetters = null;
    this.incorectGuess = null;
    this.incorectLetterBank = [];


}

/**
 * This will initiate all the start up functions for the hangman game
 * 
 * @for Hangman
 * @method init
 * 
 */
Hangman.prototype.init = function () {
    this.pickRandomWord();
    this.enable();
    this.buildBlankSpaces(this.activeWord);
    let $wordArea = $('.word-area');
    this._setActiveLetters(this.activeWord);
    this.drawWord($wordArea);
    


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
    this.activeWord = this.wordBank[index];

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
        this.bankSpaces.push('');
    }
};

/**
 * This perform game actions for incorect guesses
 * 
 * @for Hangman
 * @method incorectLetterGuess
 *
 */
Hangman.prototype.incorrectLetterGuess = function (letter) {
    this.incorectGuess ++;
    this.incorectLetterBank.push(letter);
    //Draw Hangman

    if(incorectLetterBank.length > lifeCount){
        //gameover
    }
   
};

/**
 * This will chose a ranom word from the word bank
 * 
 * @for Hangman
 * @method corectLetterGuessed
 *
 */
Hangman.prototype.corectLetterGuessed = function (word) {
   
};

Hangman.prototype.gameOVer = function (){
    //ends the game
}


Hangman.prototype._setActiveLetters = function(activeWord) {
    this.activeWordLetters = activeWord.split('');
}

Hangman.prototype.drawWord = function ($element) {
    for(let indexCounter = 0; indexCounter < this.activeWord.length ; indexCounter++){
        $(`<div class='letter-display'>${this.bankSpaces[indexCounter]}</div>`).appendTo($element).hide().fadeIn(300 * indexCounter);
    }
}

Hangman.prototype.enable = function() {
    this.guess = this.guess.bind(this);

    $('.keyboard').on('click', 'div.key', function(){
        alert('a Key is pressed');
    })

    $('.test').on('click' , {letter: 'o'}, this.guess)
};

Hangman.prototype.guess = function(event) {
    alert(event.data.letter);
};

const game = new Hangman();

$( document ).ready(function() {
    game.init();
});
