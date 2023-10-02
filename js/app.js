const container = document.getElementById("scores");

const createTicket = (data) => {
  data.forEach((item, index) => {
    const element = document.createElement("div");
    element.className = "ticket";

    const iconCategory = document.createElement("div");
    iconCategory.className = "icons";

    const icon = document.createElement("img");
    const category = document.createElement("p");
    const score = document.createElement("p");

    icon.src = item.icon;
    category.textContent = item.category;
    score.innerHTML = `${item.score} <span> / 100 </span>`;
    score.classList.add("dark_gray_blue");

    // Asignar una clase de color a cada elemento en función del índice
    const colorClass = [
      "light-red",
      "orange-yellow",
      "green-teal",
      "cobalt-blue",
    ];

    const colorIndex = index % colorClass.length;
    element.classList.add(colorClass[colorIndex]);

    iconCategory.appendChild(icon);
    iconCategory.appendChild(category);

    element.appendChild(iconCategory);
    element.appendChild(score);

    container.appendChild(element);
  });
};

fetch("../data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    return response.json();
  })
  .then((data) => {
    createTicket(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
