import move from "../action/move";
import spellingCheck from "../checker/spellingCheck";
class Car {
  #position;
  #name;

  constructor(name) {
    spellingCheck(name);
    this.#name = name;
    this.#position = 0;
  }

  move() {
    return move();
  }
}
