/*
  Crie um objeto, e ultilizando um dos recursos mostrado anteriormente, ache a propriedade que contenha 0 como valor.

  Objeto exemplo:
  const livros = {
    'O Iluminado': 50,
    'Os sete maridos de Evelyn Hugo': 60,
    'O Hobbit': 0,
  }
*/
const livros = {
  'O Iluminado': 50,
  'Os sete maridos de Evelyn Hugo': 60,
  'O Hobbit': 0,
}

for(let [livro, precos] of Object.entries(livros)){
if(precos === 0){
  console.log(`O livro ${livro} é o que está com valor zerado`);
}
}

