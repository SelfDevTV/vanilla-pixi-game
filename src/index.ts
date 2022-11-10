import "./styles.css";
import { Application, Sprite, Texture } from "pixi.js";
import GameManager from "./GameManager";

const app = new Application({
  backgroundColor: "orange",
  width: window.innerWidth,
  height: window.innerHeight,
});

const resizeWindow = () => {
  app.screen.width = window.innerWidth;
  app.screen.height = window.innerHeight;
};

app.stage;

window.addEventListener("resize", resizeWindow);

document.body.appendChild(app.view as unknown as Node);

const game = new GameManager(app.stage);
game.draw();

console.log(game.keyboard.moveDirection);

const ticker = app.ticker.add(game.updateLoop);
console.log(ticker);
