// ===== ЗАВДАННЯ 1 =====
function startGreetingTimer(message, seconds, callback) {
    setTimeout(() => {
        alert(message);
        callback();
    }, seconds * 1000);
}

function runGreetingTimer() {
    startGreetingTimer(
        "Hello from the timer!",
        3,
        () => alert("Time is up!")
    );
}



// ===== ЗАВДАННЯ 2 =====
function calculate(a, b, operation) {
    switch (operation) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : 'Cannot divide by zero';
        default: return 'Invalid operation';
    }
}

function showResult() {
    let a = parseFloat(prompt("Enter the first number:"));
    let b = parseFloat(prompt("Enter the second number:"));
    let op = prompt("Enter operation (+, -, *, /):");

    if (isNaN(a) || isNaN(b)) {
        alert("Please enter valid numbers.");
        return;
    }

    const result = calculate(a, b, op);
    alert(`Result: ${result}`);
}



// ===== ЗАВДАННЯ 3 =====
// Замикання для лічильника
function createClickCounter() {
    let count = 0;
    return function () {
        count++;
        console.log(`Click count: ${count}`);
        // Оновлюємо текст у <div>
        document.getElementById('clickCountDisplay').textContent = `Click count: ${count}`;
    };
}

// Створюємо один екземпляр лічильника
const counter = createClickCounter();

// Викликається при натисканні на кнопку
function runClickCounter() {
    counter();
}
