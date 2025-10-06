// 1) Перевірка парності
function checkEvenOdd(number) {
  const resultDiv = document.getElementById("task1");
  if (number % 2 === 0) {
    resultDiv.innerHTML = `<p class="even">Число ${number} є парним</p>`;
  } else {
    resultDiv.innerHTML = `<p class="odd">Число ${number} є непарним</p>`;
  }
}
checkEvenOdd(4);

// 2) Генерація пароля
function generatePassword(name, number) {
  const shortName = name.slice(0, 3);
  const password = shortName + (number * 2);
  document.getElementById("passwordDiv").innerText = "Ваш пароль: " + password;
}
generatePassword("Станіслав", 4);

// 3) Обчислення середнього
function calculateAverage(number) {
  let grades = [];
  for (let i = 1; i <= 3; i++) {
    let grade = parseFloat(prompt("Введіть оцінку " + i + ":"));
    grades.push(grade);
  }
  let sum = grades.reduce((a, b) => a + b, 0);
  let average = sum / grades.length;

  const avgDiv = document.createElement("div");
  avgDiv.id = number; // id = номер у журналі
  avgDiv.innerText = "Середня оцінка: " + average.toFixed(2);
  document.getElementById("task3").appendChild(avgDiv);
}
calculateAverage(4);

// 4) Введення студентів
function inputStudents() {
  let count = parseInt(prompt("Введіть кількість студентів групи:"));
  const container = document.getElementById("students");
  for (let i = 1; i <= count; i++) {
    let name = prompt("Введіть ПІБ студента №" + i + ":");
    const studentDiv = document.createElement("div");
    studentDiv.className = "student";
    studentDiv.innerText = "Студент " + i + ": " + name;
    container.appendChild(studentDiv);
  }
}
inputStudents();
