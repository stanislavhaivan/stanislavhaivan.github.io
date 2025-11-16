/* ===========================================================
   ЗАВДАННЯ 1 — КОНВЕРТАЦІЯ ТЕМПЕРАТУР
=========================================================== */

const fInput = document.getElementById("fInput");
const cInput = document.getElementById("cInput");

function fToC() {
    let F = parseFloat(fInput.value);
    if (!isNaN(F)) {
        cInput.value = (5/9 * (F - 32)).toFixed(2);
    }
}

function cToF() {
    let C = parseFloat(cInput.value);
    if (!isNaN(C)) {
        fInput.value = (C * 9/5 + 32).toFixed(2);
    }
}

fInput.addEventListener("input", fToC);
cInput.addEventListener("input", cToF);



/* ===========================================================
   ЗАВДАННЯ 2 — МНОЖЕННЯ З ВВОДОМ
=========================================================== */

let a1, b1;
let score1 = 0;

function newTask1() {
    a1 = Math.floor(Math.random() * 10);
    b1 = Math.floor(Math.random() * 10);

    document.getElementById("taskText1").textContent = `${a1} × ${b1} = ?`;
    document.getElementById("answerInput1").value = "";
    document.getElementById("result1").textContent = "";
}

function checkTask1() {
    let user = parseInt(document.getElementById("answerInput1").value);
    if (user === a1 * b1) {
        document.getElementById("result1").textContent = "Правильно!";
        score1++;
    } else {
        document.getElementById("result1").textContent = "Неправильно!";
    }

    document.getElementById("score1").textContent = score1;
}

document.getElementById("nextBtn1").onclick = newTask1;
document.getElementById("checkBtn1").onclick = checkTask1;



/* ===========================================================
   ЗАВДАННЯ 3 — МНОЖЕННЯ З РАДІОКНОПКАМИ
=========================================================== */

let a2, b2;
let score2 = 0;

function newTask2() {
    a2 = Math.floor(Math.random() * 10);
    b2 = Math.floor(Math.random() * 10);

    document.getElementById("taskText2").textContent = `${a2} × ${b2} = ?`;

    const form = document.getElementById("answersForm");
    form.innerHTML = "";

    let correct = a2 * b2;

    // створюємо 4 випадкові відповіді
    let answers = [correct];
    while (answers.length < 4) {
        let wrong = Math.floor(Math.random() * 81);
        if (!answers.includes(wrong)) answers.push(wrong);
    }

    // перемішуємо варіанти
    answers.sort(() => Math.random() - 0.5);

    // додаємо радіокнопки
    answers.forEach(ans => {
        let label = document.createElement("label");
        label.innerHTML = `<input type="radio" name="variant" value="${ans}"> ${ans}<br>`;
        form.appendChild(label);
    });

    document.getElementById("result2").textContent = "";
}

document.getElementById("nextBtn2").onclick = newTask2;

document.getElementById("answersForm").addEventListener("change", () => {
    let chosen = document.querySelector('input[name="variant"]:checked').value;
    let correct = a2 * b2;

    if (parseInt(chosen) === correct) {
        document.getElementById("result2").textContent = "Правильно!";
        score2++;
    } else {
        document.getElementById("result2").textContent = "Неправильно!";
    }

    document.getElementById("score2").textContent = score2;

    // блокуємо всі варіанти після вибору
    document.querySelectorAll('input[name="variant"]').forEach(r => r.disabled = true);
});
