class Square {
  constructor(a) {
    this._a = a;
  }

  static help() {
    console.log("Квадрат - чотирикутник, у якого всі сторони рівні.");
  }

  get a() {
    return this._a;
  }

  set a(value) {
    this._a = value;
  }

  length() {
    console.log("Сума довжин сторін квадрата: ", 4 * this._a);
  }

  square() {
    console.log("Площа квадрата: ", this._a ** 2);
  }

  info() {
    console.log("Характеристики квадрата:");
    console.log("- Довжина сторони: ", this._a);
    console.log("- Сума довжин сторін: ", 4 * this._a);
    console.log("- Площа: ", this._a ** 2);
  }
}

class Rectangle extends Square {
  constructor(a, b) {
    super(a);
    this._b = b;
  }

  static help() {
    console.log("Прямокутник - це чотирикутник, усі кути якого прямі, а протилежні сторони прямокутника рівні.");
  }

  get b() {
    return this._b;
  }

  set b(value) {
    this._b = value;
  }

  length() {
    console.log("Сума довжин сторін прямокутника: ", 2 * (this._a + this._b));
  }

  square() {
    console.log("Площа прямокутника: ", this._a * this._b);
  }

  info() {
    console.log("Характеристики прямокутника:");
    console.log("- Довжина: ", this._a);
    console.log("- Ширина: ", this._b);
    console.log("- Сума довжин сторін: ", 2 * (this._a + this._b));
    console.log("- Площа: ", this._a * this._b);
  }
}

class Rhombus extends Square {
  constructor(a, alpha, beta) {
    super(a);
    this._alpha = alpha;
    this._beta = beta;
  }

  static help() {
    console.log("Ромб -  це паралелограм, у якого всі сторони рівні.");
  }

  get alpha() {
    return this._alpha;
  }

  set alpha(value) {
    this._alpha = value;
  }

  get beta() {
    return this._beta;
  }

  set beta(value) {
    this._beta = value;
  }

  length() {
    console.log("Сума довжин сторін ромба: ", 4 * this._a);
  }

  square() {
    console.log("Площа ромба: ", this._a ** 2 * Math.sin(this._alpha * Math.PI / 180));
  }

  info() {
    console.log("Характеристики ромба:");
    console.log("- Довжина сторони: ", this._a);
    console.log("- Тупий кут: ", this._alpha);
    console.log("- Гострий кут: ", this._beta);
    console.log("- Сума довжин сторін: ", 4 * this._a);
    console.log("- Площа: ", this._a ** 2 * Math.sin(this._alpha * Math.PI / 180));
  }
}

class Parallelogram extends Rhombus {
  constructor(a, b, alpha, beta) {
    super(a, alpha, beta);
    this._b = b;
  }

  static help() {
    console.log("Паралелограм - чотирикутник, протилежні сторони якого попарно паралельні.");
  }

  get b() {
    return this._b;
  }

  set b(value) {
    this._b = value;
  }

  length() {
    console.log("Сума довжин сторін паралелограма: ", 2 * (this._a + this._b));
  }

  square() {
    console.log("Площа паралелограма: ", this._a * Math.sin(this._alpha * Math.PI / 180) * this._b);
  }

  info() {
    console.log("Характеристики паралелограма:");
    console.log("- Довжина: ", this._a);
    console.log("- Ширина: ", this._b);
    console.log("- Тупий кут: ", this._alpha);
    console.log("- Гострий кут: ", this._beta);
    console.log("- Сума довжин сторін: ", 2 * (this._a + this._b));
    console.log("- Площа: ", this._a * Math.sin(this._alpha * Math.PI / 180) * this._b);
  }
}

const squareObj = new Square(5);
squareObj.info();

const rectangleObj = new Rectangle(4, 6);
rectangleObj.info();

const rhombusObj = new Rhombus(7, 15, 40);
rhombusObj.info();

const parallelogramObj = new Parallelogram(8, 5, 20, 30);
parallelogramObj.info();

Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();
