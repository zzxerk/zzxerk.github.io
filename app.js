let tg = window.Telegram.WebApp;

tg.expand();


let userName = document.querySelector(".user__name");

userName.innerText = `${tg.initDataUnsafe.user.first_name}`;