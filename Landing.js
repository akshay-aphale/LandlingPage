// Countdown Timer
const countdown = document.getElementById("countdown");
let seconds = 10800; // 3 hours
setInterval(() => {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  countdown.textContent = `${hrs}:${mins}:${secs}`;
  seconds--;
}, 1000);

// Accordion for FAQ
const acc = document.querySelectorAll(".accordion-btn");
acc.forEach(btn => {
  btn.addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  });
});

// Google Sheet Integration
const scriptURL = 'YOUR_GOOGLE_SHEET_SCRIPT_URL';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Thank you! We'll contact you soon.";
      form.reset();
      setTimeout(() => msg.innerHTML = "", 4000);
    })
    .catch(error => console.error('Error!', error.message));
});
