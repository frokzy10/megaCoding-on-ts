function toggleNavbar5() {
    const navbar = document.querySelector('.navbar') as HTMLElement;
    navbar.style.display = (navbar.style.display === 'flex') ? 'none' : 'flex';
}

document.addEventListener('DOMContentLoaded', () => {
    const burgerIcon = document.getElementById('burgerIcon') as HTMLElement;

    if (burgerIcon) {
        burgerIcon.addEventListener('click', toggleNavbar5);
    }
});

// feedback////
let feedbackButton = document.querySelector('.feedback_button') as HTMLButtonElement;
let otzyvContainer = document.querySelector('.otzyv_container') as HTMLDivElement;

feedbackButton.addEventListener('click', (e: Event) => {
    e.preventDefault();

    let feedbackNameInput = document.querySelector('.feedback_input') as HTMLInputElement;
    let feedbackTextarea = document.querySelector('.feedback_texarea') as HTMLTextAreaElement;

    if (feedbackNameInput.value === "" || feedbackTextarea.value === "") {
        alert('Введите поле');
    } else {
        // Create a new otzyvCard div
        let otzyvCard = document.createElement('div') as HTMLDivElement;
        otzyvCard.classList.add('otzyv_card');

        otzyvCard.innerHTML = `
            <h2 class="otzyv_name">${feedbackNameInput.value}</h2>
            <p class="otzyv_p">${feedbackTextarea.value}</p>
        `;

        otzyvContainer.appendChild(otzyvCard);
        openModalFeedback();
    }
    feedbackNameInput.value = '';
    feedbackTextarea.value = ''
});
function openModalFeedback() {
    let body = document.querySelector('body') as HTMLBodyElement;
    let FeedbackModal = document.querySelector('.feedback_modal') as HTMLDivElement;

    FeedbackModal.classList.add('openModal');
    body.classList.add('blurModal2');
    setTimeout(() => {
        FeedbackModal.classList.remove('openModal');
        body.classList.remove('blurModal2');
    }, 2000);
}