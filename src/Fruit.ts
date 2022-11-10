import { GameObject } from "./GameObject";

class Fruit extends GameObject {
  constructor(x?: number, y?: number, width?: number, height?: number) {
    super(x, y, width, height);
    this.generateRandomPosition();
    this.setSpritePosition();
  }
}

export default Fruit;
