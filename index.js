let inputValor = document.getElementById("valor");
inputValor.focus();
let numeroSecreto = gerarNumeroSecreto()
let resultado = document.getElementById("resultado");

function gerarNumeroSecreto(){
    return parseInt(Math.random() * 26);
}

function reiniciar(){
    gerarNumeroSecreto();
    inputValor.value = "";
    resultado.innerHTML = "";
    inputValor.focus();
}

function chutar(){
    let valor = parseInt(inputValor.value);

    if(isNaN(valor)){
        resultado.innerHTML = `Você precisa digitar um número válido entre 0 e 25`
    } else if(valor == numeroSecreto){
        resultado.innerHTML = `Parabéns, você acertou!<br><button class="button" onclick="reiniciar()">Tente novamente</button>`
    } else if(valor < 0 || valor > 25){
        resultado.innerHTML = `Você precisa digitar um número entre 0 e 25`
    } else{
        resultado.innerHTML = (`Você errou! O número era ${numeroSecreto} <br> <button class="button" onclick="reiniciar()">Tente novamente</button>`);
    }

    inputValor.value = "";
    inputValor.focus();

}

