basic.showLeds(`
    . . . . .
    # # # . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    # # # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    # # # . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # # # . .
    `)
basic.showLeds(`
    . . # # .
    . . . # .
    . . . . .
    . . . . .
    # # # . .
    `)
basic.showLeds(`
    . . . . .
    . . # # .
    . . . # .
    . . . . .
    # # # . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # # .
    . . . # .
    # # # . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . # # .
    # # # # .
    `)
basic.showLeds(`
    . . . . #
    . . . . .
    . . . . .
    . . # # .
    # # # # .
    `)
basic.showLeds(`
    . . . . .
    . . . . #
    . . . . #
    . . # # .
    # # # # .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . #
    . . # # #
    # # # # .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . # # #
    # # # # #
    `)
basic.showLeds(`
    . # . # .
    . # # . .
    . # . # .
    . . # # #
    # # # # #
    `)
basic.pause(1000)
basic.clearScreen()
basic.showLeds(`
    # # # # #
    . . . . #
    # # # # #
    . . . . #
    # # # # #
    `)
basic.pause(200)
basic.showLeds(`
    # # # # #
    . . . . #
    # # # # #
    # . . . .
    # # # # #
    `)
basic.pause(200)
basic.showLeds(`
    . . . . #
    . . . # #
    . . # . #
    . . . . #
    . . . . #
    `)
basic.pause(200)
basic.clearScreen()
let sprite = game.createSprite(2, 0)
let meteoroid = game.createSprite(sprite.get(LedSpriteProperty.X), 0)
meteoroid.turn(Direction.Right, 90)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        sprite.move(-1)
    }
    basic.pause(50)
    if (input.buttonIsPressed(Button.B)) {
        sprite.move(1)
    }
    basic.pause(50)
    if (input.buttonIsPressed(Button.AB)) {
        game.pause()
        basic.pause(500)
        if (input.buttonIsPressed(Button.AB)) {
            game.resume()
        }
    }
})
basic.forever(function () {
    meteoroid.move(1)
    basic.pause(400)
    if (meteoroid.isTouchingEdge()) {
        meteoroid.set(LedSpriteProperty.X, sprite.get(LedSpriteProperty.X))
        meteoroid.set(LedSpriteProperty.Y, 0)
    }
    if (meteoroid.isTouching(sprite)) {
        game.gameOver()
    }
})
