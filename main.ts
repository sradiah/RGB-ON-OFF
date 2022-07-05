input.onButtonPressed(Button.A, function () {
    is_On = !(is_On)
    if (is_On) {
        edubitRgbBit.shiftPixels(1)
    } else {
        edubitRgbBit.clear()
    }
})
let is_On = false
edubitRgbBit.shiftPixels(1)
basic.forever(function () {
	
})
