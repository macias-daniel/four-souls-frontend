const Application = PIXI.Application
const Container = PIXI.Container
const Sprite = PIXI.Sprite
const Texture = PIXI.Texture

let app = new Application({
    width: innerWidth,
    height: innerHeight,
});

document.body.appendChild(app.view)

const CHARACTER_CARD_BACK = Texture.from("./assets/Character_Card.webp")

const playerBoard = new Container();

app.stage.addChild(playerBoard);


for (let i = 0; i < 3; i++) {

    const cardBack = new Sprite(CHARACTER_CARD_BACK)
    cardBack.scale.set(.15)
    cardBack.x = i * 10
    playerBoard.addChild(cardBack)
}



// let cardScale = .15

// let card = PIXI.Sprite.from("./assets/Character_Card.webp")

// card.scale.set(.15);

// card.on("mouseover", (event) => {

// })


// card.eventMode = "dynamic"

// app.stage.addChild(card)



// app.ticker.add((delta) => {
//     cardScale = .25
//     card.rerender()
// })