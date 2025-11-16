// script.js
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('newTaskInput');
  const list  = document.getElementById('tasksList');

  // допоміжна: формат дати у вигляді DD.MM.YY, HH:MM
  function formatNow(date = new Date()){
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yy = String(date.getFullYear() % 100).padStart(2, '0');
    const hh = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    return `${dd}.${mm}.${yy}, ${hh}:${min}`;
  }

  // створює елемент завдання та додає в список
  function addTask(text){
    const trimmed = text.trim();
    if (!trimmed) return;

    const li = document.createElement('li');
    li.className = 'task';

    // checkbox
    const cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.className = 'task__checkbox';
    cb.setAttribute('aria-label', 'Позначити завдання виконаним');

    // текст завдання
    const txt = document.createElement('div');
    txt.className = 'task__text';
    txt.textContent = trimmed;

    // час
    const time = document.createElement('div');
    time.className = 'task__time';
    time.textContent = formatNow();

    // подія - при відміченні завдання стає виконаним
    cb.addEventListener('change', () => {
      if (cb.checked) {
        li.classList.add('done');
        // checkbox сховається через CSS (.task.done .task__checkbox { display: none; })
        // залишаємо елемент у DOM (щоб не губити розмітку)
      }
    });

    li.appendChild(cb);
    li.appendChild(txt);
    li.appendChild(time);

    // ставимо нове завдання в початок списку
    list.prepend(li);
  }

  // обробник: Enter додає завдання
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTask(input.value);
      input.value = '';
    }
  });

  // Optional: double-click на текст — видалити (ненав'язкова додаткова фічка)
  list.addEventListener('dblclick', (e) => {
    const li = e.target.closest('.task');
    if (li) li.remove();
  });
});
