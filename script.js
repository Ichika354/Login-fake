let intro = document.getElementById("intro");
let secondIntro = document.getElementById("secondIntro");
let form = document.getElementById("form");
let daftar = document.getElementById("daftar");
let regis = document.getElementById("regis");

let content = document.getElementById("content");
let sapaanMale = document.getElementById("sapaanMale");
let sapaanFemale = document.getElementById("sapaanFemale");
let sapaanKhusus = document.getElementById("sapaanKhusus");
let sapaanBetie = document.getElementById("sapaanBestie");
let sapaanAdmin = document.getElementById("sapaanAdmin");
let admin = document.getElementById("admin");

let usernameInput = document.getElementById("usernameInput");
let passwordInput = document.getElementById("passwordInput");
let genderInput = document.getElementById("genderInput");
let registerInput = document.getElementById("registerInput");
let passInput = document.getElementById("passInput");
let confirmInput = document.getElementById("confirmInput");

let formContent = document.getElementById("formContent");
let pesanAyang = document.getElementById("pesanAyang");
let pesan = document.getElementById("pesan");
let masukPesan = document.getElementById("masukPesan");
let formContent2 = document.getElementById("formContent2");
let pesanBestie = document.getElementById("pesanBestie");
let pesan2 = document.getElementById("pesan2");
let masukPesan2 = document.getElementById("masukPesan2");

let backButton = document.getElementById("backButton");
let bckButton = document.getElementById("bckButton");

const male = document.getElementById("male");
const female = document.getElementById("female");

// form.style.display = "none";
// intro.style.display = "none";
// daftar.style.display = "none";

secondIntro.style.display = "none";
regis.style.display = "none";
content.style.display = "none";
sapaanMale.style.display = "none";
sapaanFemale.style.display = "none";
sapaanKhusus.style.display = "none";
formContent.style.display = "none";
pesan.style.display = "none";
sapaanBetie.style.display = "none";
formContent2.style.display = "none";
pesan2.style.display = "none";
sapaanAdmin.style.display = "none";
admin.style.display = "none";

backButton.style.display = "none";
bckButton.style.display = "none";

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
  if (registerInput.value !== "" && passInput.value.length == 5 && confirmInput.value.length == 5) {
    alert("Akun baru berhasil terbuat");
    intro.style.display = "flex";
    form.style.display = "flex";
    daftar.style.display = "flex";
    secondIntro.style.display = "none";
    regis.style.display = "none";
  } else if (passInput.value.length < 5 && confirmInput.value.length < 5) {
    alert("Jangan kurang dari 5 atuh kamu mah");
  } 
  else {
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
  formContent.style.display = "flex";
  sapaanAdmin.style.display = "none";
  admin.style.display = "none";
}

function onBest() {
  content.style.display = "flex";
  sapaanBetie.style.display = "flex";
  formContent2.style.display = "flex";
  sapaanAdmin.style.display = "none";
  admin.style.display = "none";
}

function onAyang() {
  content.style.display = "flex";
  formContent.style.display = "none";
  masukPesan.style.display = "none";
  pesan.style.display = "flex";
  bckButton.style.display = "flex";
}

function onBestie() {
  content.style.display = "flex";
  formContent2.style.display = "none";
  masukPesan2.style.display = "none";
  pesan2.style.display = "flex";
  backButton.style.display = "flex";
}

function onBack() {
  content.style.display = "flex";
  formContent2.style.display = "flex";
  masukPesan2.style.display = "flex";
  pesan2.style.display = "none";
  backButton.style.display = "none";
}

