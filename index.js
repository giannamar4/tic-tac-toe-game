let turn = 1;
let win = -1;
let clickCounter = 0;
let matrix = [
  [-1,-1,-1],
  [-1,-1,-1],
  [-1,-1,-1]
]

function playerAction(elem, row, col){
  if(elem.textContent != "") return;

if(win != -1) return;

clickCounter++

  matrix[row][col] = turn;
if(turn ==1){
    elem.textContent = 'X';
    document.getElementById('turnNum').textContent = "Player 2 (O)"
    turn = 2

}
else if(turn == 2){
    elem.textContent = 'O'
    document.getElementById('turnNum').textContent = "Player 1 (X)"
    turn = 1;
}
for(let i =0; i<3; i++){
  // row check
  if(matrix[i][0] == matrix[i][1] == matrix[i][2]) win = matrix[i][0]
 /* if(matrix[0][0] == matrix[0][1] && matrix[0][1] == matrix[0][2]) win = matrix[i][0]
  if(matrix[0][0] == matrix[0][1] == matrix[0][2]) win = matrix[i][0]*/
  // col check
  if(matrix[0][i] == matrix[1][i] == matrix [2][i]) win = matrix[0][i]
 
}
 // diagonal check
 if(matrix[0][0] == matrix[1][1] ==matrix[2][2]) win = matrix[1][1]
 if(matrix[0][2] == matrix[1][1] ==matrix[2][0]) win = matrix[1][1]

 if(win != -1){
  document.getElementById('turnNum').textContent = "Player " + win + " has won!"
 }
 
 if(clickCounter == 9 && win == -1){
  document.getElementById('turnNum').textContent = "It's a draw!"
 }
}

