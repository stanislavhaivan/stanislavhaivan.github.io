// 1. Поточна дата і час
function showNow() {
  let now = new Date();
  document.getElementById("now").innerText =
    now.toLocaleString("uk-UA");
}

// 2. День тижня
function showDay() {
  let date = new Date();
  let days = ["НД", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
  document.getElementById("day").innerText =
    "Сьогодні: " + days[date.getDay()];
}

// 3. Секунд до завтра
function secondsToTomorrow() {
  let now = new Date();

  let tomorrow = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1
  );

  let секунд = Math.floor((tomorrow - now) / 1000);

  document.getElementById("tomorrow").innerText =
    "До завтра залишилось: " + секунд + " сек.";
}
