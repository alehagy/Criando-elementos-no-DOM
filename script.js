//metodo simples de criacao
//criacao do elemento 
let elementoh1 = document.createElement("h1")
//populacao do elemento
elementoh1.innerText="Venda de Produto"
elementoh1.id="titulo"

console.log(elementoh1)
//adicionar ao site
let corpo=document.querySelector("body")
corpo.appendChild(elementoh1)

//metodo complexo de criacao
//criacao div
const dadosproduto=document.createElement ("div")

dadosproduto.innerHTML=`<h2>Nome Produto</h2><p></p>Descricao do Produto<p>Preco do produto</p>`

//ligacao ao pai
const tit = document.querySelector("#titulo")
tit.appendChild(dadosproduto)
