// user chooses rock, paper, or scissors
// computer chooses at random
// decide who wins
// tell user who wins

const game = () => {
    // prevents global variables

    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
        });
    };

    //call all inner function
    startGame();
};

//start the game
game();
