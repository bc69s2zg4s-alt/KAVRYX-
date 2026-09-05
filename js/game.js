"use strict";

/*
 * KAVRYX — игровой экран
 *
 * Здесь находится только базовый игровой Canvas
 * и игровой цикл.
 */

const gameCanvas = document.getElementById("gameCanvas");
const gameContext = gameCanvas.getContext("2d");

let gameWidth = 0;
let gameHeight = 0;


/*
 * Подстраиваем Canvas под экран устройства.
 */

function resizeGameCanvas() {

    const pixelRatio = window.devicePixelRatio || 1;

    gameWidth = window.innerWidth;
    gameHeight = window.innerHeight;

    gameCanvas.width = gameWidth * pixelRatio;
    gameCanvas.height = gameHeight * pixelRatio;

    gameCanvas.style.width = gameWidth + "px";
    gameCanvas.style.height = gameHeight + "px";

    gameContext.setTransform(
        pixelRatio,
        0,
        0,
        pixelRatio,
        0,
        0
    );
}

window.addEventListener(
    "resize",
    resizeGameCanvas
);


/*
 * Рисуем игровой мир.
 */

function drawGameWorld() {

    gameContext.clearRect(
        0,
        0,
        gameWidth,
        gameHeight
    );


    /*
     * Небо.
     */

    const skyGradient =
        gameContext.createLinearGradient(
            0,
            0,
            0,
            gameHeight
        );

    skyGradient.addColorStop(
        0,
        "#101a27"
    );

    skyGradient.addColorStop(
        0.55,
        "#263746"
    );

    skyGradient.addColorStop(
        1,
        "#151a1c"
    );

    gameContext.fillStyle = skyGradient;

    gameContext.fillRect(
        0,
        0,
        gameWidth,
        gameHeight
    );


    /*
     * Луна.
     */

    gameContext.fillStyle = "#d9d8c5";

    gameContext.beginPath();

    gameContext.arc(
        gameWidth * 0.82,
        gameHeight * 0.16,
        42,
        0,
        Math.PI * 2
    );

    gameContext.fill();


    /*
     * Земля.
     */

    const groundHeight =
        gameHeight * 0.30;

    gameContext.fillStyle = "#252a28";

    gameContext.fillRect(
        0,
        gameHeight - groundHeight,
        gameWidth,
        groundHeight
    );


    /*
     * Пиксельная сетка земли.
     */

    gameContext.strokeStyle =
        "rgba(0, 0, 0, 0.16)";

    gameContext.lineWidth = 2;

    const blockSize = 32;

    for (
        let x = 0;
        x < gameWidth;
        x += blockSize
    ) {

        for (
            let y = gameHeight - groundHeight;
            y < gameHeight;
            y += blockSize
        ) {

            gameContext.strokeRect(
                x,
                y,
                blockSize,
                blockSize
            );
        }
    }
}

/*
 * Основной игровой цикл.
 */
let gameFrameId = null;
function gameLoop() {
    if (!GameState.running || GameState.paused) {
        gameFrameId = null;
        return;
    }
    drawGameWorld();
    gameFrameId = requestAnimationFrame(gameLoop);
}
/*
 * Запуск игрового Canvas.
 */
function startGame() {
    resizeGameCanvas();
    GameState.running = true;
    GameState.paused = false;
    gameLoop();
}
/*
 * Управление игровым циклом.
 */
function pauseGame() {
    GameState.paused = true;
    if (gameFrameId !== null) {
        cancelAnimationFrame(gameFrameId);
        gameFrameId = null;
    }
}
function resumeGame() {
    if (!GameState.running || !GameState.paused) return;
    GameState.paused = false;
    gameLoop();
}
function stopGame() {
    GameState.running = false;
    if (gameFrameId !== null) {
        cancelAnimationFrame(gameFrameId);
        gameFrameId = null;
    }
}
window.KAVRYXGame = { start: startGame, pause: pauseGame, resume: resumeGame, stop: stopGame };
startGame();