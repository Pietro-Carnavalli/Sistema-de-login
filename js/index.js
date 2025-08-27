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

    if (valor === true) {
        campoSenha.classList.remove("none");
    } else {
        campoSenha.classList.add("none");
    }
}

//Validacao de senha//
function validarSenha() {
    let senha = document.getElementById('senha').value;
    if (senha.length >= 8) {
        return alert("Cadastro concluido")
    }
    else {
        return alert("A senha deve conter 8 caracteres")
    }

}





//Save users//
let users = []

sessionStorage.setItem("users", JSON.stringify(users))

//window.location.href='/html/cadastro.html'//