let intro = document.getElementById("intro");
let secondIntro = document.getElementById("secondIntro");
let form = document.getElementById("form");
let daftar = document.getElementById("daftar");
let regis = document.getElementById("regis");

let content = document.getElementById("content");
let sapaanMale = document.getElementById("sapaanMale");
let sapaanFemale = document.getElementById("sapaanFemale");
let sapaanKhusus = document.getElementById("sapaanKhusus");
let sapaanAdmin = document.getElementById("sapaanAdmin");
let admin = document.getElementById("admin");

let usernameInput = document.getElementById("usernameInput");
let passwordInput = document.getElementById("passwordInput");
let genderInput = document.getElementById("genderInput");
let registerInput = document.getElementById("registerInput");
let passInput = document.getElementById("passInput");
let confirmInput = document.getElementById("confirmInput");

secondIntro.style.display = "none";
regis.style.display = "none";
content.style.display = "none";
sapaanMale.style.display = "none";
sapaanFemale.style.display = "none";
sapaanKhusus.style.display = "none";
sapaanAdmin.style.display = "none";
admin.style.display = "none";

function onDaftar() {
  intro.style.display = "none";
  form.style.display = "none";
  daftar.style.display = "none";
  secondIntro.style.display = "flex";
  regis.style.display = "flex";
}

function onRegis() {
  localStorage.setItem("Username", registerInput.value);
  localStorage.setItem("Password", confirmInput.value);
  localStorage.setItem("role", "new");
  if (registerInput.value !== "" && passInput.value == confirmInput.value) {
    alert("Akun baru berhasil terbuat");
    intro.style.display = "flex";
    form.style.display = "flex";
    daftar.style.display = "flex";
    secondIntro.style.display = "none";
    regis.style.display = "none";
  } else {
    alert("ada yang salah tuh");
  }
}

function onKembali() {
  intro.style.display = "flex";
  form.style.display = "flex";
  daftar.style.display = "flex";
  secondIntro.style.display = "none";
  regis.style.display = "none";
}

function onMale() {
  content.style.display = "flex";
  sapaanMale.style.display = "flex";
  sapaanAdmin.style.display = "none";
  admin.style.display = "none";
}

function onFemale() {
  content.style.display = "flex";
  sapaanFemale.style.display = "flex";
  sapaanAdmin.style.display = "none";
  admin.style.display = "none";
}

function onKhusus() {
  content.style.display = "flex";
  sapaanKhusus.style.display = "flex";
  sapaanAdmin.style.display = "none";
  admin.style.display = "none";
}

function onLogin() {
  if (usernameInput.value == localStorage.getItem("Username") && passwordInput.value == localStorage.getItem("Password") && genderInput.value == "male") {
    localStorage.setItem("Username", usernameInput.value);
    localStorage.setItem("Password", passwordInput.value);
    localStorage.setItem("Gender", genderInput.value);
    localStorage.setItem("role", "new");
    intro.style.display = "none";
    form.style.display = "none";
    daftar.style.display = "none";
    secondIntro.style.display = "none";
    regis.style.display = "none";
    content.style.display = "flex";
    sapaanMale.style.display = "flex";
    sapaanFemale.style.display = "none";
    sapaanKhusus.style.display = "none";
    sapaanAdmin.style.display = "none";
    admin.style.display = "none";
  } else if (usernameInput.value == localStorage.getItem("Username") && passwordInput.value == localStorage.getItem("Password") && genderInput.value == "female") {
    localStorage.setItem("Username", usernameInput.value);
    localStorage.setItem("Password", passwordInput.value);
    localStorage.setItem("Gender", genderInput.value);
    localStorage.setItem("role", "new");
    intro.style.display = "none";
    form.style.display = "none";
    daftar.style.display = "none";
    secondIntro.style.display = "none";
    regis.style.display = "none";
    content.style.display = "flex";
    sapaanMale.style.display = "none";
    sapaanFemale.style.display = "flex";
    sapaanKhusus.style.display = "none";
    sapaanAdmin.style.display = "none";
    admin.style.display = "none";
  } else if (usernameInput.value == "Admin" && passwordInput.value == "admin123" && genderInput.value == "male") {
    localStorage.setItem("Username", usernameInput.value);
    localStorage.setItem("Password", passwordInput.value);
    localStorage.setItem("Gender", genderInput.value);
    localStorage.setItem("role", "Adminlaki-laki");
    intro.style.display = "none";
    form.style.display = "none";
    daftar.style.display = "none";
    secondIntro.style.display = "none";
    regis.style.display = "none";
    content.style.display = "flex";
    sapaanMale.style.display = "none";
    sapaanFemale.style.display = "none";
    sapaanKhusus.style.display = "none";
    sapaanAdmin.style.display = "flex";
    admin.style.display = "block";
  } else if (usernameInput.value == "Admin" && passwordInput.value == "admin123" && genderInput.value == "female") {
    localStorage.setItem("Username", usernameInput.value);
    localStorage.setItem("Password", passwordInput.value);
    localStorage.setItem("Gender", genderInput.value);
    localStorage.setItem("role", "Admincewe");
    intro.style.display = "none";
    form.style.display = "none";
    daftar.style.display = "none";
    secondIntro.style.display = "none";
    regis.style.display = "none";
    content.style.display = "flex";
    sapaanMale.style.display = "none";
    sapaanFemale.style.display = "none";
    sapaanKhusus.style.display = "none";
    sapaanAdmin.style.display = "flex";
    admin.style.display = "block";
  } else if (usernameInput.value == "Nailailan" && passwordInput.value == "nailailan123" && genderInput.value == "female") {
    localStorage.setItem("Username", usernameInput.value);
    localStorage.setItem("Password", passwordInput.value);
    localStorage.setItem("Gender", genderInput.value);
    localStorage.setItem("role", "Khusus");
    intro.style.display = "none";
    form.style.display = "none";
    daftar.style.display = "none";
    secondIntro.style.display = "none";
    regis.style.display = "none";
    content.style.display = "flex";
    sapaanMale.style.display = "none";
    sapaanFemale.style.display = "none";
    sapaanKhusus.style.display = "flex";
    sapaanAdmin.style.display = "none";
    admin.style.display = "none";
  } else {
    alert("Kayaknya salah deh atau blom bikin akun?");
  }
}

