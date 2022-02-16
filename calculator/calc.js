"use strict ";
const calculator = document.querySelector(".calculator");
const keys = document.querySelector(".calculator_keys");
const dispaly = document.querySelector(".display_result");

keys.addEventListener("click", (e) => {
//   determine the type of key  
if(e.target.matches('button')) {
   const key = e.target;
  const action = key.dataset.action;

  if (!action) {
    console.log("number key");
  } else if (
    action === "add" ||
    action === "subtract" ||
    action === "multiply" ||
    action === "divide" ||
    action === "percent"
  ) {
    console.log("operator");
  } else if (action === "decimal") {
    console.log("decimal");
  } else if (action === "clear") {
    console.log("clear");
  } else if (action === "calculate") {
    console.log("equal");
} else if (!action) {
    if(dispalyedNum === '0') {
        dispaly.textContent = keyContent
    }
}
}

})

