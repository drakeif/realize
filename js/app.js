// BURGER
const burger = document.getElementById('burger'),
      body = document.getElementById('body'),
      menu = document.getElementById('menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    //body.classList.toggle('active');
});

const closeBurger = document.querySelectorAll('.header__menu');

closeBurger.forEach(el => el.addEventListener('click', ()=> {
    burger.classList.remove('active');
    menu.classList.remove('active');
}));

//WAYPOINT
let waypoint = new Waypoint({
    element: document.getElementById('cards'),
    handler: function(direction) {
  
      let header = document.getElementById('header');
  
      if (direction === 'down') {
        header.classList.add('fixed');
      } else {
        header.classList.remove('fixed');
      }
    }
});

// MODAL
const modal = document.getElementById('modal'),
      mOpen = document.getElementById('mOpen'),
      mClose = document.getElementById('mClose');

mOpen.addEventListener('click', () => {
  modal.classList.add('active');
  body.classList.add('active');
});

mClose.addEventListener('click', () => {
  modal.classList.remove('active');
  body.classList.remove('active');
});