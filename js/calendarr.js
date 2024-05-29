const header = document.querySelector('.calendar header h3');
const dates = document.querySelector('.dates'); // Corrected the selector
const navs = document.querySelectorAll('#prev, #next'); // Corrected the selector
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

    dates.innerHTML = datesHtml;
    header.textContent = `${months[month]} ${year}`; // Corrected template literal syntax
}

renderCalendar();
