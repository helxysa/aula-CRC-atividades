/*
  Faça um objeto que contenha uma propriedade com nome, e seu valor seja uma lista de nomes, ultilizando os recursos mostrados anteriormente, mostre qual é o maior nome da lista.

*/

let listaNomes = {
  nomes: ['Ana Roberta', 'Joao', 'Marcos','          ']
}
let nomes = Object.values(listaNomes.nomes);


let maiorNome = 0;
for(let i in nomes){
  if(nomes[i].length > maiorNome){
    maiorNome = nomes[i];    
  }
}

console.log(maiorNome)

