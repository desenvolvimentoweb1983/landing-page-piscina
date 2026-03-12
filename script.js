const cliente = {

nome:"Limpeza de Piscinas",

slogan:"Água limpa, cristalina e pronta para uso",

telefone:"5519974082724",

endereco:"Jaguariúna - SP",

horario:"Segunda a Sexta - 17h às 22h",

servicos:[

{
titulo:"Limpeza Completa",
img:"img/limpeza.jpg",
desc:"Remoção de folhas, aspiração do fundo e limpeza das bordas."
},

{
titulo:"Tratamento Químico",
img:"img/tratamento.jpg",
desc:"Controle de pH, cloro e produtos para manter a água cristalina."
},

{
titulo:"Manutenção Semanal",
img:"img/manutencao.jpg",
desc:"Plano semanal para manter sua piscina sempre limpa."
},

{
titulo:"Limpeza de Filtro",
img:"img/filtro.jpg",
desc:"Limpeza e manutenção do sistema de filtragem."
},

{
titulo:"Tratamento de Água Verde",
img:"img/agua-verde.jpg",
desc:"Recuperação completa da água da piscina."
}

],

tiposPiscina:[

{
nome:"Piscinas Residenciais",
img:"img/residencial.png"
},

{
nome:"Piscinas de Condomínio",
img:"img/condominio.png"
},

{
nome:"Piscinas de Chácaras",
img:"img/chacara.png"
},

{
nome:"Piscinas de Hotel",
img:"img/hotel.png"
}

],

passos:[

"Entre em contato pelo WhatsApp",
"Agendamos a visita técnica",
"Realizamos a limpeza e tratamento da água",
"Piscina pronta para uso com segurança"

],

fotos:[

"img/piscina1.jpg",
"img/piscina2.jpg",
"img/piscina3.jpg"

],

mapa:"https://www.google.com/maps?q=-22.7046106,-46.9924357&output=embed"

}


// TEXTOS PRINCIPAIS

document.getElementById("tituloSite").innerText = cliente.nome
document.getElementById("nomeEmpresa").innerText = cliente.nome
document.getElementById("tituloHero").innerText = cliente.nome
document.getElementById("slogan").innerText = cliente.slogan

document.getElementById("telefone").innerText = "WhatsApp: (19) 97408-2724"
document.getElementById("endereco").innerText = cliente.endereco
document.getElementById("horario").innerText = cliente.horario



// CONFIGURAÇÃO DO WHATSAPP

const mensagem = "Olá! Vi seu site de limpeza de piscinas e gostaria de solicitar um orçamento.";

const linkWhatsApp =
"https://wa.me/" + cliente.telefone + "?text=" + encodeURIComponent(mensagem)


// BOTÕES DE WHATSAPP

const botoesWhats = [
"btnHero",
"btnWhatsappTopo",
"whatsappFixo"
]

botoesWhats.forEach(id => {

const botao = document.getElementById(id)

if(botao){
botao.href = linkWhatsApp
botao.target = "_blank"
}

})



// SERVIÇOS

const servicos = document.getElementById("listaServicos")

cliente.servicos.forEach(s => {

const div = document.createElement("div")

div.className = "servico-card"

div.innerHTML = `
<img src="${s.img}">
<h3>${s.titulo}</h3>
<p>${s.desc}</p>
`

servicos.appendChild(div)

})




// TIPOS DE PISCINA

const piscinas = document.getElementById("listaPiscinas")

cliente.tiposPiscina.forEach(v => {

const div = document.createElement("div")

div.className = "veiculo-card"

div.innerHTML = `
<img src="${v.img}">
<h3>${v.nome}</h3>
`

piscinas.appendChild(div)

})




// PROCESSO

const passos = document.getElementById("listaPassos")

cliente.passos.forEach((p,i) => {

const div = document.createElement("div")

div.className = "passo"

div.innerHTML = `
<div class="numero">${i+1}</div>
<p>${p}</p>
`

passos.appendChild(div)

})




// GALERIA

const galeria = document.getElementById("listaFotos")

cliente.fotos.forEach(f => {

const img = document.createElement("img")

img.src = f

galeria.appendChild(img)

})




// MAPA

document.getElementById("mapa").src = cliente.mapa




// COPYRIGHT

document.getElementById("copyright").innerText =
"© " + new Date().getFullYear() + " " + cliente.nome