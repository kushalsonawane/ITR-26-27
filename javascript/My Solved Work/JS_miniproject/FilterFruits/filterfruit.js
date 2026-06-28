const fruits = [
  { name: "Lemon", type: "citrus" },
  { name: "Blueberry", type: "berry" },
  { name: "Peach", type: "stone" },
  { name: "Orange", type: "citrus" },
  { name: "Strawberry", type: "berry" },
  { name: "Cherry", type: "stone" },
];

const filterButton = document.querySelector("#filterBtn");
const fruitSelected = document.getElementById("fruitType");
const fruitList = document.getElementById("fruitList");

// Function to render the list of fruits
function renderFruits(filteredList) {
  fruitList.innerHTML = "";
  filteredList.forEach((fruit) => {
    const newli = document.createElement("li");
    newli.textContent = fruit.name;
    fruitList.append(newli);
  });
}

// Render all fruits when the page first loads
renderFruits(fruits);

// Filter and render fruits when the button is clicked
filterButton.addEventListener("click", (e) => {
  e.preventDefault();
  const selectedType = fruitSelected.value;

  const filteredFruits = fruits.filter((fruit) => {
    if (selectedType === "all") {
      return true;
    }
    return fruit.type === selectedType;
  });

  renderFruits(filteredFruits);
});
