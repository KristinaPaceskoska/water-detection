let reading = 0
led.setBrightness(200)
let cutoff = 400
basic.showNumber(cutoff)
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P1, 1023)
    reading = pins.analogReadPin(AnalogPin.P0)
    pins.analogWritePin(AnalogPin.P1, 0)
    if (reading < cutoff) {
        basic.showIcon(IconNames.Umbrella)
        led.plotBarGraph(
        reading,
        1023
        )
        pins.servoWritePin(AnalogPin.P2, 90)
        basic.pause(2000)
        pins.servoWritePin(AnalogPin.P2, 40)
        basic.pause(2000)
    } else {
        basic.showIcon(IconNames.Heart)
        led.plotBarGraph(
        reading,
        1023
        )
        basic.pause(2000)
    }
})
