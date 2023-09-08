const Application = PIXI.Application
const Container = PIXI.Container
const Sprite = PIXI.Sprite
const Texture = PIXI.Texture

let app = new Application({
    width: innerWidth,
    height: innerHeight,
});

document.body.appendChild(app.view)


// Textures
const CHARACTER_CARD_BACK = Texture.from("./assets/Character_Card.webp")
const PLAYER_CHARACTER = Texture.from("./assets/character_issac.webp")
const CHARACTER_ITEM = Texture.from("./assets/character_item_d6.webp")

const CARD_SCALE = .15;

// Player Board
const playerBoard = new Container();
app.stage.addChild(playerBoard);


// Player Character Cards
const playerCharacterCards = new Container();
playerBoard.addChild(playerCharacterCards)

const playerCharacter = new Sprite(PLAYER_CHARACTER)
playerCharacter.scale.set(CARD_SCALE)

const characterItem = new Sprite(CHARACTER_ITEM)
characterItem.scale.set(CARD_SCALE)
characterItem.y = 100

playerCharacterCards.addChild(playerCharacter);
playerCharacterCards.addChild(characterItem)


// const cardBack = new Sprite(CHARACTER_CARD_BACK)



// playerCharacterCards.addChild(cardBack)




// for (let i = 0; i < 3; i++) {

//     const cardBack = new Sprite(CHARACTER_CARD_BACK)
//     cardBack.scale.set(.15)
//     cardBack.x = i * 100
//     playerBoard.addChild(cardBack)

// }



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