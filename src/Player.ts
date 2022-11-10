import { GameObject } from "./GameObject";

class Player extends GameObject {
  moveSpeed: number;
  movePosition: string;
  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    asset?: string,
    moveSpeed?: number
  ) {
    super(x, y, width, height, asset);
    this.moveSpeed = moveSpeed! | 5;
    this.greet();
    this.movePosition = "moveRight";
  }

  collidesWith = (obj: GameObject) => {
    const pixelXPlayer = this.getPositionInPixel().x;
    const pixelYPlayer = this.getPositionInPixel().y;
    const pixelXObj = obj.getPositionInPixel().x;
    const pixelYObj = obj.getPositionInPixel().y;
    if (pixelXPlayer === pixelXObj && pixelYPlayer === pixelYObj) {
      return true;
    }
    return false;
  };

  greet = () => {
    console.log("good morning");
  };
}

export default Player;
