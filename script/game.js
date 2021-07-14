var width = 0
var height = 0
var lives = 1
var time = 15
var difficultyGame = 1500
var href = window.location.search

/*----------- DIFICULDADE DO JOGO ----------*/
href = href.replace('?', '')
if (href === 'normal') {
    // 1500 milisegundos
    difficultyGame = 1500
} else if (href === 'dificil') {
    //1000 milisegundos
    difficultyGame = 1000
} else if (href === 'hard') {
    //850 milisegundos.
    difficultyGame = 850
}

/*----------- TAMANHO DA TELA ----------*/
function sizeBody() {
    width = innerWidth
    height = innerHeight
}
sizeBody()

/*----------- CRONOMETRO ----------*/
let stopwatch = setInterval(function () {
    time -= 1
    if (time <= 0) {
        clearInterval(stopwatch)
        clearInterval(fly)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('stopwatch').innerHTML = time
    }
}, 1000)

/*----------- CRIANDO MOSQUITO ----------*/
function createFly() {

    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        if (lives > 3) {
            document.location.href = 'fim_do_jogo.html'
        } else {
            document.getElementById('live' + lives).src = '../imagens/coracao_vazio.png'
            lives++
        }
    }

    var positionX = Math.floor(Math.random() * width) - 90
    var positionY = Math.floor(Math.random() * height) - 90

    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY

    let fly = document.createElement("img")
    fly.src = '../imagens/mosquito.png'
    fly.classList = `${sizeRandom()} ' ' ${sideRandom()}`
    fly.id = 'mosquito'
    fly.style.position = 'absolute'
    fly.style.top = positionY + 'px'
    fly.style.left = positionX + 'px'
    fly.onclick = function () {
        fly.remove()
    }
    document.body.appendChild(fly)
}
createFly()

/*----------- TAMANHO ALEATÓRIO DO MOSQUITO ----------*/
function sizeRandom() {
    var nameClass = Math.floor(Math.random() * 3)
    switch (nameClass) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

/*----------- LADO ESQUEDO OU DIREITO QUE O MOSQUITO VAI NASCER ----------*/
function sideRandom() {
    var nameClass = Math.floor(Math.random() * 2)
    switch (nameClass) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}


