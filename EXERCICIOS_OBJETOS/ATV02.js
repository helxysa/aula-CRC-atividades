/*
  Faça um objeto chamado ListaDeCompras, e dentro desse objeto crie uma propriedade chamada produtos, e dentro dele coloque os produtos, e seus respectivos valores,
  e ultilizando uma das funções mostradas anteriormente, faça a soma total desses valores.

*/

const lista_compras = {
  produtos:{
    leite: 6.5,
    ovos: 15,
    arroz: 6.9,
    feijao: 10,
  }
}
const valores = Object.values(lista_compras.produtos);
let soma = 0;
for(let i = 0; i < valores.length; i++){
  soma = soma + valores[i];
}

console.log("A soma total dos produtos é:", soma);