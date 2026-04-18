// Reads the IR button variable to see if any of them match the button to make the robots LED's change color.
function Color () {
    if (value == 22) {
        color = "Red"
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.red1)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.red1)
    } else if (value == 25) {
        color = "Green"
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.green1)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.green1)
    } else if (value == 13) {
        color = "Blue"
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.blue1)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.blue1)
    } else if (value == 12) {
        color = "Cyan"
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.cyan)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.cyan)
    } else if (value == 24) {
        color = "Purple"
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.purple)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.purple)
    } else if (value == 94) {
        color = "White"
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.white)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.white)
    } else if (value == 8) {
        color = "Yellow"
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.yellow)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.yellow)
    } else if (value == 64) {
        // If the LED's are on, turn them off. But if they are off, turn them back to their original colors
        if (onoff) {
            onoff = false
            MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.black)
            MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.black)
        } else {
            onoff = true
            Color_On()
        }
    }
}
// When OK is pressed again, turn the lights on to what it was last saved to.
function Color_On () {
    if (color == "Red") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.red1)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.red1)
    } else if (color == "Green") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.green1)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.green1)
    } else if (color == "Blue") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.blue1)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.blue1)
    } else if (color == "Cyan") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.cyan)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.cyan)
    } else if ((0 as any) == ("Purple" as any)) {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.purple)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.purple)
    } else if (color == "White") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.white)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.white)
    } else if (color == "Yellow") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.yellow)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.yellow)
    } else {
        if (onoff) {
            onoff = false
            MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.black)
            MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.black)
        } else {
            onoff = true
            Color_On()
        }
    }
}
// Reads the IR button variable to see if any of them match the button to make the robot move.
function Motor () {
    if (value == 70) {
        MiniCar.motor(Motorlist.M1, Direction1.Forward, 100)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, 100)
    } else if (value == 68) {
        MiniCar.motor(Motorlist.M1, Direction1.Forward, 70)
        MiniCar.motor(Motorlist.M2, Direction1.Backward, 70)
    } else if (value == 67) {
        MiniCar.motor(Motorlist.M1, Direction1.Backward, 70)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, 70)
    } else if (value == 21) {
        MiniCar.motor(Motorlist.M1, Direction1.Backward, 100)
        MiniCar.motor(Motorlist.M2, Direction1.Backward, 100)
    } else {
        MiniCar.motor(Motorlist.M1, Direction1.Forward, 0)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, 0)
    }
}
let color = ""
let value = 0
let onoff = false
// Set up a conversation with P16 and the IR Reciver
irRemote.connectInfrared(DigitalPin.P16)
// On start, the lights are off.
onoff = false
basic.forever(function () {
    // When a button is pressed, grab its output value.
    value = irRemote.returnIrButton()
    Motor()
    Color()
})
