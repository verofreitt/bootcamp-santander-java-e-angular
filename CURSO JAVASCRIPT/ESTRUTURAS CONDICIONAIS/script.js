var jogardor1 = 1;
var jogador2 = 0;
var placar;

// if ternario
jogardor1 != -1 && jogador2 != -1
  ? console.log("Os jogadores são validos")
  : console.log("os jogadores são invalidos");

// usanso if
if (jogardor1 > 0 && jogador2 == 0) {
  console.log("jogador 1 marcou ponto");
  placar = jogardor1 > jogador2;
}
// usando else if
else if (jogador2 > 0 && jogardor1 == 0) {
  console.log("jogador 2 marcou ponto");
  placar = jogador2 > jogardor1;
}
//usando else
else {
  console.log("ninguem marcou ponto");
}

//usando switch
switch (placar) {
  case (placar = jogardor1 > jogador2):
    console.log("jogador 1 ganhou");
    break;
  case (placar = jogardor2 > jogador1):
    console.log("jogador 2 ganhou");
    break;
    default:
        console.log('ninguém ganhou')
}

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5']

let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'}
// for executa uma instruçaõ até que ela seja falsa
for (let indice = 0; indice < array.length; indice++) {
    console.log(indice)
}

// for/in executa repetição a partir  de uma propriedade
//com array
for (let i in array) {
    console.log(i)
}

//com object 
for(i in object) {
    console.log(i)
}

// for/of - executa repetição a partir do valor
// com array
for (i of array) {
    console.log(i);
}

// com object
for (i of object.propriedade1) {
    console.log(i)
}


var a = 0;
while (a < 10) {
    a++;
    console.log(a);
}

do {
    a++;
    console.log(a)
} while (a < 10)