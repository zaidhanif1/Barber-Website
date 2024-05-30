const header = document.querySelector('.calendar header h3');
const dates = document.querySelector('.dates');
const navs = document.querySelectorAll('#prev, #next');

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

let date = new Date();
let month = date.getMonth();
let year = date.getFullYear();

function renderCalendar() {
    const start = new Date(year, month, 1).getDay();
    const endDate = new Date(year, month + 1, 0).getDate();
    const end = new Date(year, month, endDate).getDay();
    const endDatePrev = new Date(year, month, 0).getDate();
    let datesHtml = "";

    for (let i = start; i > 0; i--) {
        datesHtml += `<li class="inactive">${endDatePrev - i + 1}</li>`;
    }

    for (let i = 1; i <= endDate; i++) {
        datesHtml += `<li>${i}</li>`;
    }

    for (let i = end + 1; i < 7; i++) {
        datesHtml += `<li class="inactive">${i - end}</li>`;
    }

    dates.innerHTML = datesHtml;
    header.textContent = `${months[month]} ${year}`;
}

function initNavigation() {
    navs.forEach(nav => {
        nav.addEventListener('click', (e) => {
            if (e.target.id === 'prev') {
                month--;
                if (month < 0) {
                    month = 11;
                    year--;
                }
            } else if (e.target.id === 'next') {
                month++;
                if (month > 11) {
                    month = 0;
                    year++;
                }
            }
            renderCalendar();
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderCalendar();
    initNavigation();
});
