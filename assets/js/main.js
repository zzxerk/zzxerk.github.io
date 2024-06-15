'use strict';

// document.querySelector(".nav__link").addEventListener("click", function () {
//   document.getElementById("modal").classList.add("open");
// });

// document.querySelector(".modal__close").addEventListener("click", function () {
//   document.getElementById("modal").classList.remove("open");
// });

// window.addEventListener("keydown", (e) => {
//   if (e.key === "Escape") {
//     document.getElementById("modal").classList.remove("open");
//   }
// });

// document
//   .querySelector("#modal .modal__box")
//   .addEventListener("click", (event) => {
//     event._isClickWithInModal = true;
//   });
// document.getElementById("modal").addEventListener("click", (event) => {
//   if (event._isClickWithInModal) return;
//   event.currentTarget.classList.remove("open");
// });


let rolls = [{
  id: 'Ролл Горячая Филадельфия',
  title: 'Ролл Горячая Филадельфия',
  info: '8 шт / 235 г',
  price: '425 ₽'
}, {
  id: 'rollSansey',
  title: 'Ролл Сансей',
  info: '8 шт / 205 г',
  price: '215 ₽'
}, {
  id: 'rollOkinava',
  title: 'Ролл окинава',
  info: '8 шт / 184 г',
  price: '245 ₽'
}, {
  id: 'rollCaliforniaLosose',
  title: 'Ролл Калифорния с лососем',
  info: '8 шт / 195 г',
  price: '340 ₽'
}
];

let voks = [{
  id: 'vokPigInTeriyakiSouse',
  title: 'Вок Свинина в терияки-соусе',
  info: '1 шт / 340 г',
  price: '295 ₽'
}, {
  id: 'lososAndKalmarInSouse',
  title: 'Лосось и кальмар в сливочном соусе',
  info: '1 шт / 340 г',
  price: '430 ₽'
}, {
  id: 'vokCowInSouse',
  title: 'Вок Говядина в перечно-устричном соусе',
  info: '1 шт / 340 г',
  price: '345 ₽'
}, {
  id: 'chickenInSouse',
  title: 'Курица в сливочном соусе',
  info: '1 шт / 340 г',
  price: '270 ₽'
}
];

for (let roll of rolls) {

  document.getElementById("rollsBox").insertAdjacentHTML(
    "beforeend",
    `
    <div class="eat__box">
    <img class="box__eat__img" src="assets/img/roll/${roll.id}.png" alt="${roll.id}" />
    <h3 class="box__title">${roll.title}</h3>
    <div class="box__info">
    <p class="box__text">${roll.info}</p>
    <p class="box__price">${roll.price}</p>
    </div>
    <a href="${roll.title}.html" id="link" class="box__link"></a>
    </div>
    `
  );
};

for (let vok of voks) {

  document.getElementById("voksBox").insertAdjacentHTML(
    "beforeend",
    `
    <div class="eat__box">
    <img class="box__eat__img" src="assets/img/vok/${vok.id}.svg" alt="${vok.id}" />
    <h3 class="box__title">${vok.title}</h3>
    <div class="box__info">
    <p class="box__text">${vok.info}</p>
    <p class="box__price">${vok.price}</p>
    </div>
    <a href="#" id="link" class="box__link"></a>
    </div>
    `
  );
};





// const boxLink = document.querySelectorAll('.box__link');

// boxLink.forEach(item => {

//   console.log(item)

//   item.addEventListener('click', function () {
//     const modalBuy = document.querySelector('modal__buy')
//     modalBuy.classList.add('opened');
//   })
// })

//   item.addEventListener('click', function () {
//     let modalBuy = item.querySelector(".modal__buy");
//     modalBuy.classList.add = 'opened';
//   })


//   .addEventListener('click', function () {
//   document.getElementById("modalByu").classList.add("open");
// });


// document.querySelector(".modal__close").addEventListener("click", function () {
//   document.getElementById("modalByu").classList.remove("open");
// });

// window.addEventListener("keydown", (e) => {
//   if (e.key === "Escape") {
//     document.getElementById("modalByu").classList.remove("open");
//   }
// });

// document
//   .querySelector("#modal .modal__box")
//   .addEventListener("click", (event) => {
//     event._isClickWithInModal = true;
//   });
// document.getElementById("modal").addEventListener("click", (event) => {
//   if (event._isClickWithInModal) return;
//   event.currentTarget.classList.remove("open");
// });

