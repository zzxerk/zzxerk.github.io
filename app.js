let tg = window.Telegram.WebApp;

tg.expand();


let c = 0;

let tap = 10;

const saveCount = () => {
    window.localStorage.setItem('count', c)
}

let count = document.querySelector('.count');
let btn = document.querySelector('.btn');

const loadCount = () => {
    c.toLocaleString('ru')
    c = (window.localStorage.getItem('count'))? window.localStorage.getItem('count'): 0;
    count.textContent = c.toLocaleString('en');
}
btn.addEventListener('click', function () {
    c++;
    count.textContent = c.toLocaleString('en');
    saveCount()
})

loadCount()


// let out = document.querySelector(".user__out");
// out.insertAdjacentHTML("beforeend", 
//     `
//     <p class="user__name">@${tg.initDataUnsafe.user.username}</p>
//     `
// );

// // <p class="user__id">${tg.initDataUnsafe.user.id}</p>