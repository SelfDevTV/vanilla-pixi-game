import "./styles.css";
import { Application, Sprite, Texture } from "pixi.js";

const app = new Application({
  backgroundColor: "orange",
});

document.body.appendChild(app.view as unknown as Node);

const player = Sprite.from(Texture.WHITE);

app.stage.addChild(player);
