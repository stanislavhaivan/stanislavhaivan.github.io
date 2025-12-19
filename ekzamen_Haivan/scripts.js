document.getElementById("btn").onclick = function () {
  const input = document.getElementById("countries").value;
  const list = document.getElementById("list");

  list.innerHTML = ""; 

  const countries = input.split(",");

  for (let i = 0; i < countries.length; i++) {
    const li = document.createElement("li");
    li.textContent = countries[i].trim();
    list.appendChild(li);
  }
};
