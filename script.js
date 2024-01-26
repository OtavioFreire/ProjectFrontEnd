class Login{
    constructor(login,password){
        this.login = login;
        this.password = password;
    }
}

function fazerLogin() {
    var inputLogin = document.getElementById("login").value;
    var inputPassword = document.getElementById("pass").value;

    let user = new Login("well","opoiop")
    let json = JSON.stringify(user);
    console.log(json)

    // let request = new XMLHttpRequest()
    // request.open("GET","https://api.gameofthronesquotes.xyz/v1/houses");
    // request.send();
    // request.onload = () => {
    //     if(request.status === 200){
    //         console.log(JSON.parse(request.response))
    //         } else {
    //         console.log("Page not found")// if link is broken, output will be page not found
    //     }
    // } 

    if(inputLogin.length > 0 && inputPassword.length > 0){
        alert("Sucess!" )
    }else{
        alert("Preencha os campos para fazer o login!")
    }
}