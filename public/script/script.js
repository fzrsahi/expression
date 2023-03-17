const loginButton = document.getElementById("login");
const main = document.querySelectorAll("main");
const xMark = document.getElementById("iconSatu");
const xMarkDua = document.getElementById("iconDua");
const regisLogin = document.querySelector(".submit-three");
const loginRegis = document.querySelector(".loginRegis");
const loading = document.getElementById("preloader");
const submitSatu = document.getElementById("submit-one");
const xMarkTiga = document.getElementById("iconEmpat");
const detail = document.getElementById("detail");

const iconInfo = document.getElementById("info");

loginButton.addEventListener("click", function () {
  for (const m of main) {
    m.classList.add("blur");
  }
  document.getElementById("form-login").classList.add("show");
});

xMark.addEventListener("click", function () {
  for (const m of main) {
    m.classList.remove("blur");
  }
  document.getElementById("form-login").classList.remove("show");
});

regisLogin.addEventListener("click", function () {
  document.getElementById("form-login").classList.remove("show");
  document.getElementById("form-regis").classList.add("show");
});

xMarkDua.addEventListener("click", function () {
  for (const m of main) {
    m.classList.remove("blur");
  }
  document.getElementById("form-regis").classList.remove("show");
});

loginRegis.addEventListener("click", function () {
  document.getElementById("form-regis").classList.remove("show");
  document.getElementById("form-login").classList.add("show");
});

submitSatu.addEventListener("click", function () {
  loading.fadeOut = "slow";
  console.log("oke");
});

const startButton = document.getElementById("getstarted");
startButton.addEventListener("click", function () {
  console.log("oke");
});

xMarkTiga.addEventListener("click", function () {
  document.getElementById("error-notif").style.display = "none";
});

const forgetPassword = document.getElementById("lupaPass");

forgetPassword.addEventListener("click", function () {
  for (const m of main) {
    m.classList.add("blur");
  }
  document.getElementById("form-login").classList.remove("show");
  document.getElementById("modal").classList.add("show");
});

const closeButton = document.getElementById("close-btn");

closeButton.addEventListener("click", function () {
  for (const m of main) {
    m.classList.remove("blur");
  }
  document.getElementById("modal").classList.remove("show");
});
