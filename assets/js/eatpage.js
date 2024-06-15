'use strict';

let cart = {
    'Ролл Горячая Филадельфия': 0,
    
  }
  
  let countNum = 1;

  document.onclick = event => {
    if (event.target.classList.contains('plus')) {
        // console.log(event.target.dataset.id);
        plusFunction(event.target.dataset.id);
    }
  }
  
  const plusFunction = id => {
    cart[id] ++;
    countNum ++;
    countNum 
    renderCart();
  }
  
  const renderCart = () => {
        document.querySelector('.count__out').insertAdjacentHTML(
            "beforeend",
            `
            <p class="cart__count">${countNum}</p>
            `
        );
  }
  
  renderCart();