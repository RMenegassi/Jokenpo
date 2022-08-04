function sortear(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calcularEscolha(jogadorEscolha, computadorEscolha){
    if(jogadorEscolha == 1 && computadorEscolha == 1){
        return 0
    }
    else if(jogadorEscolha == 1 && computadorEscolha == 2){
        return 2
    }
    else if(jogadorEscolha == 1 && computadorEscolha == 3){
        return 1
    }

    if(jogadorEscolha == 2 && computadorEscolha == 1){
        return 1
    }
    else if(jogadorEscolha == 2 && computadorEscolha == 2){
        return 0
    }
    else if(jogadorEscolha == 2 && computadorEscolha == 3){
        return 2
    }

    if(jogadorEscolha == 3 && computadorEscolha == 1){
        return 2
    }
    else if(jogadorEscolha == 3 && computadorEscolha == 2){
        return 1
    }
    else if(jogadorEscolha == 3 && computadorEscolha == 3){
        return 0
    }
}

function somarPontosJogador(){
    pontosJogador++;
    document.querySelector("#jogador-pontos").innerHTML = pontosJogador;
}

function somarPontosComputador(){
    pontosComputador++;
    document.querySelector("#computador-pontos").innerHTML = pontosComputador;
}

function selecionar(tipo, escolha){
    document.querySelector(`#${tipo}-escolha${escolha}`).classList.add("selecionado");
}

function deSelecionar(tipo, escolha){
    document.querySelector(`#${tipo}-escolha${escolha}`).classList.remove("selecionado");
}

function mensagem(texto){
    document.querySelector("#mensagem").innerHTML = texto;
}

function definirNomeJogador(nome){
    document.querySelector('#jogador-nome').innerHTML = nome;
}

function jogar(escolha){
    let computadorEscolha = sortear(1, 3);
    let jogadorEscolha = escolha;
    selecionar('computador',computadorEscolha);

    let ganhador = calcularEscolha(jogadorEscolha, computadorEscolha);
    
    if(ganhador == 0){
        mensagem("empate");
    }
    else if (ganhador == 1){
        mensagem(`Ponto para ${jogadorNome}`);
        somarPontosJogador();
    }
    else if (ganhador == 2){
        mensagem(`Ponto para o Computador`);
        somarPontosComputador();
    }

    setTimeout(function() { 
        deSelecionar("computador", computadorEscolha);
        mensagem(`${jogadorNome} escolha uma opção acima`)
    },1500);
}

document.querySelector('#jogador-escolha1').onclick = function(){
    jogar(1);
}

document.querySelector('#jogador-escolha2').onclick = function(){
    jogar(2);
}

document.querySelector('#jogador-escolha3').onclick = function(){
    jogar(3);
}

let jogadorNome = prompt("Qual é o seu nome?");
let pontosJogador = 0;
let pontosComputador = 0;

definirNomeJogador(jogadorNome);

document.querySelector('#mensagem').innerHTML = `Bem vindo ${jogadorNome}, está preparado? Escolha uma opção acima...`;

