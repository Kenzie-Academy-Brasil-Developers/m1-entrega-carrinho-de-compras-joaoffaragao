const productsCart = [
    {
        id: 1,
        name: "banana",
        price: 10.00
    },
    {
        id: 2,
        name: "manga",
        price: 10.00
    },
    {
        id: 3,
        name: "amora",
        price: 10.00
    },
    {
        id: 4,
        name: "uva",
        price: 10.00
    },

]




function criaCabecalho(cabecalhoList){

    let cabecalho = document.createElement("ul")
    cabecalho.classList.add("cabecalho")

    cabecalhoList.forEach(valor => {
        let item = document.createElement("li")
        let paragrafo = document.createElement("p")
        paragrafo.innerText = valor

        paragrafo.classList.add("itemCabecalho") 
        
        item.appendChild(paragrafo)

        cabecalho.appendChild(item)

    })

    return cabecalho
}


function criaCardProduto(produto){

    

}


const body = document.body

const main = document.createElement("main")

const finalizarButton = document.createElement("button")
finalizarButton.innerText = "Finalizar"

let soma = 0 

let productDetalisList = [soma,finalizarButton]


let cabecalhoProdutosList = ["Item","Valor"]

let listaProdutos = document.createElement("ul")

let productDetalisElement = document.createElement("ul")

let cabecalhoProdutos =  criaCabecalho(cabecalhoProdutosList)

main.appendChild(cabecalhoProdutos)


body.appendChild(main)

