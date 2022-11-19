let input = document.getElementById('txtAltura')

input.addEventListener('keypress', () => {
    let inputLength = input.value.length

    if (inputLength === 1) {
        input.value += '.'
    }
})

let altura = document.getElementById('txtAltura');
let peso =  document.getElementById('txtPeso');
let res = document.getElementById('res');

function avaliar() {
    if (altura.value.length == 0 || peso.value.length == 0) {
        window.alert ('[ERRO] Faltam dados!')
    } else {
        let alt = (altura.value);
        let Peso = (peso.value);
        let imc = (Peso / (alt * alt))
        res.innerHTML = (`Seu IMC é ${imc.toFixed(1).replace('.', ',')} <br></br>`)

        if (imc < 16.0) {
            res.innerHTML += (`<strong>Magreza GRAVE!</strong>`)
            
        } else if (imc >= 16.0 && imc <= 17.0) {
            res.innerHTML += (`<strong>Magreza Moderada.</strong>`)

        } else if (imc < 18.5) {
            res.innerHTML += (`<strong>Magreza leve.</strong>`)

        } else if (imc >= 18.5 && imc <= 25.0) {
            res.innerHTML += (`<strong>Saudável.</strong>`)

        } else if (imc < 30.0) {
            res.innerHTML += (`<strong>Sobrepeso.</strong>`)

        } else if (imc < 35.0) {
            res.innerHTML += (`<strong>Obesidade Grau I</strong>`)

        } else if (imc < 40.0) {
            res.innerHTML += (`<strong>Obesidade Grau II (severa)</strong>`)
            
        } else if (imc >= 40.0) {
            res.innerHTML += (`<strong>Obesidade Grau III (mórbida)</strong>`)
            
        }
    }
}
