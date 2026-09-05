"use strict";

const PauseSystem = {
    paused: false,

    button: document.getElementById("pauseButton"),

    init() {
        this.button.addEventListener("click", () => {
            this.toggle();
        });
    },

    toggle() {
        this.paused = !this.paused;

        if (this.paused) {
            this.button.textContent = "▶";
            this.showPauseOverlay();
        } else {
            this.button.textContent = "II";
            this.hidePauseOverlay();
        }
    },

    showPauseOverlay() {
        let overlay = document.getElementById("pauseOverlay");

        if (!overlay) {
            overlay = document.createElement("div");
            overlay.id = "pauseOverlay";
            overlay.className = "pause-overlay";
            overlay.innerHTML = `
                <div class="pause-panel">
                    <div class="pause-title">ПАУЗА</div>
                    <div class="pause-subtitle">ИГРА ПРИОСТАНОВЛЕНА</div>
                </div>
            `;
            document.getElementById("gameScreen").appendChild(overlay);
        }

        overlay.classList.add("active");
    },

    hidePauseOverlay() {
        const overlay = document.getElementById("pauseOverlay");

        if (overlay) {
            overlay.classList.remove("active");
        }
    }
};

PauseSystem.init();