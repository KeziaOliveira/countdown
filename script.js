const nextSlapDate = new Date("2024-09-27T00:00:00");

function updateCountdown() {
  const now = new Date();
  const timeDifference = nextSlapDate - now;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = `${days} <span>dias</span>`;
  document.getElementById("hours").innerHTML = `${hours} <span>horas</span>`;
  document.getElementById(
    "minutes"
  ).innerHTML = `${minutes} <span>minutos</span>`;
  document.getElementById(
    "seconds"
  ).innerHTML = `${seconds} <span>segundos</span>`;

  if (timeDifference < 0) {
    clearInterval(countdownInterval);
    document.getElementById("days").innerHTML = "0 <span>dias</span>";
    document.getElementById("hours").innerHTML = "0 <span>horas</span>";
    document.getElementById("minutes").innerHTML = "0 <span>minutos</span>";
    document.getElementById("seconds").innerHTML = "0 <span>segundos</span>";
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);
