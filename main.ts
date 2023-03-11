input.onButtonPressed(Button.A, function () {
    if (!(led.point(1, 1))) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.clearScreen()
    }
})
