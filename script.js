function startGame(){

    for(var i=1; i<=9; i++){
        clearBox(i);
    }

  document.turn = "X";
  if(Math.random() < 0.5){
    document.turn = "O";
  }
  document.winner = null;
  setMessage(document.turn + " ready to start.")
}
function setMessage(msg){
  document.getElementById("message").innerText = msg;
}
function nextMove(square){
    if(document.winner != null){
      setMessage(document.winner + " already won the game!");
    } else if(square.innerText == ""){
    square.innerText = document.turn;
    switchTurn();
  } else{
    setMessage("Hey, that square not yours!")
  }
}
function switchTurn(){
  if(checkWinner(document.turn)){
    setMessage("Congratulations, " + document.turn + " You Win!");
    document.winner = document.turn;
  } else if(document.turn == "X"){
    document.turn = "O";
    setMessage("It's " + document.turn + "'s turn!");
  } else{
    document.turn = "X";
    setMessage("It's " + document.turn + "'s turn!");
  }

}
function checkWinner(move){
  var result = false;
  if(checkRow(1,2,3,move) ||
     checkRow(4,5,6,move) ||
     checkRow(7,8,9,move) ||
     checkRow(1,4,7,move) ||
     checkRow(2,5,8,move) ||
     checkRow(3,6,9,move) ||
     checkRow(7,8,9,move) ||
     checkRow(1,5,9,move) ||
     checkRow(3,5,7,move)) {
        result = true;
  }
  return result;
}
function checkRow(sq1, sq2, sq3, move){
  var result = false;
  if(getBox(sq1)==move && getBox(sq2)==move && getBox(sq3)==move){
      result = true;
  }
  return result;
}
function getBox(number){
  return document.getElementById("s" + number).innerText;
}
function clearBox(number){
    document.getElementById("s" + number).innerText = "";
}
