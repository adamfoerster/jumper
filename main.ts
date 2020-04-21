let projectile: Sprite = null
let reloading = 0
let preparing = 0
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . f f e e e e f 2 f . . . . 
. . f f e e e e f 2 2 2 f . . . 
. . f e e e f f e e e e f . . . 
. . f f f f e e 2 2 2 2 e f . . 
. . f e 2 2 2 f f f f e 2 f . . 
. f f f f f f f e e e f f f . . 
. f f e 4 4 e b f 4 4 e e f . . 
. f e e 4 d 4 1 f d d e f . . . 
. . f e e e e e d d d f . . . . 
. . . . f 4 d d e 4 e f . . . . 
. . . . f e d d e 2 2 f . . . . 
. . . f f f e e f 5 5 f f . . . 
. . . f f f f f f f f f f . . . 
. . . . f f . . . f f f . . . . 
`, SpriteKind.Player)
let direction = 1
scene.setBackgroundImage(img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 e 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c b b b b b c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c b b b b b c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c b b b b b c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c b b b b b c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b c c c c c c c c c c c c b b b b b c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 b b b b b b c c c c c c c c c c b b b b b c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c b b b b b c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c b b b b b c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c b b b b b c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c b b b b b c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c b b b b b c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c b b b b b c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c b b b b b c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c b b b b b c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c b b b b b c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c b b b b b 4 4 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 6 7 7 7 7 4 4 4 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c b b b b b c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 6 7 7 7 7 4 4 4 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c b b b b b c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c b b b b b c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c b b b b b c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c b b b b b c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 7 7 7 7 7 7 7 7 7 4 4 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 6 7 7 7 7 7 7 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 7 7 7 7 7 7 7 7 7 4 4 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 6 7 7 7 7 7 7 7 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 7 7 7 7 7 7 7 7 7 4 4 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c b b b b b c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c c c c c b b b b b c c c c b b b 
c b b b b b c c c c c c b b b b b c c c c c c b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c b b b b b c c c c c c b b b b b c c c c c c c c b b b b b c c c c c c c b b b b b c c c c b b b b b c c c c b b b 
c b b b b b c c c c c c b b b b b c c c c c c b b b b b c c c c c c c b b b b b c c c c c c c b b b b b c c c c c b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c b b b b b c c c c c c b b b b b c c c c c c c c b b b b b c c c c c c c b b b b b c c c c b b b b b c c c c b b b 
c b b b b b c c c c c c b b b b b c c c c c c b b b b b c c c c c c c b b b b b c c c c c c c b b b b b c c c c c b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c b b b b b c c c c c c b b b b b c c c c c c c c b b b b b c c c c c c c b b b b b c c c c b b b b b c c c c b b b 
c b b b b b c c c c c c b b b b b c c c c c c b b b b b c c c c c c c b b b b b c c c c c c c b b b b b c c c c c b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c b b b b b c c c c c c b b b b b c c c c c c c c b b b b b c c c c c c c b b b b b c c c c b b b b b c c c c b b b 
c b b b b b c c c c c c b b b b b c c c c c c b b b b b c c c c c c c b b b b b c c c c c c c b b b b b c c c c c b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c c b b b 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c b b b b b c c c c c b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c b b b b b c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c b b b b b c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c b b b b b c c c c c c c c c c c b b b b b 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c b b b b b c c c c c c c c c c c b b b b b 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 b b b b b c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c b b b b b c c c c c c c c c c c b b b b b 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 b b b b b c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 b b b b b c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 b b b b b c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 b b b b b c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c b b b b b c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c b b b b b c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c b b b b b c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c b b b b b c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c b b b b b c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c b b b b b c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c b b b b b c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c b b b b b c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c b b b b b c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c b b b b b c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 7 7 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 7 7 7 7 7 7 7 b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`)
game.onUpdate(function () {
    if (mySprite.x == 0) {
        mySprite.x = scene.screenWidth()
    } else {
        if (mySprite.x == scene.screenWidth()) {
            mySprite.x = 0
        } else {
            if (mySprite.y == 0) {
                mySprite.y = scene.screenHeight()
            } else {
                if (mySprite.y == scene.screenHeight()) {
                    mySprite.y = 0
                }
            }
        }
    }
})
game.onUpdate(function () {
    if (controller.left.isPressed() && preparing < 1) {
        mySprite.x += -1
        direction = 0
    }
    if (controller.right.isPressed() && preparing < 1) {
        mySprite.x += 1
        direction = 1
    }
    if (controller.up.isPressed() && preparing < 1) {
        mySprite.y += -1
        direction = 2
    }
    if (controller.down.isPressed() && preparing < 1) {
        mySprite.y += 1
        direction = 3
    }
})
game.onUpdate(function () {
    if (controller.left.isPressed() && preparing < 1) {
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . 
. . . f 2 f e e e e f f . . . . 
. . f 2 2 2 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e 2 2 2 2 e e f f f f . . . 
. f 2 e f f f f 2 2 2 e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d e e e e e f . . . 
. . . f e 4 e d d 4 f . . . . . 
. . . f 2 2 e d d e f . . . . . 
. . f f 5 5 f e e f f f . . . . 
. . f f f f f f f f f f . . . . 
. . . f f f . . . f f . . . . . 
`)
    }
    if (controller.right.isPressed() && preparing < 1) {
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . f f e e e e f 2 f . . . . 
. . f f e e e e f 2 2 2 f . . . 
. . f e e e f f e e e e f . . . 
. . f f f f e e 2 2 2 2 e f . . 
. . f e 2 2 2 f f f f e 2 f . . 
. f f f f f f f e e e f f f . . 
. f f e 4 4 e b f 4 4 e e f . . 
. f e e 4 d 4 1 f d d e f . . . 
. . f e e e e e d d d f . . . . 
. . . . f 4 d d e 4 e f . . . . 
. . . . f e d d e 2 2 f . . . . 
. . . f f f e e f 5 5 f f . . . 
. . . f f f f f f f f f f . . . 
. . . . f f . . . f f f . . . . 
`)
    }
    if (controller.up.isPressed() && preparing < 1) {
        mySprite.setImage(img`
. . . . . . f f f f . . . . . . 
. . . . f f e e e e f f . . . . 
. . . f e e e f f e e e f . . . 
. . f f f f f 2 2 f f f f f . . 
. . f f e 2 e 2 2 e 2 e f f . . 
. . f e 2 f 2 f f 2 f 2 e f . . 
. . f f f 2 2 e e 2 2 f f f . . 
. f f e f 2 f e e f 2 f e f f . 
. f e e f f e e e e f e e e f . 
. . f e e e e e e e e e e f . . 
. . . f e e e e e e e e f . . . 
. . e 4 f f f f f f f f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`)
    }
    if (controller.down.isPressed() && preparing < 1) {
        mySprite.setImage(img`
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
`)
    }
})
game.onUpdate(function () {
    reloading = reloading - 1
    if (controller.A.isPressed()) {
        if (reloading < 1) {
            music.pewPew.play()
            reloading = 30
            if (direction == 0) {
                projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . 4 4 4 5 5 4 4 4 . . . . 
. . . 3 3 3 3 4 4 4 4 4 4 . . . 
. . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
. . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
. 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
. 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
. 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
. 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
. . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
. . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
. . . 4 2 2 2 2 2 2 2 2 4 . . . 
. . . . 4 4 2 2 2 2 4 4 . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . . . . . . . . . . . . . 
`, mySprite, -90, 0)
            } else {
                if (direction == 1) {
                    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . 4 4 4 5 5 4 4 4 . . . . 
. . . 3 3 3 3 4 4 4 4 4 4 . . . 
. . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
. . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
. 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
. 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
. 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
. 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
. . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
. . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
. . . 4 2 2 2 2 2 2 2 2 4 . . . 
. . . . 4 4 2 2 2 2 4 4 . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . . . . . . . . . . . . . 
`, mySprite, 90, 0)
                } else {
                    if (direction == 2) {
                        projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . 4 4 4 5 5 4 4 4 . . . . 
. . . 3 3 3 3 4 4 4 4 4 4 . . . 
. . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
. . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
. 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
. 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
. 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
. 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
. . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
. . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
. . . 4 2 2 2 2 2 2 2 2 4 . . . 
. . . . 4 4 2 2 2 2 4 4 . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . . . . . . . . . . . . . 
`, mySprite, 0, -90)
                    } else {
                        if (direction == 3) {
                            projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . 4 4 4 5 5 4 4 4 . . . . 
. . . 3 3 3 3 4 4 4 4 4 4 . . . 
. . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
. . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
. 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
. 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
. 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
. 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
. . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
. . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
. . . 4 2 2 2 2 2 2 2 2 4 . . . 
. . . . 4 4 2 2 2 2 4 4 . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . . . . . . . . . . . . . 
`, mySprite, 0, 90)
                        }
                    }
                }
            }
        }
    }
})
game.onUpdate(function () {
    preparing = preparing - 1
    if (controller.B.isPressed()) {
        if (preparing < 1) {
            music.baDing.play()
            preparing = 15
            if (direction == 0) {
                mySprite.setImage(img`
. . . . . . . . . . . . . . . f f . . . . . . . 
. . . . . . . . . . . . . f f 2 f f f f . . . . 
. . . . . . . . . . . . f f 2 f e e e e f f . . 
. . . . . . . . . . . f f 2 2 f e e e e e f f . 
. . . . . . . . . . . f e e e e f f e e e e f . 
. . . . . . . . . . f e 2 2 2 2 e e f f f f f . 
. . . . . . . . . . f 2 e f f f f 2 2 2 e f f f 
. . . . . . . . . . f f f e e e f f f f f f f f 
. . . . . . . . . . f e e 4 4 f b e 4 4 e f e f 
. . . . . . . . . . . f e d d f b 4 d 4 e e f . 
. . . . . . . . . . c . e e d d d 4 e e e f . . 
. . . . c c c c c c c e d d e e 2 2 2 2 f . . . 
. . . . . d d d d d c e d d 4 4 e 4 4 4 f . . . 
. . . . . . c c c c c . e e e e f f f f f . . . 
. . . . . . . . . . c . . . f f f f f f f f . . 
. . . . . . . . . . . . . . . f f . . f f f . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
            } else {
                if (direction == 1) {
                    mySprite.setImage(img`
. . . . . . . f f . . . . . . . . . . . . . . . 
. . . . f f f f 2 f f . . . . . . . . . . . . . 
. . f f e e e e f 2 f f . . . . . . . . . . . . 
. f f e e e e e f 2 2 f f . . . . . . . . . . . 
. f e e e e f f e e e e f . . . . . . . . . . . 
. f f f f f e e 2 2 2 2 e f . . . . . . . . . . 
f f f e 2 2 2 f f f f e 2 f . . . . . . . . . . 
f f f f f f f f e e e f f f . . . . . . . . . . 
f e f e 4 4 e b f 4 4 e e f . . . . . . . . . . 
. f e e 4 d 4 b f d d e f . . . . . . . . . . . 
. . f e e e 4 d d d e e . c . . . . . . . . . . 
. . . f 2 2 2 2 e e d d e c c c c c c c . . . . 
. . . f 4 4 4 e 4 4 d d e c d d d d d . . . . . 
. . . f f f f f e e e e . c c c c c . . . . . . 
. . f f f f f f f f . . . c . . . . . . . . . . 
. . f f f . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
                } else {
                    if (direction == 2) {
                        mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f . . . . . . . 
. . . f f e e e e f f . . . . . 
. . f e e e f f e e e f . . . . 
. . f f f f 2 2 f f f f . . . . 
. f f e 2 e 2 2 e 2 e f f . . . 
. f e 2 f 2 f f f 2 f e f . . . 
. f f f 2 f e e 2 2 f f f . . . 
. f e 2 f f e e 2 f e e f . . . 
f f e f f e e e f e e e f f . . 
f f e e e e e e e e e e f d f . 
. . f e e e e e e e e f f b f . 
. . e f f f f f f f f 4 f b f . 
. . 4 f 2 2 2 2 2 e d d f c f . 
. . e f f f f f f e e 4 f f . . 
. . . f f f . . . . . . . . . . 
`)
                    } else {
                        if (direction == 3) {
                            mySprite.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . f f 2 2 f f . . . . . . . . . . . . . 
. . . f f f 2 2 2 2 f f f . . . . . . . . . . . 
. . f f f 2 2 2 2 2 2 f f f . . . . . . . . . . 
. . f f f 2 2 2 2 2 2 f f f . . . . . . . . . . 
. . f e e e e e e e e e e f f . . . . . . . . . 
. f f e 2 2 2 2 2 2 2 2 e f f . . . . . . . . . 
. f f f f f e e e e f f f f f . . . . . . . . . 
f d f e f b f 4 4 f b f e f f . . . . . . . . . 
f b f e 4 1 f d d f 1 4 e f . . . . . . . . . . 
f b f f e 4 d d d d 4 e f e . . . . . . . . . . 
f c f e f 2 2 2 2 2 f 4 e . . . . . . . . . . . 
. f f 4 f 4 4 5 5 4 f 4 e . . . . . . . . . . . 
. . . . f f f f f f d d e . . . . . . . . . . . 
. . . . . f f f f e d d e . . . . . . . . . . . 
. . . . . . . . . . e e . . . . . . . . . . . . 
. . . . . . . . . c c c . . . . . . . . . . . . 
. . . . . . . . c c 1 c c . . . . . . . . . . . 
. . . . . . . . . c 1 c . . . . . . . . . . . . 
. . . . . . . . . c 1 c . . . . . . . . . . . . 
. . . . . . . . . c 1 c . . . . . . . . . . . . 
. . . . . . . . . c 1 c . . . . . . . . . . . . 
`)
                        }
                    }
                }
            }
        }
    }
})
