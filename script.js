const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");
const loading = document.getElementById("laoding");
const today = new Date();
const currentMonth = today.getMonth() + 1;
const ramadanTime = new Date("February 18 2026 00:00:00");

//Update counts function
function updateCountdown() {
  const currentTime = new Date();
  const diff = ramadanTime - currentTime;

  // Num of sec until Ramadan
  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  days.innerHTML = d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
}

//Show loading
setTimeout(() => {
  loading.remove();
  countdown.style.display = "flex";
}, 1000);

// Run updateCountdown every 1 second
setInterval(updateCountdown, 1000);
