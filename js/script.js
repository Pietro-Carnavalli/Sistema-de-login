//Save users//
let users = JSON.parse(localStorage.getItem("users")) || [];

function verify(email) {
    return users.some(user => user.email === email);
   
}


function NewUser(email, senha) {
    this.email = email;
    this.senha = senha;

}

//validacao de email//
function validarEmail() {

    let emailDigitado = document.getElementById("email").value;
    let posArroba = emailDigitado.indexOf("@");
    let posPonto = emailDigitado.lastIndexOf(".");

    return posArroba > 0 && posPonto > posArroba + 1 && posPonto < emailDigitado.length - 1;
}

//Abre senha na tela//
function acesso(valor) {
    let campoSenha = document.getElementById("senha");
    let aviso = document.getElementById("aviso")
    let validacao = document.getElementById("validacao");

    if (valor === true) {
        campoSenha.classList.remove("d-none");
        aviso.classList.remove("d-none")
        validacao.onclick = cadastrarUsuario;

    } else {
        campoSenha.classList.add("d-none");
        aviso.classList.add("d-none")

        validacao.onclick = validarEmail;
    }
}

// Função para validar senha
function validarSenha(senha) {
    if (senha.length >= 8) {
        return true
    } else {
        alert("A senha deve conter no mínimo 8 caracteres");
        return false;
    }
}

// Chamada pela interface para validar e-mail
function verificarEmail() {
    let email = document.getElementById("email").value;

    if (validarEmail(email)) {
        console.log("Email válido:", email);
        acesso(true);
    } else {
        console.log("Email inválido");
        acesso(false);
    }
}

function cadastrarUsuario() {
    let senha= document.getElementById('senha').value;
    let email = document.getElementById('email').value;
   

    if (!validarSenha(senha)) return; 
    if(verify(email)){
        alert("Usuário já cadastrado");
        return;
    }

    let novo = new NewUser(email, senha);
    users.push(novo);

    localStorage.setItem("users", JSON.stringify(users));

    console.log(users);
    alert("Cadastro concluído!");
}






//window.location.href='/html/cadastro.html'//