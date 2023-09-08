const Application = PIXI.Application

let app = new Application({
    width: innerWidth,
    height: innerHeight,
});

document.body.appendChild(app.view)

let sprite = PIXI.Sprite.from("./assets/Character_Card.webp")
sprite.scale.set(.15);

app.stage.addChild(sprite)


app.ticker.add((delta) => {

})