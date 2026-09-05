"use strict";
const mainMenu = document.getElementById("mainMenu");
const gameScreen = document.getElementById("gameScreen");
const settingsScreen = document.getElementById("settingsScreen");
const playButton = document.getElementById("playButton");
const shopButton = document.getElementById("shopButton");
const achievementsButton = document.getElementById("achievementsButton");
const settingsButton = document.getElementById("settingsButton");
const supportButton = document.getElementById("supportButton");
const settingsBackButton = document.getElementById("settingsBackButton");
const settingButtons = {
    graphics: document.getElementById("graphicsSettingButton"),
    sound: document.getElementById("soundSettingButton"),
    music: document.getElementById("musicSettingButton"),
    vibration: document.getElementById("vibrationSettingButton")
};
function showScreen(screenToShow) {
    document.querySelectorAll(".screen").forEach((screen) => screen.classList.remove("active"));
    screenToShow.classList.add("active");
}
playButton.addEventListener("click", () => showScreen(gameScreen));
settingsButton.addEventListener("click", () => showScreen(settingsScreen));
settingsBackButton.addEventListener("click", () => showScreen(mainMenu));
Object.entries(settingButtons).forEach(([name, button]) => {
    button.addEventListener("click", () => KAVRYXSettings.toggle(name));
});
shopButton.addEventListener("click", () => console.log("Магазин KAVRYX"));
achievementsButton.addEventListener("click", () => console.log("Достижения KAVRYX"));
supportButton.addEventListener("click", () => console.log("Поддержка KAVRYX"));