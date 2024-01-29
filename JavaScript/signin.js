class Login{
    constructor(login,password){
        this.login = login;
        this.password = password;
    }
}

function fazerLogin() {
    var inputLogin = document.getElementById("login").value;
    var inputPassword = document.getElementById("pass").value;
    
    if(inputLogin.length > 0 && inputPassword.length > 0){
        alert("Sucess!" )
    }else{
        alert("Preencha os campos para fazer o login!")
    }
}