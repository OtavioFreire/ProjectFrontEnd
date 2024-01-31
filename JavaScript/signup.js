function ValidarCamposCadastro(){
    let nome = document.getElementById("cadastrar").value
    let senha = document.getElementById("pass").value
    let confirmarSenha = document.getElementById("pass_confirm").value

    if (nome.length > 0 && senha.length > 0 && confirmarSenha.length > 0){
        alert("sucesso!")
    } else {
        alert("Preencha todos os campos para fazer o cadastro!")
    }
}

function RetornarPaginainicial(){
    window.location.href = "signin.html"
}