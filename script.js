let baseForm = document.getElementById("baseForm");
let form = document.getElementById("form");
let usernameInput = document.getElementById("usernameInput");
let passwordInput = document.getElementById("passwordInput");
let sexInput = document.getElementById("sexInput")
let loginButton = document.getElementById("loginButton");
let logoutButton = document.getElementById("logoutButton")

let register = document.getElementById("register")
let pass = document.getElementById("pass")
let confirmPass = document.getElementById("confirmPass")
let regis = document.getElementById("regis")
let registerButton = document.getElementById("registerButton")
let daftar = document.getElementById("daftar")
let keluarButton = document.getElementById("keluarButton")

let gambar1 = document.getElementById("gambar1")
let gambar2 = document.getElementById("gambar2")
let gambar3 = document.getElementById("gambar3")
let gambar4 = document.getElementById("gambar4")
let gambar5 = document.getElementById("gambar5")
let sapaan1 = document.getElementById("sapaan1")
let sapaan2 = document.getElementById("sapaan2")
let sapaan3 = document.getElementById("sapaan3")
let sapaan4 = document.getElementById("sapaan4")
let sapaan5 = document.getElementById("sapaan5")

let sapaanAdmin = document.getElementById("sapaanAdmin")
let justAdmin = document.getElementById("justAdmin")
let maleButton = document.getElementById("maleButton")
let femaleButton = document.getElementById("femaleButton")
let khususButton = document.getElementById("khususButton")



gambar2.style.display = "none";
gambar3.style.display = "none";
gambar4.style.display = "none";
gambar5.style.display = "none";
sapaan2.style.display = "none";
sapaan3.style.display = "none";
sapaan4.style.display = "none";
sapaan5.style.display = "none";
sapaanAdmin.style.display = "none"
logoutButton.style.display = "none";
regis.style.display = "none";
registerButton.style.display = "none";
justAdmin.style.display = "none"


function onDaftar() {
    regis.style.display = "block";
    gambar5.style.display = "block"
    gambar1.style.display = "none"
    registerButton.style.display = "block";
    daftar.style.display = "none"
    form.style.display = "none";
    keluarButton.style.display = "none"
}



function onRegister() {

localStorage.setItem('Username', register.value)
localStorage.setItem('Password', confirmPass.value)
localStorage.setItem('role', 'new')
    if (register.value !== "" && pass.value == confirmPass.value) {
        alert('Akun baru berhasil terbuat')
        registerButton.style.display = "none"
        keluarButton.style.display = "block"
    } else {
        alert('ada yang salah tuh')
    }
}

function onKeluar() {
    gambar1.style.display = "block"
    sapaan1.style.display = "block"
    form.style.display = "block"
    regis.style.display = "none"
    daftar.style.display = "block"
    gambar5.style.display = "none"
}

function onMale() { 
    gambar3.style.display = "block"
    justAdmin.style.display = "none"
    sapaan2.style.display = "block"
}

function onFemale() {
    gambar2.style.display = "block"
    justAdmin.style.display = "none"
    sapaan3.style.display = "block"
}

function onKhusus() {
    gambar4.style.display = "block"
    justAdmin.style.display = "none"
    sapaan5.style.display = "block"
}

function onLogin() {
   
    if (usernameInput.value == localStorage.getItem('Username') && passwordInput.value == localStorage.getItem('Password') && sexInput.value == "male") {
        localStorage.setItem("role", "new")
        localStorage.setItem("Username", usernameInput.value)
        localStorage.setItem("Password", passwordInput.value)
        localStorage.setItem("sex", sexInput.value)
        gambar1.style.display = "none"
        gambar2.style.display = "none"
        gambar3.style.display = "block"
        gambar4.style.display = "none"
        sapaan1.style.display = "none"
        sapaan2.style.display = "block"
        sapaan3.style.display = "none"
        sapaan4.style.display = "none"
        sapaan5.style.display = "none"
        sapaanAdmin.style.display = "none"
        daftar.style.display = "none"
        form.style.display = "none"
        loginButton.style.display = "none"
        logoutButton.style.display = "block"
        justAdmin.style.display = "none"
    } else if (usernameInput.value == localStorage.getItem('Username') && passwordInput.value == localStorage.getItem('Password') && sexInput.value == "female") {
        localStorage.setItem("role", "new")
        localStorage.setItem("Username", usernameInput.value)
        localStorage.setItem("Password", passwordInput.value)
        localStorage.setItem("sex", sexInput.value)
        gambar1.style.display = "none"
        gambar2.style.display = "block"
        gambar3.style.display = "none"
        gambar4.style.display = "none"
        sapaan1.style.display = "none"
        sapaan2.style.display = "none"
        sapaan3.style.display = "block"
        sapaan4.style.display = "none"
        sapaan5.style.display = "none"
        sapaanAdmin.style.display = "none"
        daftar.style.display = "none"
        form.style.display = "none"
        loginButton.style.display = "none"
        logoutButton.style.display = "block"
        justAdmin.style.display = "none"
    } else if (usernameInput.value == "Admin" && passwordInput.value == "admin123" && sexInput.value == "male") {
        localStorage.setItem("role", "Adminlaki-laki")
        localStorage.setItem("Username", usernameInput.value)
        localStorage.setItem("Password", passwordInput.value)
        localStorage.setItem("sex", sexInput.value)
        gambar1.style.display = "none"
        gambar2.style.display = "none"
        gambar3.style.display = "none"
        gambar4.style.display = "none"
        sapaan1.style.display = "none"
        sapaan2.style.display = "none"
        sapaan3.style.display = "none"
        sapaan4.style.display = "block"
        sapaan5.style.display = "none"
        sapaanAdmin.style.display = "block"
        daftar.style.display = "none"
        form.style.display = "none"
        loginButton.style.display = "none"
        logoutButton.style.display = "block"
        justAdmin.style.display = "block"
    } else if (usernameInput.value == "Admin" && passwordInput.value == "admin123" && sexInput.value == "female") {
        localStorage.setItem("role", "Admincewe")
        localStorage.setItem("Username", usernameInput.value)
        localStorage.setItem("Password", passwordInput.value)
        localStorage.setItem("sex", sexInput.value)
        gambar1.style.display = "none"
        gambar2.style.display = "none"
        gambar3.style.display = "none"
        gambar4.style.display = "none"
        sapaan1.style.display = "none"
        sapaan2.style.display = "none"
        sapaan3.style.display = "none"
        sapaan4.style.display = "block"
        sapaan5.style.display = "none"
        sapaanAdmin.style.display = "block"
        daftar.style.display = "none"
        form.style.display = "none"
        loginButton.style.display = "none"
        logoutButton.style.display = "block"
        justAdmin.style.display = "block"
    } else if (usernameInput.value == "Ayang" && passwordInput.value == "ayang123" && sexInput.value == "female") {
        localStorage.setItem("role", "Khusus")
        localStorage.setItem("Username", usernameInput.value)
        localStorage.setItem("Password", passwordInput.value)
        localStorage.setItem("sex", sexInput.value)
        gambar1.style.display = "none"
        gambar2.style.display = "none"
        gambar3.style.display = "none"
        gambar4.style.display = "block"
        sapaan1.style.display = "none"
        sapaan2.style.display = "none"
        sapaan3.style.display = "none"
        sapaan4.style.display = "none"
        sapaan5.style.display = "block"
        sapaanAdmin.style.display = "none"
        daftar.style.display = "none"
        form.style.display = "none"
        loginButton.style.display = "none"
        logoutButton.style.display = "block"
        justAdmin.style.display = "none"
    } else {
        alert('Kayaknya salah deh atau blom bikin akun?')
    }
}

