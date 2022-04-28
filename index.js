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
        console.log(`  choice: ${result.choice}`.rainbow);
    });
}
