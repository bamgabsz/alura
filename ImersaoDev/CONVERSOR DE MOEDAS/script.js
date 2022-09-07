function Converter() {
    let valorElemento = document.getElementById("valor");
    let valor = valorElemento.value;
    let valorEmDolarNumerico = parseFloat(valor);
    console.log(valorEmDolarNumerico);

    var valorEmReal = valorEmDolarNumerico * 5; 
    console.log(valorEmReal);
    
    let elementoValorConvertido = document.getElementById("valorConvertido");
    let valorConvertido = "O resultado em real é R$ " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido
}

// Desafios 💫
// 1 - fazer mais botoes para conversão de outras moedas! 
// 2 - fazer um conversor de km para anos luz
// 3 - conversor de temperatura
// 4 - fazer em bitcoin e aparecer em baixo da moeda
