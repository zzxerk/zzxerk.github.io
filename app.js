let tg = window.Telegram.WebApp;

tg.expand();

let count = document.querySelector('.count');
let c = 0;
let btn = document.querySelector('.btn')
btn.addEventListener('click', function () {
    c++;
    count.textContent = c;
})



let out = document.querySelector(".user__out");
out.insertAdjacentHTML("beforeend", 
    `
    <p class="user__name">@${tg.initDataUnsafe.user.username}</p>
    `
);




// <p class="user__id">${tg.initDataUnsafe.user.id}</p>