let ITENS_LOJA = [
    {
        nome:"Bola da Copa",
        preco:86.30,
        url_img:"./img/bola_copa.webp",
        descricao:"Bola utilizada na Copa do Mundo, idela para utilizar em campo e colecionar"
    },
    {
        nome:"Carrinho da Hot Wheels",
        preco:5.80,
        url_img:"./img/carro_hotwheels.jpeg",
        descricao:"Carrinho para dar de presentes para crianças ou colecionar"
    },
    {
        nome:"Chinelo",
        preco:19.99,
        url_img:"./img/chinelo.webp",
        descricao:"Chinelo para se utilizar em qualquer lugar"
    },
    {
        nome:"Escorredor de Louça",
        preco:15.20,
        url_img:"./img/escorredor_louca.webp",
        descricao:"Utilizando para ajudar no processo de secagem dos utensilios"
    },
    {
        nome:"Espada Medieval",
        preco:200.18,
        url_img:"./img/espada_medieval.png",
        descricao:"Utilizada em batalhar para neutralizar o inimigo ou como item de decoração"
    },
    {
        nome:"Guitarra",
        preco:1980.99,
        url_img:"./img/guitarra.webp",
        descricao:"Otima para utilizar em bandas de hard rock"
    },
    {
        nome:"Toalha de Banho",
        preco:9.99,
        url_img:"./img/toalha_banho.webp",
        descricao:"Boa para se secar apos o banho"
    },
    {
        nome:"Vinho",
        preco:59.90,
        url_img:"../img/vinho.webp",
        descricao:"Vinho que harmoniza muito bem com carnes vermelhas "
    }
]

let section_element = document.getElementById("itens_section")

let tamanho_itens = ITENS_LOJA.length
for(i=0 ; i<tamanho_itens ; i++){
    itens(ITENS_LOJA[i])
}

function itens(item){
    let conteudo = document.createElement("div")
    let cont = `
    <div class="modelo">
        <img src="${item.url_img}">
        <h2>${item.nome}</h2>
        <p>Preço: R$ ${item.preco}</p>
        <p>descraçao</p>
        <p>${item.descricao}</p>
    </div>
    `

    conteudo.innerHTML = cont
    section_element.appendChild(conteudo)
}

function add_item() {
    titulo_foto= prompt("Digite o URL da foto:")
    titulo_nome= prompt("Digite o nome do item:")
    titulo_preco= prompt("Digite o preço do item:")
    titulo_descricao= prompt("Digite o descricao do item:")

    novo_item = {
        url_img:titulo_foto,
        nome:titulo_nome,
        preco:titulo_preco,
        descricao:titulo_descricao
    }
    ITENS_LOJA.push(novo_item)
    itens(novo_item)
}

/*function add_noticia() {
    noticia_titulo= prompt("djkahsflkja")
    noticia_descricao= prompt("22")
    nova_noticia = {
        titulo:noticia_titulo,
        descricao:noticia_descricao
    }
    noticias.push(nova_noticia)
    cria_noticias(nova_noticia)
}*/