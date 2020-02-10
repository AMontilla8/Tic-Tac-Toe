let board = [
    ['','',''],
    ['','',''],
    ['','',''],
];

let players = ['X', 'O']
let currentPlayer;
let clickTracker = 0

function setup() {
    createCanvas(400, 400);
    if (random(1) < 0.5){
        currentPlayer = players[0];
    } else {
        currentPlayer = players[1];
    }
}

function moveCount(board){
let moveCount = 0
for (let i = 0; i<board.length; i++){
  for (let j = 0 ; j<board[i].length ; j++){
    if (board[i][j]!=""){
      moveCount++
    }
  }
}
return moveCount
}

function draw() {
    background(158);
    let w = width / 3;
    let h = height / 3;
    strokeWeight(4);

    line(w, 0, w, height);
    line(w*2 , 0, w*2, height);
    line(0, h, width, h);
    line(0, h*2, width, h*2);

    
    for (let j =0; j < 3;j++) {
        for(let i = 0; i < 3; i++) {
            let x = w * i + w/2;
            let y = h * j + h/2;
            let spot = board[i][j];
            textSize(32);
            if (spot == players[1]) {
                noFill();
                ellipse(x,y,w/2);
            }   else if (spot == players[0]) {
                let xr = w/4;
                line(x-xr, y-xr, x + xr, y + xr);
                line(x+xr, y-xr, x - xr, y + xr);
            }
        }
    }
}

