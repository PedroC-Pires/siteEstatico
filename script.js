const campoLogin = document.getElementById("login");
const campoSenha = document.getElementById("password");
const campoNovoLogin = document.getElementById("novoLogin");
const campoNovaSenha = document.getElementById("novaSenha");
const campoRepSenha = document.getElementById("repSenha");
let seepasswrd = false

function login(){
    let login = campoLogin.value;
    let senha = campoSenha.value;
    let mensagem = "Usuário ou senha incorretos!";
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
    if (bancoDeDados == null) {
        mensagem = "Nenhum usuário cadastrado até o momento.";
    } else {
        for (let usuario of bancoDeDados) {
            if (usuario.login == login && usuario.senha == senha) {
                mensagem = "Parabéns, você logou!";
                localStorage.setItem("logado", JSON.stringify(usuario));
                window.location.href = "./home/home.html";
                break;
            }
        }

    }
    alert(mensagem);
}
function register(){
    if (campoNovaSenha.value == campoRepSenha.value) {
        const usuario = {
            login: campoNovoLogin.value,
            senha: campoNovaSenha.value
        };
        let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
        if (bancoDeDados == null) {
            bancoDeDados = [];
        }
        bancoDeDados.push(usuario);
        localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
        alert("Usuário cadastrado com sucesso!")
         window.location.href = "index.html"
    } else {
        alert("As senhas são diferentes!");
    }

}

function seepass(){
    seepasswrd = !seepasswrd
    if(seepasswrd == false){
        document.getElementById("novaSenha").type = "password"
        document.getElementById("repSenha").type = "password"
    } else{
        document.getElementById("novaSenha").type = "text"
        document.getElementById("repSenha").type = "text"
    }
}
