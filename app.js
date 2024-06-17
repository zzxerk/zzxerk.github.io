let tg = window.Telegram.WebApp;

tg.expand();


let energyLimit = 100;
let p = energyLimit;



let c = 0;
const saveCount = () => {
    window.localStorage.setItem('count', c)
    window.localStorage.setItem('energy', energyLimit)
    window.localStorage.setItem('maxEnergy', p)
}

let count = document.querySelector('.count');
let btn = document.querySelector('.btn');
let energyCount = document.querySelector('.energy__count');

const loadCount = () => {
    c = (window.localStorage.getItem('count'))? window.localStorage.getItem('count'): 0;
    count.textContent = c;
    energyLimit = (window.localStorage.getItem('energy'))?window.localStorage.getItem('energy'): p;
    energyCount.textContent = energyLimit+"/"+p;
    window.localStorage.getItem('maxEnergy')
}


btn.addEventListener('click', function () {

    if (energyLimit > 0) {
        energyLimit--;
        let energyTime = (p-energyLimit)*1000;
        let xyu = 1000;
        energyCount.textContent = energyLimit+"/"+p;
        c++;
        count.textContent = c;
        let energyInterval = setInterval(function () {
            if (energyLimit <= p) {
                energyLimit++;
                energyCount.textContent = energyLimit+"/"+p;            
                clearInterval(energyInterval);
            // console.log((p-energyLimit-1)*2000);
            }
        }, energyTime);
    }
    saveCount()
})

loadCount()

// let energyInterval = setInterval(function () {
//     if (window.localStorage.getItem('energy')<p) {
//         energyLimit++;
//         saveCount;
//         energyCount.textContent = energyLimit+"/"+p;
//         clearInterval(energyInterval);
//     }
// }, 2000)

let out = document.querySelector(".user__out");
out.insertAdjacentHTML("beforeend", 
    `
    <p class="user__name">@${tg.initDataUnsafe.user.username}</p>
    `
);

// <p class="user__id">${tg.initDataUnsafe.user.id}</p>