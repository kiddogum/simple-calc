const show = document.querySelector("#show");
const equal = document.querySelector("#equal");
const numbers = document.querySelectorAll("#numbers");
const maths = document.querySelectorAll("#maths");
const backspace = document.querySelector("#backspace");
const c = document.querySelector("#c");

let value = "";

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    const pressed = number.getAttribute("data-number");
    value += pressed;
    show.value = value;
  });
});

maths.forEach((math) => {
  math.addEventListener("click", () => {
    value += math.getAttribute("data-math");
    show.value = value;
  });
});

equal.addEventListener("click", () => {
  if (value.includes("/")) {
    const array = value.split("/");
    result = parseFloat(array[0] / array[1]).toFixed(2);
    show.value = result;
    value = result;
  } else if (value.includes("*")) {
    const array = value.split("*");
    result = parseFloat(array[0] * array[1]).toFixed(2);
    show.value = result;
    value = result;
  } else if (value.includes("-")) {
    const array = value.split("-");
    result = parseFloat(array[0] - array[1]).toFixed(2);
    show.value = result;
    value = result;
  } else if (value.includes("+")) {
    const array = value.split("+");
    result = parseFloat(parseFloat(array[0]) + parseFloat(array[1])).toFixed(2);
    show.value = result;
    value = result;
  }
});

backspace.addEventListener("click", () => {
  value = value.substring(0, value.length - 1);
  show.value = value;
});
c.addEventListener("click", () => {
  value = "";
  show.value = value;
});
