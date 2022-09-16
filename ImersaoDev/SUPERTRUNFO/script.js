var cartaPaulo = {
    nome:"Seiya de Pegaso",
    imagem: "https://i.pinimg.com/originals/c2/1a/ac/c21aacd5d092bf17cfff269091f04606.jpg",
    atributos: {
    ataque: 80,
    defesa: 60,
    magia: 90,
    }
  }
  
  var cartaRafa = {
    nome: "Bulbasauro",
    imagem: "https://i.pinimg.com/originals/3d/f2/db/3df2dbe82ab0a446ef57bada79b5b277.png",
    atributos: {
    ataque: 70,
    defesa: 65,
    magia: 85,
    }
  }
  
  var cartaGui = {
    nome: "Lord Darth Vader",
    imagem: "https://www.denofgeek.com/wp-content/uploads/2017/03/darth-vader-1_0.jpg?fit=1947%2C1274",
    atributos: {
    ataque: 88,
    defesa: 62,
    magia: 90,
    }
  }
  
  
   
  var cartaMaquina
  var cartaJogador
  var cartas = [cartaPaulo, cartaRafa, cartaGui]
    
  var pontosJogador = 0
  var pontosMaquina = 0
  atualizaPlacar()
  atualizaQuantidadeCartas()
  
  function atualizaQuantidadeCartas() {
    var divQuantidadeCartas = document.getElementById('quantidade-cartas')
    var html = "Quantidade de cartas restantes: " + cartas.length
    
    divQuantidadeCartas.innerHTML =  html
  }
  
  function atualizaPlacar() {
    var divPlacar = document.getElementById('placar')
    var html = "Jogador " + pontosJogador + " / " + pontosMaquina + " Máquina" 
    divPlacar.innerHTML = html
  }
  
  function exibirApenasMolduraCartaMaquina() {
    
    var molduraCartaMaquina = document.getElementById("carta-maquina");
      
    molduraCartaMaquina.innerHTML="<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style=' width: inherit; height: inherit; position: absolute;'>"
          
    molduraCartaMaquina.style.backgroundImage= "";
    
    var divResultado = document.getElementById("resultado")
    divResultado.innerHTML = " "
    
    }
  
  /* assossiada com o trecho comentada em jogar(), substituindo a exibirApenasMolduraCartaMaquina():
  
  function proximaRodada() {
    var divCartas = document.getElementById('cartas')
    
    divCartas.innerHTML = ` <div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`
    
    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnProximaRodada').disabled = true
    
    var divResultado = document.getElementById("resultado")
    divResultado.innerHTML = " "
    
  }
  */
    
  function sortearCarta() {
      
      var numeroCartaMaquina = parseInt(Math.random()*cartas.length)
      cartaMaquina = cartas[numeroCartaMaquina]
      cartas.splice(numeroCartaMaquina, 1)
     
      var numeroCartaJogador = parseInt(Math.random()*cartas.length)
      cartaJogador = cartas[numeroCartaJogador]
      cartas.splice(numeroCartaJogador, 1)
    
      document.getElementById('esolher-atributo')
      
      document.getElementById('btnSortear').disabled = true
      document.getElementById('btnJogar').disabled = false
      
      exibirApenasMolduraCartaMaquina() //comentar esta functio quando ativar proximaRodada()
      exibeCartaJogador()    
    }
  
  function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
    divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""
   
    for(var atributo in cartaJogador.atributos) {
      opcoesTexto += 
          "<label for='id_" + atributo +"'>" +
              "<input type='radio' id='id_" + atributo +"' name='atributo' value='" + atributo + "'>" + 
                  atributo + " " + cartaJogador.atributos[atributo] +
          "</label>" + 
          "<br>"
    }
     
    var html = "<div id='opcoes' class='carta-status'>"
    
    divCartaJogador.innerHTML = moldura+nome+html+opcoesTexto+'</div>'
  }
    
  function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for(var i = 0; i < radioAtributo.length; i++) {
      if(radioAtributo[i].checked) {
        return radioAtributo[i].value
      }
    }
  }
  
  function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()
    if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
      htmlResultado = '<p class="resultado-final">Venceu</p>'
      pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
      htmlResultado = '<p class="resultado-final">Perdeu</p>'
      pontosMaquina++
    } else {
      htmlResultado = '<p class="resultado-final">Empatou</p>'
    }
  
    if(cartas.length == 0) {
      alert("Fim do Jogo")
      if(pontosJogador > pontosMaquina) {
        htmlResultado = '<p class="resultado-final">Você venceu! Parabéns</p>' 
      }  else if (pontosMaquina > pontosJogador) {
           htmlResultado = '<p class="resultado-final">Você perdeu! Tente novamente</p>'
         } else {
           htmlResultado = '<p class="resultado-final">Empatou</p>'
         }
    } else {
      document.getElementById('btnSortear').disabled = false
    }
    
    divResultado.innerHTML = htmlResultado
    
  /* 
    limpa tela com função passada pelos instrutores, assossiada com proximaRodada():
  
    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnProximaRodada').disabled = false
  */  
    
    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnJogar').disabled = true
    
    exibeCartaMaquina()
    atualizaPlacar()
    atualizaQuantidadeCartas()
  }
  
  function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
    divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""
    
    for(var atributo in cartaMaquina.atributos) {
      opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }
    
    var html = "<div id='opcoes' class='carta-status'>"
    
    divCartaMaquina.innerHTML = moldura+nome+html+opcoesTexto+'</div>'
  }
  
  /*regras a vir: 
    var numeroCartasCada = input("Olá Humano, por favor escolha entre 1 e 5 para definir o número de cartas de cada jogador :")
    alert("Atenção Humano: este jogo é decidido ao final de " + numeroCartasCada + "rodadas")
    sorteiaCartasMaquina();
    sorteiaCartaJogador();
    
    segue o jogo
    
    aramazena venceu = 3 / perdeu = -2 / empatou = 1
    
    ao final das "numeroCartasCada" jogadas:
    
    muda tela document.write(você [venceu, perdeu] com X pontos)
    exibir sorteiaCartaJogador.value
  
  */