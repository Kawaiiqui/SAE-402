const height = Math.min(500, width / 2);
const outerRadius = height / 2 - 10;
const innerRadius = outerRadius * 0.75;
var chart = document.getElementById("pie-chart");
var game = document.getElementById("game");

function startGame() {
    
}// https://tauday.com/tau-manifesto


game.addEventListener("click", function () { return startGame("classic"); });