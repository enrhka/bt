input.onLogoEvent(TouchButtonEvent.Touched, function () {
    if (g == 0) {
        g = 1
    } else {
        g = 0
    }
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
    while (input.isGesture(Gesture.TiltLeft)) {
        g = 1
    }
    while (input.isGesture(Gesture.TiltRight)) {
        g = 0
    }
})
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
        basic.pause(500)
    } else {
        basic.clearScreen()
    }
})
