input.onButtonPressed(Button.A, function () {
    if (g == 0) {
        g = 1
    } else {
        g = 0
    }
})
let g = 0
g = 0
basic.forever(function () {
    if (g == 1) {
        basic.showIcon(IconNames.Heart)
        basic.pause(500)
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
