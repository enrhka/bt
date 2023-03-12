input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    g = 0
    music.playTone(131, music.beat(BeatFraction.Half))
})
input.onButtonPressed(Button.A, function () {
    if (g == 0) {
        g = 1
    } else {
        g = 0
    }
})
input.onSound(DetectedSound.Loud, function () {
    g = 1
    music.playTone(523, music.beat(BeatFraction.Half))
})
let g = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
g = 0
basic.forever(function () {
    if (g == 1) {
        basic.showIcon(IconNames.Heart)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(200)
    } else {
        basic.clearScreen()
    }
})
