function move_right (mySprite3: Sprite) {
    grid.move(mySprite3, -1, 0)
    pause(200)
}
function solução () {
	
}
function move_left (mySprite4: Sprite) {
    grid.move(mySprite4, 1, 0)
    pause(200)
}
function move_down (mySprite: Sprite) {
    grid.move(mySprite, 0, 1)
    pause(200)
}
function move_up (mySprite2: Sprite) {
    grid.move(mySprite2, 0, -1)
    pause(200)
}
let tarefa = "Tarefa: " + ""
scene.setBackgroundImage(assets.image`tabuleiro`)
tiles.setCurrentTilemap(tilemap`tabuleiro_tiles`)
let mySprite5 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
mySprite5.setStayInScreen(true)
grid.place(mySprite5, tiles.getTileLocation(0, 0))
game.showLongText(tarefa, DialogLayout.Bottom)
solução()
