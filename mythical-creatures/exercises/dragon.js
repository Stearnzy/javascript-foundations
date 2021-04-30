
class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.mealCount = 0;
    this.hungry = true;
  }

  greet() {
    return `Hi, ${this.rider}!`
  }

  eat() {
    this.mealCount += 1;
    if (this.mealCount >= 3) {
      this.hungry = false;
    }
  }
}

module.exports = Dragon;