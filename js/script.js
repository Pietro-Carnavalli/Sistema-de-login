// =================== LISTA DE USUÁRIOS ===================
let users = JSON.parse(localStorage.getItem("users")) || [];


// =================== VALIDAÇÕES ===================

// Validação de e-mail
function validarEmail(email) {
    let posArroba = email.indexOf("@");
    let posPonto = email.lastIndexOf(".");

    return posArroba > 0 && posPonto > posArroba + 1 && posPonto < email.length - 1;
}

// =================== VERIFICAÇÕES ===================

// Verifica se o usuário já existe
function verify(email) {
    return users.some(user => user.email === email);
}

// Verifica se o usuário e senha estão cadastrados
function verifCadastro() {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;


    return users.some(users => users.email === email && users.senha === senha);

}

// Verifica e-mail e a senha digitados pelo usuário
function verificarEmail() {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if (validarEmail(email)) {
        console.log("Email válido:", email);

    } else {
        console.log("Email inválido");
        alert("Email inválido, por favor insira um email válido.");
        return;
    }
}
function verificarSenha(senha) {
    if (senha.length >= 8) {
        console.log("Senha válida");
        return true;
    } else {
        alert("Senha inválida, deve conter no mínimo 8 caracteres");
        return false;
    }
}


// =================== EVENTOS ===================
const button = document.getElementById("btnVerif");
button.addEventListener("click", function (event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
  
    if (!validarEmail(email)) {
        alert("Email inválido, por favor insira um email válido.");
        return;
    }

    if (!verificarSenha(senha)) {
        return;
    }

    if (verifCadastro()) {
        alert("Login realizado com sucesso!");
    } else {
        alert("Crie uma conta para fazer login");
    }
});


