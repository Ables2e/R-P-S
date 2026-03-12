const choice=['rock','paper','scissor'];
const playerDisplay=document.getElementById('player');
const computerDisplay=document.getElementById('computer');
const resultDisplay=document.getElementById('tie');

function playGames(playerChoice){
    const computerChoice=choice[Math.floor(Math.random()*3)];
    console.log(computerChoice);
    let result='';
    if(playerChoice===computerChoice){
        result='its a tie';
    }
    else {
        switch(playerChoice){
            case 'rock':
                result=(computerChoice==='scissor')?'you win':'you lose';
                break;
             case 'paper':
                result=(computerChoice==='rock')?'you win':'you lose';
                break;
              case 'scissor':
                result=(computerChoice==='paper')?'you win':'you lose';
                break;
        }
    }
 playerDisplay.textContent=`PLAYER:${playerChoice}`;
  computerDisplay.textContent=`COMPUTER:${computerChoice}`;
  resultDisplay.textContent=result;
}