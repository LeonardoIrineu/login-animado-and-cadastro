let userLogado = JSON.parse(localStorage.getItem('userLogado'))

let logado = document.querySelector('#logado')

logado.innerHTML = `Obrigado por testar ${userLogado.nome}`

function sair() {
    localStorage.removeItem('token')
    window.location.href = "../index.html"
}