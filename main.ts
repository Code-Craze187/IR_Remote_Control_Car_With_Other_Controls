function Gear () {
    if (value == irRemote.irButton(IrButton.Star)) {
        // This is a test!
        if (gear) {
            gear = false
            geardir = 100
        } else {
            gear = true
            geardir = 250
        }
    }
}
// Reads the IR button variable to see if any of them match the button to make the robots LED's change color.
function Color () {
    if (value == irRemote.irButton(IrButton.Number_1)) {
        color = "Red"
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.red1)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.red1)
    } else if (value == irRemote.irButton(IrButton.Number_2)) {
        color = "Green"
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.green1)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.green1)
    } else if (value == irRemote.irButton(IrButton.Number_3)) {
        color = "Blue"
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.blue1)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.blue1)
    } else if (value == irRemote.irButton(IrButton.Number_4)) {
        color = "Cyan"
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.cyan)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.cyan)
    } else if (value == irRemote.irButton(IrButton.Number_5)) {
        color = "Purple"
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.purple)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.purple)
    } else if (value == irRemote.irButton(IrButton.Number_6)) {
        color = "White"
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.white)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.white)
    } else if (value == irRemote.irButton(IrButton.Number_7)) {
        color = "Yellow"
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.yellow)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.yellow)
    } else if (value == irRemote.irButton(IrButton.Ok)) {
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
    } else if (color == "Purple") {
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
    if (value == irRemote.irButton(IrButton.Up)) {
        MiniCar.motor(Motorlist.M1, Direction1.Forward, geardir)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, geardir)
    } else if (value == irRemote.irButton(IrButton.Left)) {
        MiniCar.motor(Motorlist.M1, Direction1.Backward, 70)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, 70)
    } else if (value == irRemote.irButton(IrButton.Right)) {
        MiniCar.motor(Motorlist.M1, Direction1.Forward, 70)
        MiniCar.motor(Motorlist.M2, Direction1.Backward, 70)
    } else if (value == irRemote.irButton(IrButton.Down)) {
        MiniCar.motor(Motorlist.M1, Direction1.Backward, geardir)
        MiniCar.motor(Motorlist.M2, Direction1.Backward, geardir)
    } else {
        MiniCar.motor(Motorlist.M1, Direction1.Forward, 0)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, 0)
    }
}
function TickCar () {
    Motor()
    Color()
    Gear()
}
let color = ""
let value = 0
let geardir = 0
let gear = false
let onoff = false
// Set up a conversation with P16 and the IR Reciver
irRemote.connectInfrared(DigitalPin.P16)
// On start, the lights are off.
onoff = false
// On start, the gear is normal.
gear = false
// On start, the gear is set to the normal value.
geardir = 100
basic.forever(function () {
    // When a button is pressed, grab its output value.
    value = irRemote.returnIrButton()
    // Call all of the functions to tell the car what to do.
    TickCar()
})
