function toggleMenu(){

const menu = document.getElementById("menuNav")

menu.classList.toggle("ativo")

}

document.querySelectorAll("#menuNav a").forEach(link=>{

link.addEventListener("click",()=>{

document.getElementById("menuNav").classList.remove("ativo")

})

})

/* CONTADOR */

const numeros=document.querySelectorAll(".numero")

numeros.forEach(numero=>{

let total=parseInt(numero.dataset.numero)
let count=0

let intervalo=setInterval(()=>{

count++
numero.innerText=count

if(count>=total){
clearInterval(intervalo)
}

},20)

})

/* CARROSSEL */

function scrollGaleria(direcao){

const carousel=document.getElementById("carousel")
const item=carousel.querySelector(".projeto")
const largura=item.offsetWidth+20

carousel.scrollBy({
left:direcao*largura,
behavior:"smooth"
})

}

/* GALERIA */

const projetos={

portao:["img/banner1.jpg","img/banner2.jpg","img/banner3.jpg"],
corrimao:["img/banner2.jpg","img/banner3.jpg","img/banner4.jpg"],
escada:["img/banner3.jpg","img/banner4.jpg","img/banner1.jpg"],
estrutura:["img/banner4.jpg","img/banner1.jpg","img/banner2.jpg"]

}

let projetoAtual=[]
let indexAtual=0

function abrirProjeto(nome){

projetoAtual=projetos[nome]
indexAtual=0

document.getElementById("galeriaImagem").src=projetoAtual[indexAtual]

document.getElementById("galeriaProjeto").style.display="flex"

}

function trocarImagem(direcao){

indexAtual+=direcao

if(indexAtual<0) indexAtual=projetoAtual.length-1
if(indexAtual>=projetoAtual.length) indexAtual=0

document.getElementById("galeriaImagem").src=projetoAtual[indexAtual]

}

function fecharProjeto(){

document.getElementById("galeriaProjeto").style.display="none"

}