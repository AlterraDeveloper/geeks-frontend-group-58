// const btn = document.querySelector("#btn");
// const div = document.querySelector(".container");

// const moment = require("./moment");

// function generatePsw() {
//   const html = `<h1>PASSWORD!!!</h1>`;
//   div.innerHTML = html;
// }

// btn.onclick = generatePsw;

// btn.click()
// btn.dispatchEvent(new Event('click'));

// 1) скопировать вставить  локально в проект
// 2) подключение по ссылке (CDN)
// 3) через npm (для взрослых)

// CDN - Content Delivery Network

const ramadanStartDate = moment("19.02.2026 06:19:00", "DD.MM.YYYY HH:mm:ss");

function getDifference() {
  const now = moment();
  const difference = moment.duration(ramadanStartDate - now);

  return {
    days: Math.floor(difference.asDays()),
    hours: difference.hours(),
    minutes: difference.minutes(),
    seconds: difference.seconds(),
  };
}

function countdown() {
  // 2015 ES5
  // ES6+

  const timeDiff = getDifference();
  // const dd = timeDiff.days;
  // const hh = timeDiff.hours;
  // spread operator
  const { days: dd, hours, minutes, seconds } = { ...timeDiff };

  const daysBlock = document.querySelector("#days");
  daysBlock.innerText = String(dd).padStart(2, "0");

  const hBlock = document.querySelector("#hours");
  hBlock.innerText = String(hours).padStart(2, "0");

  const mBlock = document.querySelector("#minutes");
  mBlock.innerText = String(minutes).padStart(2, "0");

  const sBlock = document.querySelector("#seconds");
  sBlock.innerText = String(seconds).padStart(2, "0");
}

setInterval(() => {
  countdown();
}, 1000);
