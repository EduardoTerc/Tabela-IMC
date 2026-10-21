let peso = parseFloat(prompt("Digite o seu peso (Kg): "))
let altura = prompt("Digite a sua altura (m): ")
let imc = 0

function calcularIMC(peso, altura){
    return peso / (altura * altura)
}

function classificarIMC(imc){
    if(imc >= 40){
        alert("Obesidade grau 3")
} else if (imc >= 35){
        alert("Obesidade grau 2")
} else if(imc >=30){
        alert("Obesidade grau 1")
} else if(imc >= 25){
        alert("Sobrepeso")
} else if (imc >= 18,5){
        alert("Peso normal")
} else{
        alert("Baixo peso")
}
}
console.log(calcularIMC(peso, altura))
classificarIMC(imc)