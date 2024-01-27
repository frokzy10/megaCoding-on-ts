"use strict";
const carousel = document.querySelector(".carousel");
const firstImg = carousel.querySelectorAll("img")[0];
const arrowIcons = document.querySelectorAll(".wrapper .i");
let isDragStart = false;
let prevPageX, isDragging = false, prevScrollLeft, positionDiff = 0;
const showHiddenIcon = () => {
    const scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    arrowIcons[0].style.display = carousel.scrollLeft === 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft === scrollWidth ? "none" : "block";
};
arrowIcons.forEach((icon, index) => {
    icon.addEventListener("click", () => {
        const firstWidth = firstImg.clientWidth + 20;
        carousel.scrollLeft += index === 0 ? -firstWidth : firstWidth;
        setTimeout(() => showHiddenIcon(), 60);
    });
});
const autoSlide = () => {
    if (carousel.scrollLeft === carousel.scrollWidth - carousel.clientWidth)
        return;
    if (isDragStart)
        return;
    positionDiff = Math.abs(positionDiff);
    const firstWidth = firstImg.clientWidth - 15;
    const valDifference = firstWidth - positionDiff;
    if (carousel.scrollLeft > prevScrollLeft) {
        return (carousel.scrollLeft += positionDiff > firstWidth / 3 ? valDifference : -positionDiff);
    }
    carousel.scrollLeft -= positionDiff > firstWidth / 3 ? valDifference : -positionDiff;
};
const dragging = (e) => {
    if (!isDragStart)
        return;
    e.preventDefault();
    isDragging = true;
    positionDiff = (e.touches ? e.touches[0].pageX : e.pageX) - prevPageX;
    carousel.classList.add("dragging");
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHiddenIcon();
};
const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
    if (!isDragging)
        return;
    isDragging = false;
    autoSlide();
};
// navbar//////////////
function toggleNavbar3() {
    const navbar = document.querySelector('.navbar');
    navbar.style.display = (navbar.style.display === 'flex') ? 'none' : 'flex';
}
document.addEventListener('DOMContentLoaded', () => {
    const burgerIcon = document.getElementById('burgerIcon');
    if (burgerIcon) {
        burgerIcon.addEventListener('click', toggleNavbar3);
    }
});
let modalContacts3 = document.querySelector('.modal_contacts');
let modalLink3 = document.querySelector('.contacts_link');
let modalCloseContacts3 = document.querySelector('.contactsClose');
let body4 = document.querySelector('body');
modalLink3.addEventListener('click', () => {
    modalContacts3.classList.add('modalOpen');
    body4.classList.add('blurModal2');
});
modalCloseContacts3.addEventListener('click', () => {
    modalContacts3.classList.remove('modalOpen');
    body4.classList.remove('blurModal2');
});
