// MOBILE MENU

const mobileMenu = document.querySelector('.mobile__menu');
const openMenuBtns = document.querySelectorAll('.humburger');

if (openMenuBtns.length) {
  for (let i = openMenuBtns.length - 1; i >= 0; i--) {
    // let openIcon = openMenuBtns[i].querySelector('.open-icon');
    // let closeIcon = openMenuBtns[i].querySelector('.close-icon');
    openMenuBtns[i].addEventListener('click', function (e) {
      e.preventDefault();
      mobileMenu.classList.toggle('visually__hidden');
      //   openIcon.classList.toggle('isHidden');
      //   closeIcon.classList.toggle('isOpen');
    });
  }
}
