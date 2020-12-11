window.onload = initbutton;

var topbutton;
var bottombutton;
var xbutton;

function initbutton() {
  topbutton = document.querySelector("#topbutton");
  bottombutton = document.querySelector("#bottombutton");
  xbutton = document.querySelector("#xbutton");
  topbutton.onclick = handleClick;
  bottombutton.onclick = handleClick;
  xbutton.onclick = handleClick;
}

function handleClick(event) {
  switch (event.target.id) {
  case 'topbutton':
    topbutton.classList.toggle("button-pressed");
    bottombutton.classList.remove("button-pressed");
    break;
  case 'bottombutton':
    bottombutton.classList.toggle("button-pressed");
    topbutton.classList.remove("button-pressed");
    break;
  case 'xbutton':
    topbutton.classList.remove("button-pressed");
    bottombutton.classList.remove("button-pressed");
    break;
  }
  console.log(event.target);
}
