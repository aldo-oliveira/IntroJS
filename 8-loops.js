console.log("Trabalhando com loops");

const listaDestinos = new Array(
    'Salvador',
    'Sao Paulo',
    'Rio de Janeiro'
);

const idadeComprador = 18;
const estaAcompanhado = false;
let temPassagemComprada = false;
const Destino = "Rio de Janeiro";

console.log('\n Destinos possiveis');
console.log(listaDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;

let contador = 0;
let destinoExiste = false;
while (contador < 3) {
    if (listaDestinos[contador] == Destino) {
        destinoExiste = true;
        break;
    }
    contador += 1;
}

for(let cont = 0; cont < 3; cont++){
    if(listaDestinos[contador] == destino){
        destinoExiste = true;
    }
}


console.log("Destino existe:" , destinoExiste);


if(podeComprar && destinoExiste){
    console.log("Boa Viagem");
}else{
    console.log("Desculpe tivemos um erro!");
}
