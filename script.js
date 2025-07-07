// === Calendar Logic ===
const calendarContainer = document.getElementById("calendar");
const totalDays = 31; // October 2025
const startDay = 3; // Wednesday = 3
const highlightDates = [26, 27, 28];

// Fill blank days before October 1
for (let i = 0; i < startDay; i++) {
  const empty = document.createElement("div");
  calendarContainer.appendChild(empty);
}

// Fill actual days
for (let day = 1; day <= totalDays; day++) {
  const cell = document.createElement("div");
  cell.classList.add("day");
  cell.textContent = day;

  if (highlightDates.includes(day)) {
    cell.classList.add("highlight");
  }

  calendarContainer.appendChild(cell);
}

// === Mobile Menu Toggle ===
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});






