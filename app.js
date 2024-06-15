let tg = window.Telegram.WebApp;

tg.expand();


let out = document.querySelector(".user__out");
out.insertAdjacentHTML("beforeend", 
    `
    <p class="user__name">@${tg.initDataUnsafe.user.username}</p>
    <p class="user__id">${tg.initDataUnsafe.user.id}</p>
    <img class="user__photo" src="${tg.initDataUnsafe.user.photo_url}.jpeg" alt="photo">
    `
)

// let userName = document.querySelector(".user__name");

// userName.innerText = `${tg.initDataUnsafe.user.first_name}`;
