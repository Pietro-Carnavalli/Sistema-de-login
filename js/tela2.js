let users = []

function verify() {
    const cadastrado = users.some(u => u.email === document.getElementById("email").value)
    if (cadastrado) {

        console.log("Usuario ja cadastrado")
        return true
    } else {
        console.log("Usuario nao cadastrado")
        return false
    }

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

    if (posArroba > 0 && posPonto > posArroba + 1 && posPonto < emailDigitado.length - 1) {
        console.log("Resposta armazenada", emailDigitado);
        return acesso(true);

    } else {
        console.log("Email invalido");
        return acesso(false);

    }

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


function cadastrarUsuario() {
    let senhaInput = document.getElementById('senha');
    let senha = senhaInput.value;
    let emailInput = document.getElementById('email');
    let email = emailInput.value;

    if (!validarSenha(senha)) {
        return; 
    }

    else if (verify()) {
        return;
    }
    
    let novo = new NewUser(email, senha);
    users.push(novo);

    sessionStorage.setItem("users", JSON.stringify(users));

    console.log(users);
    alert("Cadastro concluído!");
}






//window.location.href='/html/cadastro.html'//