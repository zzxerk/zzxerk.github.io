let tg = window.Telegram.WebApp;

tg.expand();


let energyLimit = 10;
p = energyLimit;

let c = 0;
const saveCount = () => {
    window.localStorage.setItem('count', c)
}

let count = document.querySelector('.count');
let btn = document.querySelector('.btn');

const loadCount = () => {
    c = (window.localStorage.getItem('count'))? window.localStorage.getItem('count'): 0;
    count.textContent = c;
}
btn.addEventListener('click', function () {
    if (energyLimit > 0) {
        energyLimit--;
        let energyCount = document.querySelector('.energy__count');
        energyCount.textContent = energyLimit+"/"+p;
        c++;
        count.textContent = c;
        saveCount()
    }
    else {

    }
})

loadCount()


let out = document.querySelector(".user__out");
out.insertAdjacentHTML("beforeend", 
    `
    <p class="user__name">@${tg.initDataUnsafe.user.username}</p>
    `
);

// <p class="user__id">${tg.initDataUnsafe.user.id}</p>