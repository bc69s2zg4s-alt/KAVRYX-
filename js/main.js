"use strict";
/*
 * KAVRYX
 * Главный файл запуска приложения.
 *
 * Здесь пока находится только управление
 * переходами между основными экранами.
 */
const mainMenu = document.getElementById("mainMenu");
const gameScreen = document.getElementById("gameScreen");
const playButton = document.getElementById("playButton");
const shopButton = document.getElementById("shopButton");
const achievementsButton = document.getElementById("achievementsButton");
const settingsButton = document.getElementById("settingsButton");
const supportButton = document.getElementById("supportButton");
/*
 * Переключение экранов.
 *
 * screenToShow — элемент, который необходимо показать.
 */
function showScreen(screenToShow) {
    const screens = document.querySelectorAll(".screen");
    screens.forEach((screen) => {
        screen.classList.remove("active");
    });
    screenToShow.classList.add("active");
}
/*
 * Кнопка "Играть".
 *
 * Пока просто открываем игровой экран.
 * Сам игровой движок добавим отдельным этапом.
 */
playButton.addEventListener("click", () => {
    showScreen(gameScreen);
});
/*
 * Остальные кнопки пока не подключаем.
 *
 * Для них позже появятся отдельные системы:
 *
 * shop.js
 * achievements.js
 * settings.js
 * support.js
 */
shopButton.addEventListener("click", () => {
    console.log("Магазин KAVRYX");
});
achievementsButton.addEventListener("click", () => {
    console.log("Достижения KAVRYX");
});
settingsButton.addEventListener("click", () => {
    console.log("Настройки KAVRYX");
});
supportButton.addEventListener("click", () => {
    console.log("Поддержка KAVRYX");
});
.pause-overlay {
    pointer-events: none;
}

.pause-overlay.active {
    pointer-events: none;
}

.pause-panel {
    pointer-events: none;
}

.pause-button {
    position: relative;
    z-index: 100;
    pointer-events: auto;
}