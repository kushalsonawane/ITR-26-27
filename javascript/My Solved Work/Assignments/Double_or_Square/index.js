let sequenceForm = document.getElementById("sequenceForm");
let numInput = document.getElementById("numInput");
let operationDropdown = document.getElementById("operationDropdown");
let resultSequence = document.getElementById("resultSequence");

sequenceForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  // Trim spaces and convert inputs to numbers
  let numSeq = numInput.value.split(",").map((num) => Number(num.trim()));

  const square = (arr) => arr.map((num) => num * num);
  const double = (arr) => arr.map((num) => num * 2);

  if (operationDropdown.value === "Square") {
    let result = square(numSeq);
    resultSequence.textContent = `Result: ${result.join(", ")}`;
  }
  
  if (operationDropdown.value === "Double") {
    let result = double(numSeq);
    resultSequence.textContent = `Result: ${result.join(", ")}`;
  }
});
