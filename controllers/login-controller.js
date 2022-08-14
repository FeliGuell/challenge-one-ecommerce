const login = document.querySelector("[data-login]");

const email = document.querySelector("[data-email]");
const contrasena = document.querySelector("[data-contrasena]");
const warning = document.querySelector(".input-message-error-login")
const emailAdmin = "admin@admin.com";
const contrasAdmin = "admin";


if(localStorage.getItem("autenticado") === "true"){
    window.location.href ="/screens/products-admin.html"
}else{
    localStorage.setItem("autenticado", "false");
    login.addEventListener("submit", (event) =>{
        event.preventDefault();
    
        if(email.value == emailAdmin && contrasena.value == contrasAdmin){
            localStorage.setItem("autenticado", "true");
            window.location.href = "/screens/products-admin.html";
        }else{
            localStorage.setItem("autenticado", "false");
            warning.parentElement.classList.add("input-container--invalid");
            warning.parentElement.querySelector(".input-message-error-login").innerHTML = "Email o contraseña incorrectos";
        }
    })
}



