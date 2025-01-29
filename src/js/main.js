var Box = document.querySelector(".container");
var heart = document.querySelector(".heart");
var like = document.querySelector(".like");
var number = document.querySelector(".number");

Box.addEventListener("click", colorchange);

function colorchange() {
  Box.classList.toggle("is-red");
  heart.classList.toggle("is-white");
  like.classList.toggle("is-white");
  number.classList.toggle("is-white");
}

Box.addEventListener("click", function () {
  var currentNumber = parseInt(number.textContent) || 0;
  number.textContent = currentNumber + 1;
});
