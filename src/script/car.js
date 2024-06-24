class Car {
  #year;

  constructor(name, weight, year) {
    this.name = name;
    this.weight = weight;
    this.#year = year;
  }

  getFullInfo() {
    return console.log(
      `This Car ${this.name}, has weight of ${this.weight}, was made in ${this.year}`
    );
  }

  #getYear() {
    return this.#year;
  }
}

const MaxSpeed = 200;

// export default Car;
// module.exports = Car;

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ", it is a " + this.model;
  }
}

const myCar = new Car("x5", "2000pd", 1998);

myCar.getFullInfo();
// myCar.#getYear(10);
