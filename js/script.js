setTimeout(function () {
    document.getElementById('janelaPrincipal').style.cursor = 'none'
}, 3000)

function cliqueMouse() {
    var efeitoMouse = document.createElement(img)
    efeitoMouse.src = 'c.png'
    document.getElementById('janelaPrincipal').appendChild(efeitoMouse)
}

// Iniciar jogo
function iniciarJogo() {
    window.location.href = 'jogo.html'
    
}

// Variaveis da altura e largura do main
var altura = 0
var largura = 0
var criaCirculoTempo = 700
let score = 0
console.log(score)



// Capturar o tamanho da area do jogo (main)
function tamanhoTela() {
    altura = document.getElementById("janelaPrincipal").clientHeight
    largura = document.getElementById("janelaPrincipal").clientWidth
    larguraPorcento = (90 * largura) / 100
    alturaPorcento = (85 * altura) / 100
    console.log(altura, largura, larguraPorcento)
}

tamanhoTela()

// Barra dinamica
var i = 0
var width = 0;
function move() {
    if (i == 0) {
        i = 1;
        var bar = document.getElementById("progresso")
        width = 1;
        var id = setInterval(frame, 70)
        function frame() {
            if (width >= 100) {
                clearInterval(id)
                i = 0
                window.location.href = 'gameover.html'

            } else {
                width++
                bar.style.width = width + "%"
            }
        }
    }
}

// Gerar posições randomicas
function posicaoRandomica() {
    // if (document.getElementById("circulo")) {
    //     document.getElementById("circulo").remove()
    // }

    // Multiplica a largura por um numero aleatorio
    var posicaoX = Math.floor(Math.random() * larguraPorcento)
    var posicaoY = Math.floor(Math.random() * alturaPorcento)

    if (largura >= '90%') {
        console.log('Porcentagem: ' + largura)
    }
    if (posicaoX >= largura){
        posicaoX -= 150
    }

    console.log(posicaoY, posicaoX)
    var circulo = document.createElement('img')
    circulo.src = 'circulo-branco.png'
    circulo.style.left = posicaoX + 'px'
    circulo.style.top = posicaoY + 'px'
    circulo.style.position = 'absolute'
    circulo.style.width = '150px'
    circulo.id = 'circulo'

    circulo.onclick = function () {
        width = width - 10
        if (width < 0){width = 1}
        this.remove()
        score += 1
        console.log(score)
        document.getElementById("score").innerHTML = score
    }

    console.log('Width circulo: ' + circulo.style.width)

    document.getElementById('janelaPrincipal').appendChild(circulo)
}
