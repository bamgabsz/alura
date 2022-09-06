var nome = "Gabriel";

var notaDoPrimeiroBimestre = 9.4;
var notaDoSegundoBimestre = 7.3;
var notaDoTerceiroBimestre = 4.6;
var notaDoQuartoBimestre = 2.3;


var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4;

// toFixed, fixa quais que vão ser as casas decimais habilitadas
var notaFixada = notaFinal.toFixed(1);

console.log("Bem-vindo " + nome);
console.log(notaFixada);

// Desafios 🔽

var celsius = 30;

var kelvins = celsius + 273;

var conversao = kelvins;

console.log("A conversão de " + celsius + " celsius para kelvins é: " + conversao + " Kelvins");

// outro desafio

console.log(((notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4).toFixed(1))

// outro desafio

var soma = notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre;

var divisao = soma / 4;

var total = divisao;

var totalFixado = total.toFixed(1);

console.log(totalFixado);