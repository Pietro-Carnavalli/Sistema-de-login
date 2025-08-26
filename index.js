//Validacao de e-mail//
function validarEmail() {
    let emailDigitado = document.getElementById("email").value;
    let posArroba = emailDigitado.indexOf("@");
    let posPonto = emailDigitado.lastIndexOf(".");

    if (posArroba > 0 && posPonto > posArroba + 1 && posPonto < emailDigitado.length - 1) {
        console.log("Resposta armazenada", emailDigitado);

    } else {
        console.log("Email invalido");
    }

}

//Validacao de senha//




//Save users//
let users = []

sessionStorage.setItem("users", JSON.stringify(users))

//window.location.href='/html/cadastro.html'//