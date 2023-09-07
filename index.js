// import { Application, Sprite } from 'pixi.js'

let app = new PIXI.Application({
    width: 500, height: 500
});

document.body.appendChild(app.view);

let sprite = PIXI.Sprite.from("./assets/Character_Card.webp")




app.stage.addChild(sprite)


let elapsed = 0.0;

app.ticker.add((delta) => {
    elapsed += delta;

})