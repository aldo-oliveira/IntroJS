console.log("Trabalhando com condicionais");

const listaDestinos = new Array(
    'Salvador',
    'Sao Paulo',
    'Rio de Janeiro'
);

listaDestinos.push('Curitba'); //adicionando um item na lista

const idadeComprador = 17;
const estaAcompanhado = true;
const temPassagemComprada = true;

console.log('Destinos possiveis');
console.log(listaDestinos);

if (idadeComprador >= 18 || estaAcompanhado == true) {
    console.log("Boa Viagem!!");
    listaDestinos.splice(1, 1); //removendo itens
} else {
    console.log("Não é maior de Idade não posso vender");
}

console.log("Embarque: \n\n");
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem");
}else{
    console.log("Voce nao pode embarcar");
}
console.log(listaDestinos);