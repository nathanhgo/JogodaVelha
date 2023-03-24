cells = document.getElementsByClassName('cell')
title = document.getElementById('titulo')

divPlacarX = document.getElementById('placar01')
divPlacarO = document.getElementById('placar02')

placarX = 0
placarO = 0

let jogada = 0
let boardArray = []

for (let cont = 0; cont<=8; cont++) {
    cells[cont].style = ` background-color: ${criarRGBRandom()}`
    cells[cont].id = `cell${cont+1}`

    cells[cont].addEventListener('click', clicou)
}

function criarRGBRandom() {
    return `rgb(${Math.random() * 255} , ${Math.random() * 255} , ${Math.random() * 255})`
}

function clicou() {
    if (this.innerHTML == '') {
        if (jogada % 2 == 0) {
            this.innerHTML = '<p> x </p>'
        } else if (jogada % 2 == 1) {
            this.innerHTML = '<p> o </p>'
        }

        verificar()

        jogada++

        let audio01 = new Audio('./items/sound01.wav')
        audio01.play()
    }
}

function verificar() {
    for (let cont = 0; cont<=8; cont++) {
        if (cells[cont].innerHTML == ''){
            boardArray.push('-')
        } else {
            boardArray.push(cells[cont].innerHTML)
        }
    }

    /********************Conferir Horizontal********************/

    if (boardArray[0] == boardArray[1] && boardArray[1] == boardArray[2]) {

        if (boardArray[0] != '-'){
            venceu()
        }

    }

    if (boardArray[3] == boardArray[4] && boardArray[4] == boardArray[5]) {

        if (boardArray[3] != '-'){
            venceu()
        }

    }
    
    if (boardArray[6] == boardArray[7] && boardArray[7] == boardArray[8]) {

        if (boardArray[6] != '-'){
            venceu()
        }

    }

    /********************Conferir Vertical********************/

    if (boardArray[0] == boardArray[3] && boardArray[3] == boardArray[6]) {
        if (boardArray[0] != '-') {
            venceu()
        }
    }

    if (boardArray[1] == boardArray[4] && boardArray[4] == boardArray[7]) {
        if (boardArray[1] != '-') {
            venceu()
        }
    }

    if (boardArray[2] == boardArray[5] && boardArray[5] == boardArray[8]) {
        if (boardArray[2] != '-') {
            venceu()
        }
    }

    /********************Conferir Diagonal********************/

    if (boardArray[4] != '-') {
        if (boardArray[0] == boardArray[4] && boardArray[4] == boardArray[8]) {
            venceu()
        }
        
        if (boardArray[2] == boardArray[4] && boardArray[4] == boardArray[6]) {
            venceu()
        }
    }

    console.log('lalala')

    boardArray = []
}

function venceu() {
    for (let cont = 0; cont <= 8; cont++) {
        cells[cont].removeEventListener('click', clicou)
        cells[cont].style = 'background-color: gray; color: white;'
    }

    title.innerHTML = 'O jogo Acabou!'
    if (jogada % 2 == 0) {
        title.innerHTML += ' "X" Venceu'
        placarX++
    } else if (jogada % 2 == 1) {
        title.innerHTML += ' "O" Venceu'
        placarO++
    }

    jogada = -1

    setTimeout(() => {
        for (let cont = 0; cont <=8; cont++) {
            cells[cont].innerHTML = ''
            cells[cont].addEventListener('click', clicou)
            cells[cont].style = `background-color: ${criarRGBRandom()}`
        }

        title.innerHTML = 'Jogo da Velha'
    }, 1000)

    divPlacarX.innerHTML = 'X - ' + placarX
    divPlacarO.innerHTML = 'O - ' + placarO
}

function reset() {
    jogada = 0

    for (let cont = 0; cont <= 8; cont++) {
        cells[cont].innerHTML = ''
        cells[cont].addEventListener('click', clicou)
        cells[cont].style = `background-color: ${criarRGBRandom()}`
    }
}