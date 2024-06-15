let tg = window.Telegram.WebApp;

tg.expand();

let userLogin = document.querySelector(".main__text");

userLogin.innerText = `${tg.initDataUnsafe.first_name}`;