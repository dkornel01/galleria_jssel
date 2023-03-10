window.addEventListener("load", init);

function init() {
  const articleELEM = document.querySelectorAll("article");
  const button = document.querySelector(".bal");
  const button2 = document.querySelector(".jobb");
  const tarto = [
    "kepek/DSC7025.jpg",
    "kepek/DSC7365.jpg",
    "kepek/DSC7371_1.jpg",
    "kepek/DSC7444.jpg",
    "kepek/DSC7515.jpg",
  ];
  const tort = document.querySelector("img");
  elhelyezes(tarto, articleELEM);
  const Kiskepek = document.querySelectorAll("article  img");
  for (let index = 0; index < tarto.length; index++) {
    Kiskepek[index].addEventListener("click", function(){
      fuggveny(index,tarto)
  })
}
}

function elhelyezes(tarto, articleELEM) {
  articleELEM[0].innerHTML += "<div>";
  for (let i = 0; i < tarto.length; i++) {
    articleELEM[0].innerHTML += `<img src=${tarto[i]}alt="kep" >`;
  }
  articleELEM[0].innerHTML += "</div>";
}
function fuggveny(index, tarto) {
  const nagykep = document.querySelectorAll("section div img");
  console.log(nagykep);
  nagykep[0].src = tarto[index];
}
