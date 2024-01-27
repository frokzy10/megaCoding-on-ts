"use strict";
// navbar//////////////
function toggleNavbar2() {
    const navbar = document.querySelector('.navbar');
    navbar.style.display = (navbar.style.display === 'flex') ? 'none' : 'flex';
}
document.addEventListener('DOMContentLoaded', () => {
    const burgerIcon = document.getElementById('burgerIcon');
    if (burgerIcon) {
        burgerIcon.addEventListener('click', toggleNavbar2);
    }
});
///////contacts////
let modalContacts = document.querySelector('.modal_contacts');
let modalLink = document.querySelector('.contacts_link');
let modalCloseContacts = document.querySelector('.contactsClose');
let body2 = document.querySelector('body');
modalLink.addEventListener('click', () => {
    modalContacts.classList.add('modalOpen');
    body2.classList.add('blurModal2');
});
modalCloseContacts.addEventListener('click', () => {
    modalContacts.classList.remove('modalOpen');
    body2.classList.remove('blurModal2');
});
// Consultation///////////
function validateForm(e) {
    e.preventDefault();
    let firstInputConsultation = document.querySelector('.consultationFirstInput');
    let secondInputConsultation = document.querySelector('.consultationSecondInput');
    const firstInputElem = firstInputConsultation.value.trim();
    const secondInputElem = secondInputConsultation.value.trim();
    if (firstInputElem === '' || secondInputElem === '') {
        alert('Введите поле');
    }
    else {
        const formData = {
            name: firstInputElem,
            phone: secondInputElem
        };
        saveToLocalStorage(`formData`, JSON.stringify(formData));
        openModal();
    }
    function saveToLocalStorage(key, value) {
        localStorage.setItem(key, value);
    }
}
let btnConsultation = document.querySelector('.consultation_button');
window.onload = function () {
    const keys = Object.keys(localStorage);
    const lastKey = keys[keys.length - 1];
    const formDataString = localStorage.getItem(lastKey);
    if (formDataString) {
        const formData = JSON.parse(formDataString);
        document.getElementById('input1').value = formData.name || '';
        document.getElementById('input2').value = formData.phone || '';
    }
};
function openModal() {
    let modal = document.querySelector('.modalConsultation');
    body2.classList.add('blurModal2');
    modal.classList.add('modalOpen');
    setTimeout(() => {
        body2.classList.remove('blurModal2');
        modal.classList.remove('modalOpen');
    }, 3000);
}
