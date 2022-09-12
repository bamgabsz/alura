var rafa = { nome: "rafa", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 }
var paulo = { nome: "paulo", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 }
var gui = { nome: "gui", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 }

function CalculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos;
}

rafa.pontos = CalculaPontos(rafa);
paulo.pontos = CalculaPontos(rafa);

var jogadores = [rafa, paulo, gui]


function exibeJogadoresNaTela(jogadores) {
    var elemento = "";
    for (let i = 0; i < jogadores.length; i++) {
        elemento += "<tr><td>" + jogadores[i].nome + "</td>"
        elemento += "<td>" + jogadores[i].vitorias + "</td>"
        elemento += "<td>" + jogadores[i].empates + "</td>"
        elemento += "<td>" + jogadores[i].derrotas + "</td>"
        elemento += "<td>" + jogadores[i].pontos + "</td>"
        elemento += '<td><button onClick="adicionarVitoria(' + i + ')">Vitória</button></td>'
        elemento += '<td><button onClick="adicionarEmpate(' + i + ')">Empate</button></td>'
        elemento += '<td><button onClick="adicionarDerrota(' + i + ')">Derrota</button></td></tr>'
    }

    var tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = CalculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = CalculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrotas++;
    jogador.pontos = CalculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}
