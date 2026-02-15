// ===============================
// REALTIME CLOCK
// ===============================
function updateTime() {

  const now = new Date();

  let h = now.getHours();
  let m = now.getMinutes();

  if (m < 10) m = "0" + m;

  const days = [
    "Sunday","Monday","Tuesday",
    "Wednesday","Thursday","Friday","Saturday"
  ];

  // jam di status bar
  document.getElementById("time").innerText = `${h}:${m}`;

  // jam lockscreen
  document.getElementById("lockTime").innerText = `${h}:${m}`;

  // jam widget homescreen
  document.getElementById("homeClock").innerText = `${h}:${m}`;
  document.getElementById("homeDate").innerText = days[now.getDay()];
}

// update tiap 1 detik
setInterval(updateTime, 1000);
updateTime();


// ===============================
// SWIPE UP TO UNLOCK
// ===============================
let startY = 0;

const lockscreen = document.getElementById("lockscreen");
const apps = document.querySelectorAll(".app");
const clockWidget = document.getElementById("clockWidget");

// saat jari menyentuh layar
lockscreen.addEventListener("touchstart", e => {
  startY = e.touches[0].clientY;
});

// saat jari digeser
lockscreen.addEventListener("touchmove", e => {

  const diff = startY - e.touches[0].clientY;

  // kalau swipe ke atas cukup jauh
  if (diff > 60) {

    // lockscreen geser naik
    lockscreen.classList.add("unlock");

    // munculin widget + app
    setTimeout(() => {

      clockWidget.classList.add("show");

      apps.forEach((app, i) => {
        setTimeout(() => {
          app.classList.add("show");
        }, i * 120);
      });

    }, 300);
  }

});