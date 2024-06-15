let tg = window.Telegram.WebApp;

tg.expand();

let userCard = document.querySelector(".user__card");

let userName = document.createElement("p");

userName.innerText = `${tg.initDataUnsafe.user.first_name}`;

userCard.appendChild(userName);