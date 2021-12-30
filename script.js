

//requisito3

let colors = document.getElementById("colors")
let cores = []
for (let nc = 0; nc < 6; nc++) {
    cores.push(nc)   
}
criadorDeDivs ()

function criadorDeDivs () {

    for (let cor = 0; cor < cores.length; cor++) {
       //Referência: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
        let r = Math.random() * 255;
        let g = Math.random() * 255;
        let b = Math.random() * 255;

        let divs = document.createElement("div")
        divs.className = "ball"
        divs.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${1})`;
        
        
        divs.addEventListener("click", adivinhou)
        colors.appendChild(divs)   
    }

//Referência de como gerar um numero de índice de array aleatório: https://www.horadecodar.com.br/2021/06/22/como-pegar-um-valor-aleatorio-de-array-em-javascript/
    const numero = Math.floor(Math.random() * colors.childElementCount);
   let divSorteada = colors.children[numero];

var corSorteada =  window.getComputedStyle(divSorteada).backgroundColor

   divSorteada.id = "acertou"

   //requisito2
let advinha = document.getElementById("advinhaSó");
let texto = document.createElement("h2")
texto.id = "rgb-color"

texto.innerText = corSorteada
advinha.appendChild(texto)

}

//requisito5
let textoDoGame = document.getElementById("answer");

function adivinhou (simOuNao) {
    if (simOuNao.target.id == "acertou"){
        textoDoGame.innerText = "Acertou!";
        pontuacao()
    } else {
        textoDoGame.innerText = "Errou! Tente novamente!"

    }
}

//requisito6
let resetGame = document.getElementById("reset-game")
resetGame.addEventListener("click", zera)

function zera () {
let rgb = document.getElementById("rgb-color");

let ball = document.querySelectorAll(".ball")

    textoDoGame.innerText = "Escolha uma cor"
    for (let i = 0; i < ball.length; i++) {
        const element = ball[i];
        element.parentNode.removeChild(element)
        
    }
    
rgb.parentNode.removeChild(rgb)
console.log
     
criadorDeDivs()

}

//requisito7 
let score = document.getElementById("score")
let pontoInicial = 0
score.innerText = pontoInicial

function pontuacao() {
pontoInicial += 3
score.innerText = pontoInicial

}