if (localStorage.getItem("Username", "Password", "sex")) {
    gambar1.style.display = "none"
    gambar2.style.display = "block"
    gambar3.style.display = "block"
    gambar4.style.display = "block"
    sapaan1.style.display = "none"
    sapaan2.style.display = "block"
    sapaan3.style.display = "block"
    sapaan4.style.display = "block"
    sapaan5.style.display = "block"
    sapaanAdmin.style.display = "block"
    form.style.display = "none"
    daftar.style.display = "none"
    loginButton.style.display = "none"
    logoutButton.style.display = "block"
    justAdmin.style.display = "block"
    if (localStorage.getItem('role') == "new" && sexInput.value == "male") {
        gambar1.style.display = "none"
        gambar2.style.display = "block"
        gambar3.style.display = "none"
        gambar4.style.display = "none"
        sapaan1.style.display = "none"
        sapaan2.style.display = "none"
        sapaan3.style.display = "block"
        sapaan4.style.display = "none"
        sapaan5.style.display = "none"
        sapaanAdmin.style.display = "none"
        form.style.display = "none"
        daftar.style.display = "none"
        loginButton.style.display = "none"
        justAdmin.style.display = "none"
    } else if (localStorage.getItem('role') == "new" && sexInput.value == "female") {
        gambar1.style.display = "none"
        gambar2.style.display = "block"
        gambar3.style.display = "none"
        gambar4.style.display = "none"
        sapaan1.style.display = "none"
        sapaan2.style.display = "none"
        sapaan3.style.display = "block"
        sapaan4.style.display = "none"
        sapaan5.style.display = "none"
        sapaanAdmin.style.display = "none"
        form.style.display = "none"
        daftar.style.display = "none"
        loginButton.style.display = "none"
        justAdmin.style.display = "none"
    } else if (localStorage.getItem('role') == "Adminlaki-laki") {
        gambar1.style.display = "none"
        gambar2.style.display = "none"
        gambar3.style.display = "none"
        gambar4.style.display = "none"
        sapaan1.style.display = "none"
        sapaan2.style.display = "none"
        sapaan3.style.display = "none"
        sapaan4.style.display = "block"
        sapaan5.style.display = "none"
        sapaanAdmin.style.display = "block"
        form.style.display = "none"
        daftar.style.display = "none"
        loginButton.style.display = "none"
        justAdmin.style.display = "block"
    } else if (localStorage.getItem('role') == "Admincewe") {
        gambar1.style.display = "none"
        gambar2.style.display = "none"
        gambar3.style.display = "none"
        gambar4.style.display = "none"
        sapaan1.style.display = "none"
        sapaan2.style.display = "none"
        sapaan3.style.display = "none"
        sapaan4.style.display = "block"
        sapaan5.style.display = "none"
        sapaanAdmin.style.display = "block"
        form.style.display = "none"
        daftar.style.display = "none"
        loginButton.style.display = "block"
    } else if (localStorage.getItem('role') == "Khusus") {
        gambar1.style.display = "none"
        gambar2.style.display = "none"
        gambar3.style.display = "none"
        gambar4.style.display = "block"
        sapaan1.style.display = "none"
        sapaan2.style.display = "none"
        sapaan3.style.display = "none"
        sapaan4.style.display = "none"
        sapaan5.style.display = "block"
        sapaanAdmin.style.display = "none"
        form.style.display = "none"
        daftar.style.display = "none"
        loginButton.style.display = "none"
        justAdmin.style.display = "none"
    }
}

function onLogout() {
    localStorage.clear();
    location.reload();

}
