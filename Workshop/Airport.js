class Airport {
  constructor(weather) {
    this.weather = weather;
  }

  land(plane) {
    if (plane.isOnGround()) {
      return "That plane has already landed.";
    } else if (this.weather.isStormy()) {
      return "Plane is being diverted due to stormy weather.";
    } else {
      plane.land();
      return "Plane is landing";
    }
  }

  takeOff(plane) {
    if (!plane.isOnGround()) {
      return "That plane is already in the air";
    } else if (this.weather.isStormy()) {
      return "Plane cannot take off due to stormy weather";
    } else {
      plane.takeOff();
      return "Plane has taken off";
    }
  }
}

class Plane {
  constructor(landed) {
    this.onGround = landed === "flying" ? false : true;
  }
  isOnGround() {
    return this.onGround;
  }
  land() {
    this.onGround = true;
  }
  takeOff() {
    this.onGround = false;
  }
}

class Weather {
  constructor(ave_days_between_storms) {
    this.average = ave_days_between_storms;
  }
  isStormy() {
    return Math.floor(Math.random() * this.average) === 0;
  }
}
let weather = new Weather(3);
let airport = new Airport(weather);
let p1 = new Plane("flying");
let p2 = new Plane("landed");
let p3 = new Plane("taxi");

module.exports = { Airport, Plane, Weather, weather, airport, p1, p2, p3 };

// const myClasses = require("./workshop/Airport.js");
// const {airport, p1, p2, p3}  = require("./workshop/Airport.js");