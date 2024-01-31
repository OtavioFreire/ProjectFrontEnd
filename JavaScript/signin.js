function AbrirPaginaCadastro(){
    window.location.href = "signup.html";
}

function fazerLogin() {
    let inputLogin = document.getElementById("login").value;
    let inputPassword = document.getElementById("pass").value;
    
    if(inputLogin.length > 0 && inputPassword.length > 0){
        alert("Sucess!" )
    }else{
        alert("Preencha os campos para fazer o login!")
    }
}