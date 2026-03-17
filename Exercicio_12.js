let produtos = [
    { nome: "Celular", preco: 1500},
    { nome: "Notebook", preco: 3000},
    {nome: "Fone", preco: 200}
];

let maisCaro = produtos[0];

for (let i = 1; i < produtos.length; i++){
  if (produtos [i].preco > maisCaro.preco) {
    maisCaro = produtos[i];
         }

    }

    console.log("Produto mais caro:", maisCaro.nome);