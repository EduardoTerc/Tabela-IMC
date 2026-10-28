let peso = parseFloat(prompt("Digite o seu peso (Kg): "))
let altura = parseFloat(prompt("Digite a sua altura (m): "))
// let imc = calcularIMC(peso, altura)
gerarRelatorio(peso, altura)

function calcularIMC(peso, altura){
    let imc = peso / (altura * altura)
    return imc
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

function gerarRelatorio(peso, altura){
        let imc  = calcularIMC(peso, altura) 
        
    classificarIMC(imc)
}
