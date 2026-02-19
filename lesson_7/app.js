class RamadanDay {
  constructor(index, calendarDay, suhur, iftar) {
    this.index = index;
    this.calendarDay = calendarDay;
    this.suhur = suhur;
    this.iftar = iftar;
  }
}

const ramadanDays = [
  new RamadanDay(1, 19, "06:19", "18:45"),
  new RamadanDay(2, 20, "06:17", "18:46"),
  new RamadanDay(3, 21, "06:16", "18:47"),
  new RamadanDay(4, 22, "06:14", "18:45"),
  new RamadanDay(5, 23, "06:19", "18:45"),
  new RamadanDay(6, 24, "06:19", "18:45"),
  new RamadanDay(7, 25, "06:19", "18:45"),
  new RamadanDay(8, 26, "06:19", "18:45"),
  new RamadanDay(9, 27, "06:19", "18:45"),
  new RamadanDay(10, 28, "06:19", "18:45"),
];

function renderWeekday(dayName) {
  const div = document.createElement("div");
  div.className = "weekday";
  div.textContent = dayName;
  return div;
}

function renderWeekdays() {
  const weekdays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  const container = document.querySelector(".weekdays");
  container.innerHTML = "";
  const divs = weekdays.map((weekday) => renderWeekday(weekday));
  container.append(...divs);
}

function renderDay(order, isRamadan) {
  const div = `<div class="day ${isRamadan ? "ramadan" : ""}">${order}</div>`;
  // const div2 = "<div class=\"day\">" + order + "</div>";
  return div;
}

function renderCalendar() {
  const days = Array.from({ length: 28 }, (_, index) => index + 1); // [1, 2, ...]
  const daysHTML = days
    .map((day) => {
      const ramadanDay = ramadanDays.find((r) => r.calendarDay === day);
      const isRamadan = ramadanDay !== undefined;
      return renderDay(day, isRamadan);
    })
    .join("");

  const emptySlots = Array.from({ length: 6 }, (_, index) => index + 1);
  const emptySlotsHtml = emptySlots.map((_) => `<div></div>`).join("");

  const container = document.querySelector(".days");
  container.innerHTML = emptySlotsHtml + daysHTML;
}

renderWeekdays();
renderCalendar();

const container = document.querySelector(".days");

// event propagation - распространение события
container.onclick = (event) => {
  const clickedDay = event.target;
  if (clickedDay.classList.contains("ramadan")) {
    const ramadanDay = ramadanDays.find(
      (r) => r.calendarDay === Number(clickedDay.textContent),
    );
    const infoBlock = document.querySelector(".header h2");
    infoBlock.innerHTML = `День поста: <strong>${ramadanDay.index}</strong><br/>
                     Начало поста <strong>${ramadanDay.suhur}</strong><br/>
                    Ифтар <strong style="color:red">${ramadanDay.iftar}</strong>`;
  }
};
