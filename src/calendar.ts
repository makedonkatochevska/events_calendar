const calendarBody = document.querySelector("#calendar-body") as HTMLDivElement;
const monthAndYear = document.querySelector("#monthAndYear") as HTMLDivElement;
const prevBtn = document.querySelector("#prevBtn") as HTMLButtonElement;
const nextBtn = document.querySelector("#nextBtn") as HTMLButtonElement;
const form = document.querySelector("#addEvent") as HTMLFormElement;
const dateInput = document.querySelector("#date") as HTMLInputElement;
const titleInput = document.querySelector("#title") as HTMLInputElement;
const colorInput = document.querySelector("#color") as HTMLInputElement;
const eventList = document.querySelector("#eventsContainer") as HTMLDivElement;

let currentDate: Date = new Date();

type CalendarEvents = {
  id: number;
  date: string;
  title: string;
  color: string;
};

let events: CalendarEvents[] = [];

//random id number generator
function generateRandomId(): number {
  return Math.floor(1000 + Math.random() * 9000);
}

//update calendar display year
function updateCalendarDisplayYear(): void {
  monthAndYear.innerHTML = currentDate.toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  });
}

//render calendar
function renderCalendar(date: Date): void {
  calendarBody.innerHTML = "";

  const year: number = date.getFullYear();
  const month: number = date.getMonth();

  const firstDay: number = new Date(year, month, 1).getDay();
  const daysInMonth: number = new Date(year, month + 1, 0).getDate();

  const today = new Date();
  const isSameMonth =
    today.getFullYear() === year && today.getMonth() === month;

  const fragment: DocumentFragment = document.createDocumentFragment();
  let weekRow = document.createElement("div");
  weekRow.className = "calendar-week";

  for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement("div");
    emptyCell.className = "empty-cell";
    weekRow.appendChild(emptyCell);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    if (weekRow.children.length === 7) {
      fragment.appendChild(weekRow);
      weekRow = document.createElement("div");
      weekRow.className = "calendar-week";
    }

    const dayCell = document.createElement("div");
    dayCell.className = "day-cell";
    weekRow.appendChild(dayCell);

    const dayString = `${year}-${(month + 1).toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`;

    const spanDayCell = document.createElement("span");
    spanDayCell.id = "spanDayCell";
    spanDayCell.className = "spanDayCell";
    spanDayCell.textContent = day.toString();
    dayCell.appendChild(spanDayCell);

    if (isSameMonth && today.getDate() === day) {
      dayCell.classList.add("today");
    }

    const dayEvents = events.filter((event) => event.date === dayString);
    dayEvents.forEach((event) => {
      const eventSpan = document.createElement("span");
      eventSpan.className = "event-day";
      eventSpan.textContent = event.title;
      eventSpan.style.borderColor = event.color;
      dayCell.appendChild(eventSpan);
    });
  }

  // Append the last row
  if (weekRow.children.length > 0) {
    fragment.appendChild(weekRow);
  }

  calendarBody.appendChild(fragment);
}

// add event to calendar
function addEventToCalendar(): void {
  storeEvents();
  renderCalendar(currentDate);
}

// add events to array
function storeEvents(): void {
  const date: string = dateInput.value.trim();
  const title: string = titleInput.value.trim();
  const color: string = colorInput.value.trim();

  if (date && title && color) {
    const eventObj: CalendarEvents = {
      id: generateRandomId(),
      date: date,
      title: title,
      color: color,
    };

    events.push(eventObj);
    console.log(events);

    form.reset();
  }
}

// add events to event list
function renderEventList(): void {
  eventList.innerHTML = "";

  events.forEach((event) => {
    const eventBox = document.createElement("div");
    eventBox.className = "event-in-list";
    eventBox.innerHTML = `
    <div style="border-left: 5px solid ${event.color}; padding-left: 5px;">
       <p>${event.title}</p>
       <p>${event.date}</p>
    </div>
  `;

    eventList.appendChild(eventBox);
  });
}

//-----EVENTS
//prev btn event
prevBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  updateCalendarDisplayYear();
  renderCalendar(currentDate);
});

//next btn event
nextBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  updateCalendarDisplayYear();
  renderCalendar(currentDate);
});

//form submit event
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  addEventToCalendar();
  renderEventList();
});

updateCalendarDisplayYear();
renderCalendar(currentDate);
