/*Global variables*/
const dictionary = ['Alexis', 'David', 'Moira', 'Johnny', 'Stevie', 'Patrick', 'Roland', 'Jocelyn'];
let gameCounter = 0;
let wins = 0;
let keyPressed = '';



/*Objects*/

const game = {
    currentWord: dictionary[gameCounter],
    currentWordInDashes:[],
    remainingGuesses: 12,
    lettersGuessed: [],
    gameIsOver: false,
    turnCurrentWordIntoDashes: function () {
        let dashNumber = this.currentWord.length;
        for (let i= 0; i < dashNumber; i++) {
            this.currentWordInDashes.push('_');
        }
    }, 
    display: function (){
        let insideWins = document.querySelector('#winsId');
        insideWins.innerText = wins;

        let dispCurWord = document.querySelector('#currentWordId');
        dispCurWord.innerText = game.currentWordInDashes.join('');

        let dispGuesRem = document.querySelector('#guessesRemainingId');
        dispGuesRem.innerText = game.remainingGuesses;

        let dispAlrGues = document.querySelector('#alreadyGuessedId');
        dispAlrGues.innerText = game.lettersGuessed.join('');   
    },
            
            /*loop through displayed dashes and add letters */
            /*Add letter to Letters guessed and lower guesses remaining */
        
};

/*Calls*/
game.turnCurrentWordIntoDashes();
game.display();

const endOfGame =() => {
    console.log('end');
    if (gameCounter === 8) {
        gameCounter = 0;
    } else {
        gameCounter ++;
    }

    game.currentWord = dictionary[gameCounter];
    game.currentWordInDashes = [];
    game.turnCurrentWordIntoDashes();
    let dispCurWord = document.querySelector('#currentWordId');
    dispCurWord.innerText = game.currentWordInDashes.join('');

    game.remainingGuesses = 12;
    let dispGuesRem = document.querySelector('#guessesRemainingId');
    dispGuesRem.innerText = game.remainingGuesses;

    game.lettersGuessed = [];
    let dispAlrGues = document.querySelector('#alreadyGuessedId');
    dispAlrGues.innerText = game.lettersGuessed.join('');
    

};


const handleKeyPressed= (event)=> {
    let timesInWord = 0;
    let keyPressed = event.charCode;  
    //Checks if key is a letter
    if (keyPressed >= 65 && keyPressed <= 90 || keyPressed >= 97 && keyPressed <=122) {
        console.log('it is a letter');
        //Loops through current word and determines changes dashes to letter if applicable
        for (let i = 0; i < game.currentWord.length; i++) {
            let keyCode = game.currentWord.charCodeAt(i);
            if  (String.fromCharCode(keyPressed).toLowerCase() === String.fromCharCode(keyCode).toLowerCase()){
                //Determines if letter is found in word
                console.log('found in word');
                game.currentWordInDashes[i] = String.fromCharCode(keyPressed).toUpperCase();
                timesInWord ++;
                console.log(game.currentWordInDashes);
                let dispCurWord = document.querySelector('#currentWordId');
                dispCurWord.innerText = game.currentWordInDashes.join('');

                //if all letters are present trigger game won/restart
            }
        }

        //If not found in word- lower guesses remaining, add letter to letters guessed.
        if (timesInWord === 0) {
            if (!(game.lettersGuessed.includes(String.fromCharCode(keyPressed).toUpperCase()))){
                    //handle wrong letter
                    game.lettersGuessed.push(String.fromCharCode(keyPressed).toUpperCase());
                    let dispAlrGues = document.querySelector('#alreadyGuessedId');
                    dispAlrGues.innerText = game.lettersGuessed.join('');

                    game.remainingGuesses --;
                    let dispGuesRem = document.querySelector('#guessesRemainingId');
                    dispGuesRem.innerText = game.remainingGuesses;

                    //if remainingGuesses is 0, trigger, gameover/restart
                    if (game.remainingGuesses === 0) {
                        setTimeout(() => {
                            alert('You ran out of guesses! You lose!')
                            dispGuesRem.innerText = 0;
                            endOfGame();
                        }, 0);
                        //restart game
                    }
            }                
        }

    } 
    

    if (!(game.currentWordInDashes.includes('_'))) {
        setTimeout(() => {
            alert(`You won! The game will restart!`)
            wins ++;
            let insideWins = document.querySelector('#winsId');
            insideWins.innerText = wins;
            endOfGame();
        }, 0);
    }
    
}


document.addEventListener('keypress', handleKeyPressed);

