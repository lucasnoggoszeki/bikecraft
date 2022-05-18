// Ativar links do menu 

const links = document.querySelectorAll('.heaeder-menu a');

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)){
    link.classList.add("ativo");
  }
}


links.forEach(ativarLink);

// Ativar itens do orçamento 

const parametros = new URLSearchParams(location.search);

function ativarSeguro(parametro){
  const elementos = document.getElementById(parametro);
  if(elementos) {
    elementos.checked = true
  }  
}

parametros.forEach(ativarSeguro);

// Ativas perguntas 

const perguntas = document.querySelectorAll('#perguntas-bg button');

function ativarPergunta(event){
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa")  
  pergunta.setAttribute('aria-expanded', ativa);
}

function eventosPeruntas(pergunta){
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPeruntas);

// Galerida de bicicleta

const galeria = document.querySelectorAll('.bicicleta-imgs img');
const galeriaContainer = document.querySelector('.bicicleta-imgs');

function trocarImagem(event){
  const img = event.currentTarget;
  const media = matchMedia('(min-width:1000px)').matches;
  // console.log(media)
  if(media){
    galeriaContainer.prepend(img);
  }
}

function eventoGaleria(img){
  img.addEventListener('click', trocarImagem);
}

galeria.forEach(eventoGaleria);
 
// animção 

if(window.SimpleAnime){
  new SimpleAnime();
}