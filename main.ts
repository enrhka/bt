input.onButtonPressed(Button.B, function () {
    if (!(led.point(1, 1))) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.clearScreen()
    }
})
