const numeroSecreto = parseInt(Math.random() * 26);

function chutar(){
    let resultado = document.getElementById("resultado");
    let valor = parseInt(document.getElementById("valor").value);
    if(isNaN(valor)){
        resultado.innerHTML = "Você precisa digitar um número válido entre 0 e 25"
    } else if(valor == numeroSecreto){
        resultado.innerHTML = "Parabéns, você acertou!"
    } else if(valor < 0 || valor > 25){
        resultado.innerHTML = "Você precisa digitar um número entre 0 e 25"
    } else{
        resultado.innerHTML = "Você errou! O número era " + numeroSecreto
    }

}