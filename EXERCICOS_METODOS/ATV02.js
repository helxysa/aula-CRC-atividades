/*
  Repetindo o objeto abaixo em seu código, ultilizando os recursos mostrados anteriormente, crie uma nova lista contendo apenas as palavras que comecem com F.

  const carros = {
    marcas: ["Fiat", "Chevrolet", "Ford", "Volkswagen"]
  }

*/

const carros = {
  marcas: ["Fiat", "Chevrolet", "Ford", "Volkswagen"]
}

let marcasComF = [];
for(let marca of Object.values(carros.marcas)){
  if(marca.toLowerCase().slice()[0] === 'f'){
    marcasComF.push(marca)
  }
}
console.log(marcasComF);