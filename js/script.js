var rate = 0;
var blocks = Array(Object);
var gameStarted = false;
var interval = 0;
window.onload = function() {
    document.getElementById("game").onclick = (event) => console.log(blocks);
    document.getElementById("ms-input-field").onchange = function() {
        document.getElementById('ms-input-field').disabled=true;
        
        
    }
    
}

