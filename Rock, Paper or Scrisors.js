const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput == 'rock' || userInput == 'scrissors' || userInput == 'paper') {
        return console.log(userInput);
    } else {
        console.log('Error');
    }
}
getUserChoice('rock');



const getComputerChoice = () => {
    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return console.log('rock');
        case 1:
            return console.log('paper');
        case 2:
            return console.log('scissors');

    }
}
getComputerChoice();

const determineWinner = (userChoise, computerChoise) => {
    if (userChoise === computerChoise) {
        return 'game is a tie!';
    }
    if (userChoise === 'rock') {
        if (computerChoise === 'paper') {
            return 'computer won!';
        } else {
            return 'you won!';
        }
    }
    if (userChoise === 'paper') {
        if (computerChoise === 'scrissors') {
            return 'computer won!';
        } else {
            return 'you won!';
        }
    }
    if (userChoise === 'scrissors') {
        if (computerChoise === 'rock') {
            return 'computer won!';
        } else {
            return 'you won';
        }
    }
}

const playGame = () => {
    userChoise = getUserChoice('paper');
    computerChoise = getComputerChoice();
    console.log('You threw:' + userChoise);
    console.log('The computer threw: ' + computerChoise);

    console.log(determineWinner(userChoise, computerChoise));
}

playGame();