
// const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const header = document.querySelector("header");
const goTopBtn = document.querySelector(".go-top-btn");

window.addEventListener("scroll", function() {
  if (window.pageYOffset > 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

const btn_booking = document.querySelectorAll('.booking');
const display_form = document.querySelector('.form_book');
const btn_form_submit = document.querySelector(".btn_booking");


btn_booking.forEach(btnSecondary => {
    btnSecondary.addEventListener('click', () => {
        display_form.style.display = 'flex';
    });
});

btn_form_submit.addEventListener('click', (event) =>{
    display_form.style.display = 'none';
})
