console.log("Trabalhando com listas");

// const salvador = 'Salvador';
// const saoPaulo = 'Sao Paulo';
// const rioDeJaneiro = 'Rio de Janeiro';

const listaDestinos = new Array (
    'Salvador',
    'Sao Paulo',
    'Rio de Janeiro'
);

listaDestinos.push('Curitba'); //adicionando um item na lista

console.log('Destinos possiveis');
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDestinos);

listaDestinos.splice(1,1);
console.log(listaDestinos);

console.log(listaDestinos[1]);

