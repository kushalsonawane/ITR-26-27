let sumForm = document.getElementById("sumForm");
let numSeqInput = document.getElementById("numSeqInput");
let sumResult = document.getElementById("sumResult");

// Recursive function to sum the sequence array
function sumOfSeq(numSeq, index = 0) {
  // Base case: if we reached the end of the array
  if (index >= numSeq.length) {
    return 0;
  }

  let num = parseFloat(numSeq[index]);
  let currentVal = isNaN(num) ? 0 : num;

  // Recursive call for the next index
  return currentVal + sumOfSeq(numSeq, index + 1);
}

sumForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let numSeq = numSeqInput.value.split(",");

  sumResult.textContent = `Sum is: ${sumOfSeq(numSeq)}`;
});
