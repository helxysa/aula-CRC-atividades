/*
  Ultilizando um dos recursos mostrando anteriormente, faça um código para detectar se o objeto
  está vazio ou não.

*/

const vazio = {};
const naoVazio = {
  nome: 'Heloysa',
  idade: 20,
};

if(Object.keys(naoVazio).length === 0){
  console.log("Esse objeto está vazio");
} else {
  console.log(`Esse objeto não está vazio\nSuas keys são : ${Object.keys(naoVazio)}`);
}