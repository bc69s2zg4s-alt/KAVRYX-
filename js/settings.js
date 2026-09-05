"use strict";
const Settings = {
    graphics: true,
    sound: true,
    music: true,
    vibration: true,
    init() {
        this.load();
        this.updateUI();
    },
    load() {
        const saved = localStorage.getItem("kavryxSettings");
        if (!saved) return;
        try {
            Object.assign(this, JSON.parse(saved));
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
        const values = {
            graphics: this.graphics,
            sound: this.sound,
            music: this.music,
            vibration: this.vibration
        };
        Object.entries(values).forEach(([name, value]) => {
            const element = document.getElementById(`${name}Setting`);
            if (element) element.textContent = value ? "ВКЛ" : "ВЫКЛ";
        });
    },
    toggle(name) {
        if (!(name in this)) return;
        this[name] = !this[name];
        this.save();
        this.updateUI();
    }
};
Settings.init();
window.KAVRYXSettings = Settings;