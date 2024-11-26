// function pintar() {
//   ele.style.backgroundColor = "yellow";
// }
// const ele = document.getElementById("ele1");
// ele.addEventListener("click", pintar);

const ele = document.getElementById("ele1");

const pintar = (elemento, color = "green") => {
  elemento.style.backgroundColor = color;
};

ele.addEventListener("click", () => {
  pintar(ele, "yellow");
});