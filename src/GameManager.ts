import Fruit from "./Fruit";
import Player from "./Player";
import { Container, DisplayObject } from "pixi.js";
import Keyboard, { moveDirectionType } from "./Keyboard";

class GameManager {
  player: Player;
  fruits: Fruit[] = [];
  stage: Container<DisplayObject>;
  keyboard: Keyboard;
  moveDirection: moveDirectionType;
  time: number = 0;

  constructor(stage: Container<DisplayObject>) {
    this.player = new Player(0, 0, 16, 16);
    this.keyboard = new Keyboard(this.keyboardListener);
    const fruit = new Fruit();

    this.stage = stage;
    this.fruits.push(fruit);
    this.init();
    this.moveDirection = this.keyboard.moveDirection;
  }

  keyboardListener = (moveDirection: moveDirectionType) => {
    this.moveDirection = moveDirection;
  };

  init = () => {
    this.stage.addChild(this.player.sprite);
    this.fruits.forEach((fruit: Fruit) => {
      this.stage.addChild(fruit.sprite);
      console.log("fruit position: ", fruit.getPositionInPixel());
    });
  };

  setNewMovePositionOnPlayer = () => {
    this.player.movePosition = this.keyboard.getCurrentMoveDirection()!;
  };

  moveToPosition = () => {
    const playerPos = this.player.movePosition;
    console.log(playerPos);

    if (playerPos === "moveForward") {
      this.player.sprite.y -= this.player.height!;
    } else if (playerPos === "moveBackward") {
      this.player.sprite.y += this.player.height!;
    } else if (playerPos === "moveLeft") {
      this.player.sprite.x -= this.player.width!;
    } else if (playerPos === "moveRight") {
      this.player.sprite.x += this.player.width!;
    }
  };

  draw = () => {
    // Update created sprites
    if (this.fruits.length > 0 && this.player.collidesWith(this.fruits[0])) {
      // Add the fruit to the players body and destroy it, generate a new one
    }

    this.setNewMovePositionOnPlayer();
    this.moveToPosition();
  };

  updateLoop = (delta: number) => {
    if (this.time > 30) {
      this.draw();
      this.time = 0;
    }

    this.time += delta;
  };
}

export default GameManager;
