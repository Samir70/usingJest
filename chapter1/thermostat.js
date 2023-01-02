class Thermostat {
  constructor() {
    this.temp = 20;
    this.powerSaveOn = true;
  }
  getTemp() {
    return this.temp;
  }
  up() {
    const maxTemp = this.powerSaveOn ? 25 : 32;
    this.temp < maxTemp ? this.temp++ : null;
  }
  down() {
    this.temp > 10 ? this.temp-- : null;
  }
  setPowerSavingmode(mode) {
    this.powerSaveOn = mode;
  }
  reset() {
    this.temp = 20;
  }
  currentEnergyUsage() {
    return this.temp < 18 ? "low" : this.temp <= 25 ? "medium" : "high"
  }
}

module.exports = Thermostat;
