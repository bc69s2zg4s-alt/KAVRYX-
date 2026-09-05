"use strict";

const PauseSystem = {
    paused: false,
    button: document.getElementById("pauseButton"),
    overlay: null,

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
        if (!this.overlay) {
            this.overlay = document.createElement("div");
            this.overlay.id = "pauseOverlay";
            this.overlay.className = "pause-overlay";
            this.overlay.innerHTML = `
                <div class="pause-panel">
                    <div class="pause-title">ПАУЗА</div>
                    <div class="pause-subtitle">ИГРА ПРИОСТАНОВЛЕНА</div>
                </div>
            `;
            document.getElementById("gameScreen").appendChild(this.overlay);
        }

        this.overlay.classList.add("active");
    },

    hidePauseOverlay() {
        if (this.overlay) {
            this.overlay.classList.remove("active");
        }
    }
};

PauseSystem.init();