"use strict";
const HUD = {
    level: 1,
    gold: 0,
    crystals: 0,
    update() {
        document.getElementById("levelValue").textContent = this.level;
        document.getElementById("goldValue").textContent = this.gold;
        document.getElementById("crystalValue").textContent = this.crystals;
    },
    setLevel(value) {
        this.level = value;
        this.update();
    },
    setGold(value) {
        this.gold = value;
        this.update();
    },
    setCrystals(value) {
        this.crystals = value;
        this.update();
    },
    addGold(value) {
        this.gold += value;
        this.update();
    },
    addCrystals(value) {
        this.crystals += value;
        this.update();
    }
};
HUD.update();