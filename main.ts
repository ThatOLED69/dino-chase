info.onCountdownEnd(function on_countdown_end() {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function on_on_overlap(sprite: Sprite, otherSprite: Sprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function on_on_overlap2(sprite2: Sprite, otherSprite2: Sprite) {
    otherSprite2.destroy()
    info.changeLifeBy(-1)
})
let projectile : Sprite = null
let projectile2 : Sprite = null
scene.setBackgroundImage(assets.image`
    Freeway
`)
scroller.scrollBackgroundWithSpeed(-50, 0)
let mySprite = sprites.create(assets.image`
    Mama
`, SpriteKind.Player)
controller.moveSprite(mySprite, 0, 100)
mySprite.setStayInScreen(true)
info.startCountdown(15)
animation.runImageAnimation(mySprite, assets.animation`
        Mama Moving
    `, 100, true)
forever(function on_forever() {
    
    projectile2 = sprites.createProjectileFromSide(assets.image`
        Tourist
    `, -90, 0)
    projectile2.y = randint(15, 115)
    projectile2.setKind(SpriteKind.Enemy)
    animation.runImageAnimation(projectile2, assets.animation`
            Animated Tourist
        `, 100, true)
    pause(2100)
})
forever(function on_forever2() {
    
    projectile = sprites.createProjectileFromSide(assets.image`
        Baby
    `, -90, 0)
    projectile.y = randint(15, 115)
    animation.runImageAnimation(projectile, assets.animation`
            Animated Baby
        `, 100, true)
    pause(1000)
})
