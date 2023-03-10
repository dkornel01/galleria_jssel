window.addEventListener("load", init);

function init() {
  const ARTICLELEM = document.querySelectorAll("article");
  const BUTTON = document.querySelector(".bal");
  const BUTTON2 = document.querySelector(".jobb");
  const TARTO = [
    "kepek/DSC7025.jpg",
    "kepek/DSC7365.jpg",
    "kepek/DSC7371_1.jpg",
    "kepek/DSC7444.jpg",
    "kepek/DSC7515.jpg",
  ];
  const TORT = document.querySelector("img");
  elhelyezes(TARTO, ARTICLELEM);
  const KISKEPEK = document.querySelectorAll("article  img");
  for (let index = 0; index < TARTO.length; index++) {
    KISKEPEK[index].addEventListener("click", function () {
      fuggveny(index, TARTO);
    });
  }
}

function elhelyezes(TARTO, ARTICLELEM) {
  for (let i = 0; i < TARTO.length; i++) {
    ARTICLELEM[0].innerHTML += `<img src=${TARTO[i]} alt="kep" >`;
  }
  ARTICLELEM[0].innerHTML += "<div>";

}
function fuggveny(index, TARTO) {
  const NAGYKEP = document.querySelectorAll("section div img");
  console.log(NAGYKEP);
  NAGYKEP[0].src = TARTO[index];
}
