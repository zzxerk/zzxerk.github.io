let tg = window.Telegram.WebApp;

tg.expand();


let energyLimit = 10;
p = energyLimit;

let c = 0;
const saveCount = () => {
    window.localStorage.setItem('count', c)
    window.localStorage.setItem('energy', energyLimit)
}

let count = document.querySelector('.count');
let btn = document.querySelector('.btn');
let energyCount = document.querySelector('.energy__count');

const loadCount = () => {
    c = (window.localStorage.getItem('count'))? window.localStorage.getItem('count'): 0;
    count.textContent = c;
    energyLimit = (window.localStorage.getItem('energy'))?window.localStorage.getItem('energy'): p;
    energyCount.textContent = energyLimit+"/"+p;
}
btn.addEventListener('click', function () {
    if (energyLimit > 0) {
        energyLimit--;
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