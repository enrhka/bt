def on_button_pressed_a():
    while True:
        if not (led.point(1, 1)):
            basic.show_icon(IconNames.HEART)
        else:
            break
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    if not (led.point(1, 1)):
        while True:
            basic.show_icon(IconNames.HEART)
    else:
        basic.clear_screen()
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    pass
basic.forever(on_forever)