function onBck() {
  content.style.display = "flex";
  formContent.style.display = "flex";
  masukPesan.style.display = "flex";
  pesan.style.display = "none";
  bckButton.style.display = "none";
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
    male.textContent = "Halooo" + " " + localStorage.getItem("Username");
    sapaanFemale.style.display = "none";
    sapaanKhusus.style.display = "none";
    formContent.style.display = "none";
    pesan.style.display = "none";
    sapaanBetie.style.display = "none";
    formContent2.style.display = "none";
    pesan2.style.display = "none";
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
    female.textContent = "Halooo" + " " + localStorage.getItem("Username") + "Cantik";
    sapaanKhusus.style.display = "none";
    formContent.style.display = "none";
    pesan.style.display = "none";
    sapaanBetie.style.display = "none";
    formContent2.style.display = "none";
    pesan2.style.display = "none";
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
    formContent.style.display = "none";
    pesan.style.display = "none";
    sapaanBetie.style.display = "none";
    formContent2.style.display = "none";
    pesan2.style.display = "none";
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
    formContent.style.display = "none";
    pesan.style.display = "none";
    sapaanBetie.style.display = "none";
    formContent2.style.display = "none";
    pesan2.style.display = "none";
    sapaanAdmin.style.display = "flex";
    admin.style.display = "block";
  } else if (usernameInput.value == "Naila Ilan Novina" && passwordInput.value == "101103" && genderInput.value == "female") {
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
    formContent.style.display = "flex";
    pesan.style.display = "none";
    sapaanBetie.style.display = "none";
    formContent2.style.display = "none";
    pesan2.style.display = "none";
    sapaanAdmin.style.display = "none";
    admin.style.display = "none";
  } else if (usernameInput.value == "Shelly " && passwordInput.value == "171003" && genderInput.value == "female") {
    localStorage.setItem("Username", usernameInput.value);
    localStorage.setItem("Password", passwordInput.value);
    localStorage.setItem("Gender", genderInput.value);
    localStorage.setItem("role", "Bestie");
    intro.style.display = "none";
    form.style.display = "none";
    daftar.style.display = "none";
    secondIntro.style.display = "none";
    regis.style.display = "none";
    content.style.display = "flex";
    sapaanMale.style.display = "none";
    sapaanFemale.style.display = "none";
    sapaanKhusus.style.display = "none";
    formContent.style.display = "none";
    pesan.style.display = "none";
    sapaanBetie.style.display = "flex";
    formContent2.style.display = "flex";
    pesan2.style.display = "none";
    sapaanAdmin.style.display = "none";
    admin.style.display = "none";
  } else if (usernameInput.value.length == 0 && passInput.value.length == 0) {
    alert("Mohon untuk di isi yaaa masa iya mau login tapi ga di isi heheh");
  } 
  else {
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
  formContent.style.display = "none";
  pesan.style.display = "flex";
  sapaanBetie.style.display = "flex";
  formContent2.style.display = "flex";
  pesan2.style.display = "flex";
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
    female.textContent = "Halooo" + " " + localStorage.getItem("Username") + " Cantik";
    sapaanKhusus.style.display = "none";
    formContent.style.display = "none";
    pesan.style.display = "none";
    sapaanBetie.style.display = "none";
    formContent2.style.display = "none";
    pesan2.style.display = "none";
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
    male.textContent = "Halooo" + " " + localStorage.getItem("Username");
    sapaanKhusus.style.display = "none";
    formContent.style.display = "none";
    pesan.style.display = "none";
    sapaanBetie.style.display = "none";
    formContent2.style.display = "none";
    pesan2.style.display = "none";
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
    formContent.style.display = "none";
    pesan.style.display = "none";
    sapaanBetie.style.display = "none";
    formContent2.style.display = "none";
    pesan2.style.display = "none";
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
    formContent.style.display = "none";
    pesan.style.display = "none";
    sapaanBetie.style.display = "none";
    formContent2.style.display = "none";
    pesan2.style.display = "none";
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
    formContent.style.display = "flex";
    pesan.style.display = "none";
    sapaanBetie.style.display = "none";
    formContent2.style.display = "none";
    pesan2.style.display = "none";
    sapaanAdmin.style.display = "none";
    admin.style.display = "none";
  } else if (localStorage.getItem("role") == "Bestie") {
    intro.style.display = "none";
    form.style.display = "none";
    daftar.style.display = "none";
    secondIntro.style.display = "none";
    regis.style.display = "none";
    content.style.display = "flex";
    sapaanMale.style.display = "none";
    sapaanFemale.style.display = "none";
    sapaanKhusus.style.display = "none";
    formContent.style.display = "none";
    pesan.style.display = "none";
    sapaanBetie.style.display = "flex";
    formContent2.style.display = "flex";
    pesan2.style.display = "none";
    sapaanAdmin.style.display = "none";
    admin.style.display = "none";
  }
}

function onLogout() {
  localStorage.clear();
  location.reload();
}

