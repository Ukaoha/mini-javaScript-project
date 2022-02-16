"use strict";
const mainModal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const overlayHidden = document.querySelector(".overlay");
const OpenModal = document.querySelectorAll(".open-modal");
// console.log(OpenModal)

for (let i = 0; i < OpenModal.length; i++) {
  OpenModal[i].addEventListener("click", function () {
    // console.log("Button clicked");
    mainModal.classList.remove("hidden");
    overlayHidden.classList.remove("hidden");
  });
}
const closeModalBtn = function () {
  mainModal.classList.add("hidden");
  overlayHidden.classList.add("hidden");
};

closeModal.addEventListener("click", closeModalBtn);
overlayHidden.addEventListener("click", closeModalBtn);

document.addEventListener("keydown", function (event) {
  console.log(event.key);
  if (event.key === "Escape" && !mainModal.classList.contains("hidden")) {
    closeModalBtn();
  }

  
});
