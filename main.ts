input.onButtonPressed(Button.A, function () {
    Pixel.showColor(neopixel.colors(NeoPixelColors.Red))
})
input.onButtonPressed(Button.AB, function () {
    Pixel.clear()
    Pixel.show()
})
input.onButtonPressed(Button.B, function () {
    Pixel.showColor(neopixel.colors(NeoPixelColors.Indigo))
})
let Pixel: neopixel.Strip = null
Pixel = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
