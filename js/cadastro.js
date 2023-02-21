let nome = document.querySelector('#input-nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#input-usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#input-senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#input-confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', () => {
    if (nome.value.length <= 2) {
        labelNome.setAttribute('style', 'color:red')
        labelNome.innerHTML = '<strong> Nome *Minimo de 3 caracteres </strong>'
        nome.setAttribute('style', 'border-color: red')
        validNome = false
    } else {
        labelNome.setAttribute('style', 'color:green')
        nome.setAttribute('style', 'border-color: green')
        labelNome.innerHTML = 'Nome'
        validNome = true
    }
})

usuario.addEventListener('keyup', () => {
    if (usuario.value.length <= 4) {
        labelUsuario.setAttribute('style', 'color:red')
        labelUsuario.innerHTML = '<strong>Usuário *Minimo de 5 caracteres</strong>'
        usuario.setAttribute('style', 'border-color:red')
        validUsuario = false
    } else {
        labelUsuario.setAttribute('style', 'color:green')
        labelUsuario.innerHTML = 'Usuário'
        usuario.setAttribute('style', 'border-color:green')
        validUsuario = true
    }
})

senha.addEventListener('keyup', () => {
    if (senha.value.length <= 5) {
        labelSenha.setAttribute('style', 'color:red')
        labelSenha.innerHTML = '<strong>Senha *Minimo de 6 caracteres</strong>'
        senha.setAttribute('style', 'border-color:red')
        validSenha = false
    } else {
        labelSenha.setAttribute('style', 'color:green')
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color:green')
        validSenha = true
    }
})

confirmSenha.addEventListener('keyup', () => {
    if (senha.value != confirmSenha.value) {
        labelConfirmSenha.setAttribute('style', 'color:red')
        labelConfirmSenha.innerHTML = '<strong>As senhas não conferem</strong>'
        confirmSenha.setAttribute('style', 'border-color:red')
        validConfirmSenha = false
    } else {
        labelConfirmSenha.setAttribute('style', 'color:green')
        labelConfirmSenha.innerHTML = 'Confirme sua senha'
        confirmSenha.setAttribute('style', 'border-color:green')
        validConfirmSenha = true
    }
})


function cadastrar() {
    if (validNome && validUsuario && validSenha && validConfirmSenha) {
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
            {
                nomeCad: nome.value,
                userCad: usuario.value,
                senhaCad: senha.value
            }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        msgSuccess.setAttribute('style', 'display:block')
        msgSuccess.innerHTML = '<strong>Cadastrando...</strong>'
        msgError.setAttribute('style', 'display:none')
        msgError.innerHTML = ''

        setTimeout(() => {
            window.location.href = '/index.html'
        }, 3000)

    } else {
        msgError.setAttribute('style', 'display:block')
        msgError.innerHTML = 'Preencha todos os campos'
        msgSuccess.setAttribute('style', 'display:none')
        msgSuccess.innerHTML = '<strong></strong>'
    }
}