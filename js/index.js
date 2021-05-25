"use strict";
window.onload = () => {
  const submit = document.querySelector("#submit");
  submit.addEventListener("click", handleClick);
};
function getTheElements() {
  const name = document.querySelector("#name");
  const food = document.querySelector("#food");
  const animal = document.querySelector("#animal");
  const spans = document.querySelectorAll("span");
  return [name, food, animal, spans];
}

function assignTheValues(array) {
  let [name, food, animal, spans] = array;
  spans = Array.from(spans);
  spans.map((span, idx) => (span.innerText = array[idx].value));
}

function handleClick(e) {
  e.preventDefault();
  const elementsArray = getTheElements();
  assignTheValues(elementsArray);
}
