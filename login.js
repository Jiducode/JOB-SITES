const x = document.getElementById("login");
const y = document.getElementById("register");
const z = document.getElementById("forgotPassword");

function login() {
    x.style.left = "0";
    y.style.right = "-520px";
    z.classList.remove("visible");
    x.style.opacity = 1;
    y.style.opacity = 0;
    z.style.opacity = 0;
}

function register() {
    x.style.left = "-510px";
    y.style.right = "0";
    z.classList.remove("visible");
    x.style.opacity = 0;
    y.style.opacity = 1;
    z.style.opacity = 0;
}

function forgotPassword() {
    x.style.left = "-510px";
    y.style.right = "-520px";
    z.classList.add("visible");
    x.style.opacity = 0;
    y.style.opacity = 0;
    z.style.opacity = 1;
}
