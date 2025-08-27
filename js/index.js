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

    if (valor === true) {
        campoSenha.classList.remove("d-none");
        aviso.classList.remove("d-none")

        let validacao = document.getElementById("validacao");
        validacao.onclick = validarSenha;
    } else {
        campoSenha.classList.add("d-none");
        aviso.classList.add("d-none")

        validacao.onclick = validarEmail;
    }
}

//Validacao de senha//
function validarSenha() {
    let senhaInput = document.getElementById('senha')
    let senha = senhaInput.value

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