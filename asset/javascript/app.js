'use strict';

/**
 * HangMan Game constructor
 * @constructor
 */
function Hangman(){
    this.wordBank = ['program', 'hello' , 'world'];
    this.bankSpaces = [];
    this.activeWord = null;
    this.activeWordLetters = [];
    this.incorectGuess = null;
    this.incorectLetterBank = [];
    this.lifeCount = null;


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
    this.lifeCount = 8;
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
    $('.incorect-guess').html(this.incorectGuess);
    this.incorectLetterBank.push(letter);
    console.log(this.incorectLetterBank);
    //Draw Hangman

    if(this.incorectLetterBank.length > this.lifeCount){
        this.gameOver();
    }
   
};

/**
 * This will chose a ranom word from the word bank
 * 
 * @for Hangman
 * @method corectLetterGuessed
 *
 */
Hangman.prototype.corectLetterGuessed = function (letter) {
   const indexOfLetters = this.allIndexOf(this.activeWord, letter);
   for(let i = 0 ; i < indexOfLetters.length; i++ ){
    this.bankSpaces[indexOfLetters[i]] = letter;
   }
   this.drawWord();
}

Hangman.prototype.gameOver = function (){
    //ends the game

    this.disable();
}

/**
 * setter to set the value for activeWordLetter
 * 
 * @method _setActiveLetters
 * @param {*} activeWord 
 */
Hangman.prototype._setActiveLetters = function(activeWord) {
    this.activeWordLetters = activeWord.split('');
}

Hangman.prototype.drawWord = function ($element) {
    $element = $('.word-area');
    $element.html('');
    for(let indexCounter = 0; indexCounter < this.activeWord.length ; indexCounter++){
        $(`<div class='letter-display'>${this.bankSpaces[indexCounter]}</div>`).appendTo($element).hide().fadeIn(300 * indexCounter);
    }
}
/**
 * Enable Click events
 * 
 * @for Hangman
 * @method enable
 */
Hangman.prototype.enable = function() {
    let gussesEvent = this.guess.bind(this);
    $('.keyboard').on('click', 'div.key', function(){ gussesEvent(event); });
    $(document).on('keypress' ,  gussesEvent);
};

/**
 * disable click events
 * 
 * @for Hangman
 * @method disable
 */
Hangman.prototype.disable = function(){
    $('.keyboard').off();
    $(document).off();
}

Hangman.prototype.guess = function(event) {
    const letter = event.target.dataset.letter || event.key;
    if(this.activeWordLetters.includes(letter)){
       this.corectLetterGuessed(letter);
    }else{
        this.incorrectLetterGuess(letter);
    }
};


Hangman.prototype.allIndexOf = function (string, toSearch) {
    let indices = [];
    for(let pos = string.indexOf(toSearch); pos !== -1; pos = string.indexOf(toSearch, pos + 1)) {
        indices.push(pos);
    }
    return indices;
}

const game = new Hangman();



$( document ).ready(function() {
    game.init();
});


