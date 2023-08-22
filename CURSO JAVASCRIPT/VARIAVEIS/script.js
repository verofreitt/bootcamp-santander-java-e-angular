// tipos primitivos

//booleano

var vOuF = false;
console.log(typeof(vOuF));

// number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer))

//string
var nome = "vevs"
console.log(typeof(nome))

// function
var funcao = function () {};
console.log(typeof(funcao))

// como declarar 
var variavel = "vevs";
variavel = "fruit"
console.log(typeof(variavel));

let variavel2 = "vevs";
variavel2 = "fruit"
console.log(variavel2)

const constante = "vevs"
console.log(constante)

// escopo

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = "local"
    console.log(escopoLocalInterno)
}

escopoLocal();

// atribuicao 
var atribuicao = "vevs";

// comparacao
var comparacao = '0' == 0;
console.log(comparacao);

// comparacao identica
var comparacao = '0' === 0;
console.log(comparacao);

// adicao 
var adicao = 1 + 1;
console.log(adicao)

// subtracao
var subtracao = 1 - 1;
console.log(subtracao)

// multiplicacao
var multiplicacao = 1 * 1;
console.log(multiplicacao)

// divisao real
var divisaoReal = 1 / 1;
console.log(divisaoReal)

// divisao inteira 
var divisaoInteira = 1 % 1;
console.log(divisaoInteira)

// potenciação
var potenciacao = 1 ** 1;
console.log(potenciacao)

// maior que 
var maiorQue = 5 > 2;
console.log(maiorQue);

// menor
var menoQue = 5 < 2;
console.log(menoQue);

// maior ou igual a
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual)

// menor ou igual a 
var menorOuIgual = 5 <= 2;
console.log(menorOuIgual);

var e = true && true;
console.log(e);

var ou = false || false;
console.log(ou);

var nao = !true;
console.log(nao)