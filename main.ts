let imc = 0
let estatura = 0
let peso = 0
basic.forever(function () {
    imc = 0
    estatura = 180
    peso = 74
    if (input.buttonIsPressed(Button.A)) {
        peso = peso + 1
        basic.showNumber(peso)
    } else if (input.buttonIsPressed(Button.B)) {
        peso += peso - 1
        basic.showNumber(peso)
    } else if (input.buttonIsPressed(Button.AB)) {
    	
    } else if (input.isGesture(Gesture.Shake)) {
    	
    }
})
