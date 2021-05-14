function iniciarJogo() {
    window.location.href = 'jogo.html'
}

// Capturar o tamanho da area do jogo
function tamanhoTela() {
    var altura = document.getElementById("janelaPrincipal").clientHeight
    var largura = document.getElementById("janelaPrincipal").clientWidth
    console.log(altura, largura)
}

tamanhoTela()

function posicaoRandomica() {
    if (document.getElementById("circulo")) {
        document.getElementById("circulo").remove()
    }

    var main = document.getElementsById('janelaPrincipal')
    var circulo = document.createElement('img')
    circulo.src = 'circulo-branco.png'

    document.main.appendChild(circulo)
}
