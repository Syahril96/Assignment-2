var num=0;
const board = [25];
const playerPosition = [25];
var player1=0;
var player2=0;



function rolldice() {

  if (player1 >= 25 ) {
     console.log("Player 1 win the game")
  } else if (player1 === 15){
    player1 = 5;
    console.log("player 1 stepped on a snake, moving down to 5th position")
  } else if (player1 === 23){
    player1 = 16;
    console.log("player 1 stepped on a snake, moving down to 16th position")
  } else if (player1 === 8){
    player1 = 13;
    console.log("player 1 stepped on a ladder, moving up to 13th position")
  } else if (player1 === 19){
    player1 = 24;
    console.log("player 1 stepped on a ladder, moving up to 24th position")
  }
  else{
    board[player1]="";

    const max = 6;
    const roll = Math.ceil(Math.random() * max);
    player1 = player1 + roll;
    console.log("Rolling Dice..");

    board[player1]="player1";

    console.log("Player 1 Position: ", player1);

  }
}

function roll(){

  num=num+1;
  console.log(num);

}
