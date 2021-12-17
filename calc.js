'use strict'

var mostrador = document.querySelector('#input')

mostrador.value = ''

function teclaPrecionada(id) {

    if (id == 16) {

        mostrador.value = eval(mostrador.value) ? eval(mostrador.value) : '0'

    } else if (id == 15) {
        const con = mostrador.value.length
        const mostrador2 = mostrador.value.substring(0, con - 1)
        mostrador.value = mostrador2

    } else {
        mostrador.value += document.querySelectorAll('.dig')[id].dataset.id
    }
}

function apagaTudo() {
    mostrador.value = ''
}