interface Technology {
    id: number;
    type: string;
    name: string;
    description: string;
    category: string;
    year: number;
    img: string;
    popularity: string;
}

let fetchCourses: Technology[];
let technologiesList = document.getElementById('technologiesList') as HTMLDivElement;
let searchInput = document.querySelector('.course_input') as HTMLInputElement;
let searchButton = document.querySelector('.course_button') as HTMLButtonElement;
let modal = document.getElementById('modal') as HTMLDivElement;
let body = document.querySelector('body') as HTMLBodyElement;

fetch('http://localhost:3000/technologies')
    .then(response => response.json())
    .then((data: Technology[]) => {
        fetchCourses = data;
        /////////// Вывод данных в HTML
        addCoursesToHtml(fetchCourses)
        ///////////Поиск 
        searchFunction(fetchCourses);
        ///////////Модальное окно с подробной информацией

    });
///////////Поиск 
function searchFunction(data: Technology[]) {
    searchButton.addEventListener('click', (e) => {
        e.preventDefault();
        let inputValue = searchInput.value.toLowerCase();
        fetchCourses = data.filter(i => {
            if (inputValue !== '') {
                return i.name.includes(inputValue);
            }
        });
        addCoursesToHtml(fetchCourses);
    });
}

/////////// Вывод данных в HTML
function addCoursesToHtml(course: Technology[]) {
    (technologiesList as HTMLDivElement).innerHTML = '';

    course.forEach(el => {
        const technoContainer = document.createElement('div') as HTMLDivElement;
        technoContainer.innerHTML = `
            <img class="technoImg" src="${el.img}">
            <h1 class="courseTitle">${el.name}</h1>
        `;

        ////////Вешаю событие что бы при нажатии на карточку сработало showModal();
        technoContainer.addEventListener('click', () => {
            showModal(el, technoContainer)
        });

        (technologiesList as HTMLDivElement).appendChild(technoContainer);
    });

}

function showModal(myTechnology: Technology, myTechnoContainer: HTMLDivElement) {
    modal.innerHTML = '';
    const modalContent = document.createElement('div');
    modalContent.innerHTML = `
        <img class="modalImg" src="${myTechnology.img}">
        <h1 class="modalTitle">${myTechnology.name}</h1>
        <p class="modalDescription">${myTechnology.description}</p>
        <p class="modalCategory">Категория: ${myTechnology.category}</p>
        <p class="modalYear">Дата выпуска: ${myTechnology.year}</p>
        <p class="modalPopularity">Популярность: ${myTechnology.popularity}</p>
        <div class="closeX">X</div>
    `;
    modal.appendChild(modalContent);
    modal.style.display = 'block';
    body.classList.add('blurModal')

    const closeX = document.querySelector('.closeX') as HTMLDivElement;

    closeX.addEventListener('click', () => {
        modal.style.display = 'none';
        body.classList.remove('blurModal');
    });
}

function toggleNavbar() {
    const navbar = document.querySelector('.navbar') as HTMLElement;
    navbar.style.display = (navbar.style.display === 'flex') ? 'none' : 'flex';
}

document.addEventListener('DOMContentLoaded', () => {
    const burgerIcon = document.getElementById('burgerIcon') as HTMLElement;

    if (burgerIcon) {
        burgerIcon.addEventListener('click', toggleNavbar);
    }
});

let modalContacts2 = document.querySelector('.modal_contacts') as HTMLDivElement;
let modalLink2 = document.querySelector('.contacts_link') as HTMLLinkElement;
let modalCloseContacts2 = document.querySelector('.contactsClose') as HTMLDivElement;
let body3 = document.querySelector('body') as HTMLBodyElement;

modalLink2.addEventListener('click', () => {
    modalContacts2.classList.add('modalOpen');
    body3.classList.add('blurModal2')
})
modalCloseContacts2.addEventListener('click',()=>{
    modalContacts2.classList.remove('modalOpen');
    body3.classList.remove('blurModal2')
})

