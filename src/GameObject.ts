import { Sprite, Texture } from "pixi.js";

class GameObject {
  sprite: Sprite;
  x: number;
  y: number;
  width: number | undefined;
  height: number | undefined;
  asset: string | undefined;

  constructor(
    x?: number,
    y?: number,
    width?: number,
    height?: number,
    asset?: string
  ) {
    this.x = x | 0;
    this.y = y | 0;
    this.width = width;
    this.height = height;
    this.asset = asset;
    this.sprite = Sprite.from(Texture.WHITE);

    this.setSpritePosition();
  }

  setSpritePosition = () => {
    this.sprite.x = this.x;
    this.sprite.y = this.y;
  };

  getCurrentPosition = (): number | undefined => {
    console.log("hi");
    console.log(this.x, this.y);
    return this.x;
  };

  getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  getPositionInPixel = (): { x: number; y: number } => {
    const x = this.sprite.x / this.sprite.width;
    const y = this.sprite.y / this.sprite.height;
    return {
      x,
      y,
    };
  };

  generateRandomPosition = () => {
    const fitX = Math.floor(window.innerWidth / this.sprite.width);
    const fitY = Math.floor(window.innerHeight / this.sprite.height);
    this.x = this.getRandomInt(fitX) * this.sprite.width;
    this.y = this.getRandomInt(fitY) * this.sprite.height;
  };
}

export { GameObject };
