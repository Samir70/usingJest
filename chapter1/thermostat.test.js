const Thermostat = require("./thermostat");

describe("thermostat", () => {
  it("initialises with a temerature of 20", () => {
    const t = new Thermostat();
    expect(t.getTemp()).toBe(20);
  });
  it("user can raise the temperature", () => {
    const t = new Thermostat();
    t.up();
    t.up();
    expect(t.getTemp()).toBe(22);
  });
  it("user can lower the temperature", () => {
    const t = new Thermostat();
    t.down();
    t.down();
    expect(t.getTemp()).toBe(18);
  });
  it("user can reset the temperature", () => {
    const t = new Thermostat();
    t.down();
    t.down();
    t.reset();
    expect(t.getTemp()).toBe(20);
  });
  it("user can not lower the temperature below 10", () => {
    const t = new Thermostat();
    for (let i = 0; i < 100; i++) {
      t.down();
    }
    expect(t.getTemp()).toBe(10);
  });
  it("user can not raise the temperature above 25 in power-save mode", () => {
    const t = new Thermostat();
    for (let i = 0; i < 100; i++) {
      t.up();
    }
    expect(t.getTemp()).toBe(25);
  });
  it("user can not raise the temperature above 32 with power-save mode off", () => {
    const t = new Thermostat();
    t.setPowerSavingmode(false);
    for (let i = 0; i < 100; i++) {
      t.up();
    }
    expect(t.getTemp()).toBe(32);
  });
  it("reports energy usage", () => {
    const t = new Thermostat();
    t.down();
    t.down();
    t.down();
    expect(t.currentEnergyUsage()).toBe("low");
    for (let i = 0; i < 100; i++) {
      t.up();
    }
    expect(t.currentEnergyUsage()).toBe("medium");
    t.setPowerSavingmode(false);
    t.up();
    expect(t.currentEnergyUsage()).toBe("high");
  });
});
