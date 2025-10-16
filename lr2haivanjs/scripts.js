// ===== ЗАВДАННЯ 1 =====
// Створіть змінну userName через prompt та виведіть у alert повідомлення:
// «Hello, [userName]! Welcome to JavaScript»
function task1() {
    let userName = prompt("What is your name?");
    if (userName) {
        alert(`Hello, ${userName}! Welcome to JavaScript`);
    } else {
        alert("You didn't enter a name.");
    }
}

// ===== ЗАВДАННЯ 2 =====
// Запитайте в користувача його вік. Збережіть у змінну age, порахуйте рік народження
// Вивести повідомлення: «You were born in 2005»
function task2() {
    let age = prompt("How old are you?");
    if (age && !isNaN(age)) {
        let currentYear = new Date().getFullYear();
        let birthYear = currentYear - Number(age);
        alert(`You were born in ${birthYear}`);
    } else {
        alert("Please enter a valid number for age.");
    }
}

// ===== ЗАВДАННЯ 3 =====
// Введення firstName і lastName через prompt, виведення через + та шаблонний рядок
function task3() {
    let firstName = prompt("Enter your first name:");
    let lastName = prompt("Enter your last name:");

    if (firstName && lastName) {
        // Виведення через конкатенацію
        console.log("Your full name is [" + firstName + " " + lastName + "]");

        // Виведення через шаблонний рядок
        console.log(`Your full name is [${firstName} ${lastName}]`);

        alert("Full name has been logged to the console.");
    } else {
        alert("Please enter both first and last names.");
    }
}
