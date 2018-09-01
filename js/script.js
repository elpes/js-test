var playerRate = 0;
var computerRate = 0;
var blocks = Array(Object);
var gameStarted = false;
var interval = 0;
var game = Object();
var timeInput = Object();
function getColor(type) { // 0 - blue, 1- yellow, 2 - green, 3 - red

    switch(type) {
        case 0:
            return "blue";
            break;
        case 1: 
            return "yellow";
            break;
        case 2:
            return "green";
            break;
        case 3:
            return "red";
            break;
    }

} 
function gameProcess() {
    while(playerRate < 10 || computerRate < 10) {
        
        blocks[Math.floor(Math.random() * 10)].type = 1;
        blocks[Math.floor(Math.random() * 10)].backgroundColor = getColor(1);
        setTimeout( function(event) {
            blocks[Number(event.target.id)].type = 3;
            blocks[Number(event.target.id)].style.backgroundColor = getColor(3);
            computerRate++;
            break;
        },
       interval)
      document.getElementById('game').onclick = processClick();

    }
    newGameInit();

}
function processClick() {
    if((event.target.className === "game-cell") && gameStarted && event.target.type === 1) {
        blocks[Number(event.target.id)].type = 2;
        blocks[Number(event.target.id)].backgroundColor = getColor(2);
        playerRate++;
        

    }
}
function newGameInit() {
    gameStarted = false;
    playerRate = 0;
    computerRate = 0;
    interval = 0;
    timeInput.value = 0;
    for(var i = 0; i < 100 ; i++) {
        var div = document.createElement('div');
        div.className = "game-cell";
        div.id = String(i);
        div.type = 0;
        game.appendChild(div);
        div.style.backgroundColor = getColor(0);
    }
    blocks = game.childNodes;
    // console.log(blocks);
}
window.onload = function() {
    game = document.getElementById('game');
    timeInput = document.getElementById('ms-input-field');
    newGameInit();

        
        
        
    
    
}

