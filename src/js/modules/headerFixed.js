const header = document.querySelector(".header__row");
// const headerH = document.querySelector("header__row").clientHeight;
console.log(header);

document.onscroll = function () {
  let scroll = window.scrollY;

  console.log(scroll);
  

  if (scroll > 700) {
    header.classList.add('fixed');
    // document.body.style.paddingTop = headerH + 'px';
  } else {
    header.classList.remove('fixed');
    document.body.style.paddingTop = 0;
  }
}
