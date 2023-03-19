"use strict";

//burger bar
let navigation = document.getElementById("navBar");
let burgerBar = document.getElementById("burgerBar");


burgerBar.addEventListener("click", function () {
  navigation.classList.toggle("active");
});












let button = document.querySelector(".btn-add");

let inputField = document.querySelector(".input");

let ulItem = document.querySelector(".ul-item");

let formElement = document.querySelector(".form-block");

formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  let inputValueItem = inputField.value;
  if (inputValueItem == " ") {
    return;
  }
  let li = document.createElement("li");
  li.textContent = inputValueItem;
  let span = document.createElement("span");
  span.textContent = "x";
  span.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(span);

  ulItem.appendChild(li);
  inputField.value = " ";
});

document.querySelector(".clearall").addEventListener("click", function () {
  ulItem.innerHTML = " ";
});
