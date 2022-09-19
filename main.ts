let imc = 0
let estatura = 180
let peso = 74
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        imc = 10000 * peso / estatura ** 2
        basic.showNumber(imc)
        if (imc < 18.5) {
            basic.showString("Delgado")
        } else if (imc >= 18.5 && imc <= 25) {
            basic.showString("Saludable")
        } else if (imc > 25 && imc <= 30) {
            basic.showString("Sobrepeso")
        } else {
            basic.showString("Obesidad")
        }
    } else if (input.buttonIsPressed(Button.A)) {
        peso = peso + 1
        basic.showNumber(peso)
    } else if (input.buttonIsPressed(Button.B)) {
        peso = peso - 1
        basic.showNumber(peso)
    } else if (input.isGesture(Gesture.Shake)) {
        peso = 74
    }
})
