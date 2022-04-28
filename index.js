// console.log('hello'.green); // outputs green text
// console.log('i like cake and pies'.underline.red) // outputs red underlined text
// console.log('inverse the color'.inverse); // inverses the color
// console.log('OMG Rainbows!'.rainbow); // rainbow

var prompt = require('prompt');
var colors = require('colors');

console.log('Welcome to the Rock Paper Scissors Game! \n To play, enter your choice of rock, paper, or scissors. \n The computer will then also choose an option and then will comapre the two seeing who won! \n\nPlease Enter Your Choice Of "Rock", "Paper" or "Scissors":'.green);
Game();

onErr = function (err) {
    console.log(err);
    return 1;
}

function Game() {
    prompt.start();

    prompt.get(['choice'], function (err, result) {
        if (err) { return onErr(err); }
        if(!result.choice){
            console.log('Please enter a valid choice of "Rock", "Paper" or "Scissors".'.red);
            Game();
        }else if(result.choice == 'Rock' || result.choice == 'rock'){
            var userChoice = 'Rock';
        }else if(result.choice == 'Paper' || result.choice == 'paper'){
            var userChoice = 'Paper';
        }else if(result.choice == 'Scissors' || result.choice == 'scissors'){
            var userChoice = 'Scissors';
        }else{
            console.log('Please enter a valid choice of "Rock", "Paper" or "Scissors".'.red);
            Game();
            return(0)
        }
        var computerChoice = Math.floor(Math.random() * (4 - 1) + 1);
        if(computerChoice == 1){
            var computerChoice = 'Rock';
        }else if(computerChoice == 2){
            var computerChoice = 'Paper';
        }else if(computerChoice == 3){
            var computerChoice = 'Scissors';
        }
        if(userChoice == computerChoice){
            console.log('You both chose ' + userChoice + '! It is a tie!'.green);
        }else if(userChoice == 'Rock' && computerChoice == 'Paper'){
            console.log('The computer chose ' + computerChoice + '! Paper Wraps Rock! You lose!'.red);
        }else if(userChoice == 'Rock' && computerChoice == 'Scissors'){
            console.log('The computer chose ' + computerChoice + '! Rock Bashes Scissors! You win!'.green);
        }else if(userChoice == 'Paper' && computerChoice == 'Rock'){
            console.log('The computer chose ' + computerChoice + '! Paper Wraps Rock! You win!'.green);
        }else if(userChoice == 'Paper' && computerChoice == 'Scissors'){
            console.log('The computer chose ' + computerChoice + '! Scissors Cuts Paper! You lose!'.red);
        }else if(userChoice == 'Scissors' && computerChoice == 'Rock'){
            console.log('The computer chose ' + computerChoice + '! Rock Bashes Scissors! You lose!'.red);
        }else if(userChoice == 'Scissors' && computerChoice == 'Paper'){
            console.log('The computer chose ' + computerChoice + '! Scissors Cuts Paper! You win!'.green);
        }
        Again();
    });
}
function Again() {
    console.log('\n\nWould you like to play again? (y/n)'.green);
    prompt.start();
    prompt.get(['play'], function (err, result) {
        if (err) { return onErr(err); }
        if (result.play == 'y' || result.play == 'Y') {
            Game();
        } else if (result.play == 'n' || result.play == 'N') {
            console.log('Thanks for playing!'.green);
        } else {
            console.log('Please enter a valid choice of "y" or "n".'.red);
            again();
        }
    });
}

