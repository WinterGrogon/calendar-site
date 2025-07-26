document.addEventListener("DOMContentLoaded", () => {
    const calendarBody = document.querySelector('.calendar__body');
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // Получаем первый день месяца и количество дней в месяце
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    const totalDays = lastDayOfMonth.getDate();

    // Получаем номер первого дня недели (0 - воскресенье, 1 - понедельник и т.д.)
    const firstDayIndex = firstDayOfMonth.getDay();
    console.log(firstDayIndex);

    // Заполняем календарь
    for (let i = 0; i < firstDayIndex-1; i++) {
        const emptyCell = createCell();
        calendarBody.appendChild(emptyCell);
    }

    for (let day = 1; day <= totalDays; day++) {
        const cell = createCell(day, currentMonth, currentYear);
        calendarBody.appendChild(cell);
    }
});

// Функция для создания ячейки календаря
function createCell(day, currentMonth, currentYear) {
    const cell = document.createElement('div');
    cell.classList.add('cell');

    const dayNumber = document.createElement('h2');
    dayNumber.classList.add('cell__day-number');
    dayNumber.textContent = day ? day : ''; // Заполняем номер дня, если он есть

    const monthName = document.createElement('div');
    monthName.classList.add('cell__month');
    const monthParagraph = document.createElement('p');
    monthParagraph.classList.add('cell__name');
    monthParagraph.textContent = day ? getMonthName() : ''; // Заполняем название месяца, если есть день

    const icon = document.createElement('i');
    icon.classList.add('fa-solid', 'cell__icon');
    if (day) icon.classList.add('fa-umbrella');

    const dayOfWeek = document.createElement('div');
    dayOfWeek.classList.add('cell__day-of-week')
    dayOfWeek.textContent = day ? getDayOfWeek(new Date(currentYear, currentMonth, day)) : '';


    monthName.appendChild(monthParagraph);
    monthName.appendChild(icon);
    cell.appendChild(dayNumber);
    cell.appendChild(monthName);
    cell.appendChild(dayOfWeek);

    return cell;
}

// Функция для получения названия месяца
function getMonthName(currentMonth) {
    const monthNames = [
        "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ];
    return monthNames[currentMonth];
}

// Функция для получения дня недели
function getDayOfWeek(date) {
    const dayNames = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
    return dayNames[date.getDay()]; // Возвращаем название дня недели
}