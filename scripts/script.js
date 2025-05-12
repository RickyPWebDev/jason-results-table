document.addEventListener("DOMContentLoaded", () => {
  fetch('./data/data.json')
    .then(response => response.json())
    .then(data => {
      const list = document.getElementById("summary-list");

      data.forEach(item => {
        const li = document.createElement("li");
        li.className = item.class;

      li.innerHTML = `
    <span>
        <img src="${item.icon}" alt="${item.category}"/>
        ${item.category}
    </span>
        <span><strong>${item.score}</strong> / 100</span>
    `;

        list.appendChild(li);
      });
    })
    .catch(error => console.error("Error loading JSON:", error));
});