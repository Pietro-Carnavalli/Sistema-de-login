// Lista de usuários armazenados no localStorage
let users = JSON.parse(localStorage.getItem("users")) || [];


// ------------------- CONSTRUTOR -------------------
function NewUser(email, senha) {
    this.email = email;
    this.senha = senha;
}


// Salva usuários no localStorage
function saveUsers() {
    localStorage.setItem("users", JSON.stringify(users));
}

// ------------------- VALIDAÇÕES -------------------
// Validação de e-mail
function validarEmail() {
    let emailDigitado = document.getElementById("email").value;
    let posArroba = emailDigitado.indexOf("@");
    let posPonto = emailDigitado.lastIndexOf(".");

    return posArroba > 0 && posPonto > posArroba + 1 && posPonto < emailDigitado.length - 1;
}


// Validação de senha
function validarSenha(senha) {
    let confSenha = document.getElementById("confSenha").value;

    if (senha.length >= 8 === confSenha.length >= 8) {
        return true;
    } else {
        alert("A senha deve conter no mínimo 8 caracteres");
        return false;
    }
}

// ------------------- VERIFICAÇÕES -------------------

// Verifica se o usuário já existe
function verify(email) {
    return users.some(user => user.email === email);
}

// Verifica e-mail digitado
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

// ------------------- CADASTRO -------------------
function cadastrarUsuario() {
    let senha = document.getElementById("senha").value;
    let email = document.getElementById("email").value;

    if (!validarSenha(senha)) return;
    if (verify(email)) {
        alert("Usuário já cadastrado");
        return;
    }

    let novo = new NewUser(email, senha);
    users.push(novo);

    localStorage.setItem("users", JSON.stringify(users));

    console.log(users);
    alert("Cadastro concluído!");
}

// ------------------- EVENTOS -------------------
const button = document.getElementById("btnVerif");
button.addEventListener("click", function (event) {
    event.preventDefault();
    cadastrarUsuario();
});
