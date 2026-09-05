"use strict";
const gameCanvas=document.getElementById("gameCanvas");
const gameContext=gameCanvas.getContext("2d");
let gameWidth=0;
let gameHeight=0;
function resizeGameCanvas(){
    const pixelRatio=window.devicePixelRatio||1;
    gameWidth=window.innerWidth;
    gameHeight=window.innerHeight;
    gameCanvas.width=gameWidth*pixelRatio;
    gameCanvas.height=gameHeight*pixelRatio;
    gameCanvas.style.width=gameWidth+"px";
    gameCanvas.style.height=gameHeight+"px";
    gameContext.setTransform(pixelRatio,0,0,pixelRatio,0,0);
}
window.addEventListener("resize",resizeGameCanvas);
function drawGameWorld(){
    gameContext.clearRect(0,0,gameWidth,gameHeight);
    const skyGradient=gameContext.createLinearGradient(0,0,0,gameHeight);
    skyGradient.addColorStop(0,"#101a27");
    skyGradient.addColorStop(.55,"#263746");
    skyGradient.addColorStop(1,"#151a1c");
    gameContext.fillStyle=skyGradient;
    gameContext.fillRect(0,0,gameWidth,gameHeight);
    gameContext.fillStyle="#d9d8c5";
    gameContext.beginPath();
    gameContext.arc(gameWidth*.82,gameHeight*.16,42,0,Math.PI*2);
    gameContext.fill();
    if(window.KAVRYXSettlement) KAVRYXSettlement.draw(gameContext,gameWidth,gameHeight);
}
let gameFrameId=null;
function gameLoop(){
    if(!GameState.running||GameState.paused){
        gameFrameId=null;
        return;
    }
    drawGameWorld();
    gameFrameId=requestAnimationFrame(gameLoop);
}
function startGame(){
    resizeGameCanvas();
    GameState.running=true;
    GameState.paused=false;
    gameLoop();
}
function pauseGame(){
    GameState.paused=true;
    if(gameFrameId!==null){
        cancelAnimationFrame(gameFrameId);
        gameFrameId=null;
    }
}
function resumeGame(){
    if(!GameState.running||!GameState.paused)return;
    GameState.paused=false;
    gameLoop();
}
function stopGame(){
    GameState.running=false;
    if(gameFrameId!==null){
        cancelAnimationFrame(gameFrameId);
        gameFrameId=null;
    }
}
window.KAVRYXGame={start:startGame,pause:pauseGame,resume:resumeGame,stop:stopGame};
startGame();