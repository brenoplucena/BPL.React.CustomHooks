import "./styles.css";
let inputEle = document.getElementById("inputElement");
let username = document.getElementById("username");

let generateUsername = (e) => {
  username.innerHTML = e.target.value.split(" ").join("-");
};
let debounce = function (cb, delay) {
  let timer;
  return function () {
    let context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb.apply(context, arguments);
    }, delay);
  };
};

inputEle.addEventListener("keyup", debounce(generateUsername, 300));