if (localStorage.getItem("Username", "Password", "Gender")) {
  intro.style.display = "none";
  form.style.display = "none";
  daftar.style.display = "none";
  secondIntro.style.display = "none";
  regis.style.display = "none";
  content.style.display = "flex";
  sapaanMale.style.display = "flex";
  sapaanFemale.style.display = "flex";
  sapaanKhusus.style.display = "flex";
  sapaanAdmin.style.display = "flex";
  admin.style.display = "flex";
  if (localStorage.getItem("role") == "new" && genderInput.value == "male") {
    intro.style.display = "none";
    form.style.display = "none";
    daftar.style.display = "none";
    secondIntro.style.display = "none";
    regis.style.display = "none";
    content.style.display = "flex";
    sapaanMale.style.display = "none";
    sapaanFemale.style.display = "flex";
    sapaanKhusus.style.display = "none";
    sapaanAdmin.style.display = "none";
    admin.style.display = "none";
  } else if (localStorage.getItem("role") == "new" && genderInput.value == "female") {
    intro.style.display = "none";
    form.style.display = "none";
    daftar.style.display = "none";
    secondIntro.style.display = "none";
    regis.style.display = "none";
    content.style.display = "flex";
    sapaanMale.style.display = "flex";
    sapaanFemale.style.display = "none";
    sapaanKhusus.style.display = "none";
    sapaanAdmin.style.display = "none";
    admin.style.display = "none";
  } else if (localStorage.getItem("role") == "Adminlaki-laki") {
    intro.style.display = "none";
    form.style.display = "none";
    daftar.style.display = "none";
    secondIntro.style.display = "none";
    regis.style.display = "none";
    content.style.display = "flex";
    sapaanMale.style.display = "none";
    sapaanFemale.style.display = "none";
    sapaanKhusus.style.display = "none";
    sapaanAdmin.style.display = "flex";
    admin.style.display = "block";
  } else if (localStorage.getItem("role") == "Admincewe") {
    intro.style.display = "none";
    form.style.display = "none";
    daftar.style.display = "none";
    secondIntro.style.display = "none";
    regis.style.display = "none";
    content.style.display = "flex";
    sapaanMale.style.display = "none";
    sapaanFemale.style.display = "none";
    sapaanKhusus.style.display = "none";
    sapaanAdmin.style.display = "flex";
    admin.style.display = "block";
  } else if (localStorage.getItem("role") == "Khusus") {
    intro.style.display = "none";
    form.style.display = "none";
    daftar.style.display = "none";
    secondIntro.style.display = "none";
    regis.style.display = "none";
    content.style.display = "flex";
    sapaanMale.style.display = "none";
    sapaanFemale.style.display = "none";
    sapaanKhusus.style.display = "flex";
    sapaanAdmin.style.display = "none";
    admin.style.display = "none";
  }
}

function onLogout() {
  localStorage.clear();
  location.reload();
}
