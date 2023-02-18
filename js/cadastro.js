let nome = document.querySelector('#input-nome')
let labelNome = document.querySelector('#labelNome')

let usuario = document.querySelector('#input-usuario')
let labelUsuario = document.querySelector('#labelUsuario')

let senha = document.querySelector('#input-senha')
let labelSenha = document.querySelector('#labelSenha')

let confirmSenha = document.querySelector('#input-confirmSenha')
let labelConfirmSenha = document.querySelector('labelConfirmSenha')

nome.addEventListener('keyup', () => {
    if (nome.value.length <= 2) {
        labelNome.setAttribute('style', 'color:red')
    } else {

    }
})

function cadastrar() {

}