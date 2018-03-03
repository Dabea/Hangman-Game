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
    this.wins = null;
    this.losses = null;
}

/**
 * This will initiate all the start up functions for the hangman game
 * 
 * @for Hangman
 * @method init
 * 
 */
Hangman.prototype.init = function () {
    $('.game-over').addClass('hidden');
    this.lifeCount = 8;
    this.incorectGuess = 0;
    this.incorectLetterBank = [];
    this.bankSpaces = [];
    this.wins = 0;
    this.losses = 0;
    this.pickRandomWord();
    this.enable();
    this.buildBlankSpaces(this.activeWord);
    let $wordArea = $('.word-area');
    this._setActiveLetters(this.activeWord);
    this.drawWord($wordArea);
};

Hangman.prototype.restart = function (){
    $('.game-over').addClass('hidden');
    this.enableKeyListners();
    this.lifeCount = 8;
    this.incorectGuess = 0;
    this.incorectLetterBank = [];
    this.bankSpaces = [];
    this.pickRandomWord();
    this.buildBlankSpaces(this.activeWord);
    let $wordArea = $('.word-area');
    this._setActiveLetters(this.activeWord);
    $('.incorect-guess').html(this.incorectGuess);
    $('.win-count').html(this.wins);
    $('.loss-count').html(this.losses);
    this.drawWord($wordArea);
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
        this.bankSpaces.push('_');
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

    if(this.incorectLetterBank.length > this.lifeCount){
        this.disableKeyListners();
        $('.game-outcome').html('Game Over');
        this.losses++;
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
   if(!this.bankSpaces.includes('_')){
    this.disableKeyListners();   
    $('.game-outcome').html('Winner');
    this.wins++;
    this.gameOver();
   }
}

/**
 * This handles the end of the game and displays the game outcome window
 */
Hangman.prototype.gameOver = function (){
    //ends the game
    $('.game-over').removeClass('hidden');
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
    $element = $('.word');
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
    let restart = this.restart.bind(this);
    $('.keyboard').on('click', 'div.key', function(){ gussesEvent(event); });
    $(document).on('keypress' ,  gussesEvent);
    $('.game-over').on('click', restart)
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

/**
 * Enable Click events
 * 
 * @for Hangman
 * @method enable
 */
Hangman.prototype.enableKeyListners = function() {
    let gussesEvent = this.guess.bind(this);
    let restart = this.restart.bind(this);
    $('.keyboard').on('click', 'div.key', function(){ gussesEvent(event); });
    $(document).on('keypress' ,  gussesEvent);
    
};

/**
 * disable click events
 * 
 * @for Hangman
 * @method disable
 */
Hangman.prototype.disableKeyListners = function(){
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
