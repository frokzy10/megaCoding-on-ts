// navbar//////////////
function toggleNavbar2() {
    const navbar = document.querySelector('.navbar') as HTMLElement;
    navbar.style.display = (navbar.style.display === 'flex') ? 'none' : 'flex';
}

document.addEventListener('DOMContentLoaded', () => {
    const burgerIcon = document.getElementById('burgerIcon') as HTMLElement;

    if (burgerIcon) {
        burgerIcon.addEventListener('click', toggleNavbar2);
    }
});

///////contacts////
let modalContacts = document.querySelector('.modal_contacts') as HTMLDivElement;
let modalLink = document.querySelector('.contacts_link') as HTMLLinkElement;
let modalCloseContacts = document.querySelector('.contactsClose') as HTMLDivElement;
let body2 = document.querySelector('body') as HTMLBodyElement;

modalLink.addEventListener('click', () => {
    modalContacts.classList.add('modalOpen');
    body2.classList.add('blurModal2')
})
modalCloseContacts.addEventListener('click', () => {
    modalContacts.classList.remove('modalOpen');
    body2.classList.remove('blurModal2')
});

// Consultation///////////
function validateForm(e: Event): void {
    e.preventDefault();

    let firstInputConsultation = (<HTMLInputElement>document.querySelector('.consultationFirstInput'));
    let secondInputConsultation = (<HTMLInputElement>document.querySelector('.consultationSecondInput'));

    const firstInputElem: string = firstInputConsultation.value.trim();
    const secondInputElem: string = secondInputConsultation.value.trim();

    if (firstInputElem === '' || secondInputElem === '') {
        alert('Введите поле');
    } else {
        const formData = {
            name: firstInputElem,
            phone: secondInputElem
        };

        saveToLocalStorage(`formData`, JSON.stringify(formData));
        openModal();
    }

    function saveToLocalStorage(key: string, value: string): void {
        localStorage.setItem(key, value);
    }
}

let btnConsultation = document.querySelector('.consultation_button') as HTMLButtonElement;

window.onload = function () {
    const keys = Object.keys(localStorage);
    const lastKey = keys[keys.length - 1];

    const formDataString = localStorage.getItem(lastKey);

    if (formDataString) {
        const formData = JSON.parse(formDataString);

        (<HTMLInputElement>document.getElementById('input1')).value = formData.name || '';
        (<HTMLInputElement>document.getElementById('input2')).value = formData.phone || '';
    }
}



function openModal(): void {
    let modal = document.querySelector('.modalConsultation') as HTMLDivElement;
    body2.classList.add('blurModal2');
    modal.classList.add('modalOpen');

    setTimeout(() => {
        body2.classList.remove('blurModal2');
        modal.classList.remove('modalOpen');
    }, 3000);
}