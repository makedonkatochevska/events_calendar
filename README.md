# Event Calendar App 📅

## Table of Contents

<details>
  <summary>Click to expand</summary>
  - 📜 Project Description <br>
  - ⚙️ Technologies Used <br>
  - 🎮 Demo <br>
  - 🔨 Installation <br>
  - 🚀 Usage <br>
  - 📝 Credits <br>
  - 📞 Contact <br>
</details>
---

## Project Description 📜

The **Event Calendar Application** allows users to create, manage, and visually track events in a dynamic calendar interface. This project showcases skills in **TypeScript**, **DOM manipulation**, and **calendar logic**, as well as handling user input through forms.

### Key Features:

- Add new events using a form (title, date, color).
- Display events in both a list and calendar view.
- Use custom colors to highlight each event.
- Navigate between months using "Previous" and "Next" buttons.
- Automatically highlight **today’s date** and **days with events**.
- Fully built with **TypeScript** and compiled to JavaScript using a configured build system.

---

## Technologies Used ⚙️

- ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
- ![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=flat-square&logo=bootstrap&logoColor=white)
- ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)

---

## Demo 🎮

You can try out the Age Calculator by visiting the live demo link below:

- [Live Demo](https://events-calendar-makedonkat.netlify.app/)

---

## Installation 🔨

To run these exercises locally, follow these steps:

### Prerequisites

- Node.js and npm installed
- TypeScript installed globally:
  ```bash
  npm install -g typescript
  ```

### Steps to Install

1. Clone the repository:

bash
git clone https://github.com/makedonkatochevska/events_calendar.git .

2. Open the index.html file into the browser of choice.

---

## Usage 🚀

### Creating Events

- Fill in the event form (date, title, color).
- Click **"Add Event"**.
- The event will:
  - Appear in the event list at the top of the page.
  - Be marked on the calendar using the `.event-day` class.
  - Display a border in the selected event color.

### Calendar Navigation

- Use **Previous** and **Next** buttons to switch between months.
- The current month is displayed at the top.
- **Today’s date** is highlighted with the `.today` class.

### Notes

- Event object structure:
  ```ts
  type CalendarEvent = {
    id: number;
    date: string;
    title: string;
    color: string;
  };
  ```
- IDs are generated randomly.
- All DOM manipulation and rendering are done in TypeScript.
- Compiled files are stored in /build.

---

## Credits 📝

Built as a DOM logic and TypeScript challenge, this app was created to demonstrate dynamic DOM handling, calendar rendering, and TypeScript-to-JavaScript compilation using tsc.

---

## Contact 📞

📫 You can reach me through email at [makedonkatochevska@gmail.com](mailto:makedonkatochevska@gmail.com) or follow me on:

- [LinkedIn](https://www.linkedin.com/in/makedonka-tochevska)
- [GitHub](https://github.com/makedonkatochevska)
