const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

//wskazanie elementow ktore beda wykorzystywane

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

//opis dzialania klikniecia w przycisk logowania

    if (username === "user" && password === "password") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
    
//opis dzialania strony w przypadku podania dobrych lub zlych danych
    
})
