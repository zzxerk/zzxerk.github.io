let tg = window.Telegram.WebApp;

tg.expand();
tg.EnableClosingConfirmation();

let out = document.querySelector(".out");
out.insertAdjacentHTML("beforeend", 
    `
    <p class="user__name">${tg.initDataUnsafe.user.first_name}</p>
    `
)

// let userName = document.querySelector(".user__name");

// userName.innerText = `${tg.initDataUnsafe.user.first_name}`;