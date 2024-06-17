let tg = window.Telegram.WebApp;

tg.expand();


let energyLimit = 100;
let p = energyLimit;

let time = new Date().getTime();
console.log(time);

let c = 0;

const saveCount = () => {
    window.localStorage.setItem('count', c)
    window.localStorage.setItem('energy', energyLimit)
    window.localStorage.setItem('maxEnergy', p)
}

let btn1 = document.querySelector('.btn__1');
let btn2 = document.querySelector('.btn__2');
let btn3 = document.querySelector('.btn__3');
let btn4 = document.querySelector('.btn__4');
let btn5 = document.querySelector('.btn__5');
let btn6 = document.querySelector('.btn__6');
let btn7 = document.querySelector('.btn__7');
let btn8 = document.querySelector('.btn__8');
let btn9 = document.querySelector('.btn__9');




let count = document.querySelector('.count');
let energyCount = document.querySelector('.energy__count');
let freeEnergy = document.querySelector('.free__energy');

const loadCount = () => {
    c = (window.localStorage.getItem('count'))? window.localStorage.getItem('count'): 0;
    count.textContent = c;
    energyLimit = (window.localStorage.getItem('energy'))?window.localStorage.getItem('energy'): p;
    energyCount.textContent = energyLimit+"/"+p;
    window.localStorage.getItem('maxEnergy')
    window.localStorage.getItem('nextTime')
}

function a () {
    if (energyLimit==0) {
    freeEnergy.classList.add("active");
}
}

a()

btn1.addEventListener('click', function () {
    if (energyLimit > 0) {
        energyLimit--;
        energyCount.textContent = energyLimit+"/"+p;
        c++;
        count.textContent = c;
    }
    a();
    saveCount();
})
btn2.addEventListener('click', function () {
    // let nowTime = new Date().getTime();
    // let nextTime = nowTime+60000;
    if (energyLimit > 0) {
        energyLimit--;
        energyCount.textContent = energyLimit+"/"+p;
        c++;
        count.textContent = c;
    }
    a();
    saveCount();
})
btn3.addEventListener('click', function () {
    // let nowTime = new Date().getTime();
    // let nextTime = nowTime+60000;
    if (energyLimit > 0) {
        energyLimit--;
        energyCount.textContent = energyLimit+"/"+p;
        c++;
        count.textContent = c;
    }
    a();
    saveCount();
})
btn4.addEventListener('click', function () {
    // let nowTime = new Date().getTime();
    // let nextTime = nowTime+60000;
    if (energyLimit > 0) {
        energyLimit--;
        energyCount.textContent = energyLimit+"/"+p;
        c++;
        count.textContent = c;
    }
    a();
    saveCount();
})
btn5.addEventListener('click', function () {
    // let nowTime = new Date().getTime();
    // let nextTime = nowTime+60000;
    if (energyLimit > 0) {
        energyLimit--;
        energyCount.textContent = energyLimit+"/"+p;
        c++;
        count.textContent = c;
    }
    a();
    saveCount();
})
btn6.addEventListener('click', function () {
    // let nowTime = new Date().getTime();
    // let nextTime = nowTime+60000;
    if (energyLimit > 0) {
        energyLimit--;
        energyCount.textContent = energyLimit+"/"+p;
        c++;
        count.textContent = c;
    }
    a();
    saveCount();
})
btn7.addEventListener('click', function () {
    // let nowTime = new Date().getTime();
    // let nextTime = nowTime+60000;
    if (energyLimit > 0) {
        energyLimit--;
        energyCount.textContent = energyLimit+"/"+p;
        c++;
        count.textContent = c;
    }
    a();
    saveCount();
})
btn8.addEventListener('click', function () {
    // let nowTime = new Date().getTime();
    // let nextTime = nowTime+60000;
    if (energyLimit > 0) {
        energyLimit--;
        energyCount.textContent = energyLimit+"/"+p;
        c++;
        count.textContent = c;
    }
    a();
    saveCount();
})
btn9.addEventListener('click', function () {
    // let nowTime = new Date().getTime();
    // let nextTime = nowTime+60000;
    if (energyLimit > 0) {
        energyLimit--;
        energyCount.textContent = energyLimit+"/"+p;
        c++;
        count.textContent = c;
    }
    a();
    saveCount();
})

freeEnergy.addEventListener('click', function () {
    if (energyLimit==0) {
        energyLimit=100;
        energyCount.textContent = energyLimit+"/"+p;
        freeEnergy.classList.remove("active");
    }
    saveCount();
})

loadCount()

let out = document.querySelector(".user__out");
out.insertAdjacentHTML("beforeend", 
    `
    <p class="user__name">@${tg.initDataUnsafe.user.username}</p>
    `
);

// let energyTime = (p-energyLimit)*200;
        // let energyInterval = setInterval(function () {
        //     if (energyLimit<=p) {
        //         energyLimit++;
        //         energyCount.textContent = energyLimit+"/"+p;            
        //         clearInterval(energyInterval);
        //     }
        // }, energyTime);