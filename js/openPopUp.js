const popUp = document.querySelector('.modal');
const popUpClose = document.querySelector('.close__modal');
const popUpOpen = document.querySelectorAll('.button');

if (popUp) {
  popUpOpen.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault;
      popUp.classList.add('is-open');
    });
  });
  popUpClose.addEventListener('click', e => {
    e.preventDefault;
    popUp.classList.remove('is-open');
  });
}
