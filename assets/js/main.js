const button  = document.querySelector('.flex-container button');
const choices = ['rock', 'paper', 'scissors'];

function computerPlay() {
    const randomNumber = Math.floor(Math.random() * choices.length);
    const play = choices[randomNumber];

    return play;
}

function game(playerPlay, compPlay){
    if (playerPlay ===  'rock' && compPlay === 'paper' ||
        playerPlay === 'paper' && compPlay === 'scissors' ||
        playerPlay === 'scissors' && compPlay === 'rock'){
        return 'computer'
    }
    if (playerPlay ===  'paper' && compPlay === 'rock' ||
        playerPlay === 'scissors' && compPlay === 'paper' ||
        playerPlay === 'rock' && compPlay === 'scissors'){
        return 'player'
    }
    if (playerPlay === 'rock' && compPlay === 'rock' ||
        playerPlay ===  'paper' && compPlay === 'paper' ||
        playerPlay === 'scissors' && compPlay === 'scissors'){
            return 'tie'
        }
}
button.addEventListener('click', () => {
    const scores= { 
        computer: 0,
        player: 0,
    };
    
    for (let i=0; i <=2; i++){
        const compPlay = computerPlay();
        const playerPlay = prompt('Make a play');
        const winner = game(playerPlay, compPlay);
        console.log('winner ->', winner);
        console.log('compPlay ->', compPlay);
        console.log('playerPlay ->', playerPlay);

        switch (winner) {
            case 'computer':
                scores.computer++;
                break;
            case 'player': 
                scores.player++;
                break;
            default:
                break;
        }

        console.log('scores =>', scores);
        document.getElementById('computer').textContent = scores.computer
        document.getElementById('player').textContent = scores.player

        if (scores.computer < scores.player){
            document.getElementById('win').textContent = 'player';
        } else if (scores.computer > scores.player){
            document.getElementById('win').textContent = 'computer';
        } else {
            document.getElementById('win').textContent = 'tie';
        }

    }
});
