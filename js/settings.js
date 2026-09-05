"use strict";
const Settings = {
    graphics: 2,
    sound: true,
    music: true,
    vibration: true,
    init() {
        this.load();
        this.updateUI();
        const slider = document.getElementById("graphicsSettingButton");
        if (slider) slider.addEventListener("input", () => this.setGraphics(slider.value));
    },
    load() {
        const saved = localStorage.getItem("kavryxSettings");
        if (!saved) return;
        try {
            Object.assign(this, JSON.parse(saved));
            if (this.graphics === true) this.graphics = 2;
            if (this.graphics === false) this.graphics = 1;
            this.graphics = Math.min(3, Math.max(1, Number(this.graphics) || 2));
        } catch (error) {
            console.warn("KAVRYX: настройки не загружены", error);
        }
    },
    save() {
        localStorage.setItem("kavryxSettings", JSON.stringify({
            graphics: this.graphics,
            sound: this.sound,
            music: this.music,
            vibration: this.vibration
        }));
    },
    updateUI() {
        const slider = document.getElementById("graphicsSettingButton");
        if (slider) slider.value = this.graphics;
        const values = {
            sound: this.sound,
            music: this.music,
            vibration: this.vibration
        };
        Object.entries(values).forEach(([name, value]) => {
            const element = document.getElementById(`${name}Setting`);
            if (element) element.textContent = value ? "ВКЛ" : "ВЫКЛ";
        });
    },
    setGraphics(value) {
        this.graphics = Math.min(3, Math.max(1, Number(value) || 2));
        this.save();
    },
    toggle(name) {
        if (!(name in this) || name === "graphics") return;
        this[name] = !this[name];
        this.save();
        this.updateUI();
    }
};
Settings.init();
window.KAVRYXSettings = Settings;