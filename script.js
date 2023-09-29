const campoLogin = document.getElementById("login")
const campoSenha = document.getElementById("password")
const campoNovoLogin = document.getElementById("novoLogin")
const campoNovaSenha = document.getElementById("novaSenha")
const campoRepSenha = document.getElementById("repSenha")
let usuarios = []

function login(){
    let login = campoLogin.value
    let senha = campoSenha.value
    let mensagem = "Usuário ou senha incorretos!"
    for (let usuario of usuarios) {
        if (usuario.login == login && usuario.senha == senha){
            mensagem = "Parabéns, você logou!"
            localStorage.setItem("logado", JSON.stringify(usuario))
            window.location.href = "./home/home.html"
            break;
        }
        alert(mensagem)

    }
}

function register(){
    if (campoNovaSenha.value == campoRepSenha.value){
        const usuario = {
            login:campoNovoLogin.value,
            senha:campoNovaSenha.value
        }
        usuarios.push(usuario)
        alert("Registro realizado com sucesso!")
    } else{
        alert("As senhas devem ser iguais!")
    }
}
