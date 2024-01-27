"use strict";
function toggleNavbar5() {
    const navbar = document.querySelector('.navbar');
    navbar.style.display = (navbar.style.display === 'flex') ? 'none' : 'flex';
}
document.addEventListener('DOMContentLoaded', () => {
    const burgerIcon = document.getElementById('burgerIcon');
    if (burgerIcon) {
        burgerIcon.addEventListener('click', toggleNavbar5);
    }
});
// feedback////
let feedbackButton = document.querySelector('.feedback_button');
let otzyvContainer = document.querySelector('.otzyv_container');
feedbackButton.addEventListener('click', (e) => {
    e.preventDefault();
    let feedbackNameInput = document.querySelector('.feedback_input');
    let feedbackTextarea = document.querySelector('.feedback_texarea');
    if (feedbackNameInput.value === "" || feedbackTextarea.value === "") {
        alert('Введите поле');
    }
    else {
        // Create a new otzyvCard div
        let otzyvCard = document.createElement('div');
        otzyvCard.classList.add('otzyv_card');
        otzyvCard.innerHTML = `
            <h2 class="otzyv_name">${feedbackNameInput.value}</h2>
            <p class="otzyv_p">${feedbackTextarea.value}</p>
        `;
        otzyvContainer.appendChild(otzyvCard);
        openModalFeedback();
    }
    feedbackNameInput.value = '';
    feedbackTextarea.value = '';
});
function openModalFeedback() {
    let body = document.querySelector('body');
    let FeedbackModal = document.querySelector('.feedback_modal');
    FeedbackModal.classList.add('openModal');
    body.classList.add('blurModal2');
    setTimeout(() => {
        FeedbackModal.classList.remove('openModal');
        body.classList.remove('blurModal2');
    }, 2000);
}
