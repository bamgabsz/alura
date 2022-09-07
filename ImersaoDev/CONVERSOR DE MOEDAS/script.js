function Converter() {
    let valorElemento = document.getElementById("valor");
    let valor = valorElemento.value;
    let valorEmDolarNumerico = parseFloat(valor);
    console.log(valorEmDolarNumerico);

    var valorEmReal = valorEmDolarNumerico * 5.24;
    valorEmReal = valorEmReal.toFixed(2);
    console.log(valorEmReal);

    let elementoValorConvertido = document.getElementById("valorConvertido");
    let valorConvertido = "O resultado em real é R$ " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido

}

function Euro() {
    let valorElemento = document.getElementById("valor");
    let valor = valorElemento.value;
    let valorEmEuro = parseFloat(valor);

    var valorEmReal = valorEmEuro * 5.25;
    valorEmReal = valorEmReal.toFixed(2);

    let elementoValorConvertido = document.getElementById("valorConvertido");
    let valorConvertido = "O resultado em real é R$ " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido
}

function Kelvins() {
    let valorElemento = document.getElementById("valor");
    let valor0 = valorElemento.value
    let valor = parseFloat(valor0);

    let kelvins = valor + 273;

    let elementoValorConvertido = document.getElementById("valorConvertido");
    let valorConvertido = "O resultado de Celsius para Kelvins é: " + kelvins;
    elementoValorConvertido.innerHTML = valorConvertido;
}

function AnosLuz() {
    let valorElemento = document.getElementById("valor");
    let valor = valorElemento.value;
    let convertendo = parseFloat(valor);

    let anosLuz = convertendo * 0.00000000000010570;
    let result = anosLuz.toFixed(2);

    let elementoValorConvertido = document.getElementById("valorConvertido");
    let valorConvertido = "O resultado de Km para Anos luz é: " + anosLuz;
    elementoValorConvertido.innerHTML = valorConvertido;



}

// Desafios 💫
// 1 - fazer mais botoes para conversão de outras moedas! ✅
// 2 - fazer um conversor de km para anos luz ✅
// 3 - conversor de temperatura ✅
// 4 - fazer em bitcoin e aparecer em baixo da moeda 
