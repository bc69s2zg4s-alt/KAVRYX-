"use strict";
const PauseSystem = {
    button: document.getElementById("pauseButton"),
    overlay: null,
    init() {
        this.button.addEventListener("click", () => this.toggle());
    },
    toggle() {
        if (GameState.paused) {
    KAVRYXGame.pause();
    this.button.textContent = "▶";
    this.showPauseOverlay();
} else {
    KAVRYXGame.resume();
    this.button.textContent = "II";
    this.hidePauseOverlay();
}
    },
    showPauseOverlay() {
        if (!this.overlay) {
            this.overlay = document.createElement("div");
            this.overlay.id = "pauseOverlay";
            this.overlay.className = "pause-overlay";
            this.overlay.innerHTML = `<div class="pause-panel"><div class="pause-title">ПАУЗА</div><div class="pause-subtitle">ИГРА ПРИОСТАНОВЛЕНА</div><button id="resumeGameButton" class="resume-button" type="button">ПРОДОЛЖИТЬ</button></div>`;
            document.getElementById("gameScreen").appendChild(this.overlay);
            document.getElementById("resumeGameButton").addEventListener("click", () => this.toggle());
        }
        this.overlay.classList.add("active");
    },
    hidePauseOverlay() {
        if (this.overlay) this.overlay.classList.remove("active");
    }
};
PauseSystem.init();