const form = document.getElementById("bookingForm");
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const experience = document.getElementById("experience").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const guests = document.getElementById("guests").value;
  const name = document.getElementById("name").value.trim();

  const message =
    "Hello BookSangam,%0A%0A" +
    "I'd like to plan a booking.%0A" +
    "Experience: " + encodeURIComponent(experience) + "%0A" +
    "Date: " + encodeURIComponent(date) + "%0A" +
    "Preferred time: " + encodeURIComponent(time) + "%0A" +
    "Guests: " + encodeURIComponent(guests) + "%0A" +
    "Name: " + encodeURIComponent(name);

  window.open("https://wa.me/917266961835?text=" + message, "_blank", "noopener");
});
