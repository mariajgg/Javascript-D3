
let colorSeleccionado = "";

key.style.width = "200px";
key.style.height = "200px";
key.style.backgroundColor = "white";
key.style.border = "2px solid black";
key.style.margin = "10px";

function cambiarColor(color) {
  const divKey = document.getElementById("key");
  divKey.style.width = "200px";
  divKey.style.height = "200px";
  divKey.style.backgroundColor = "white";
  divKey.style.border = "2px solid black";
  divKey.style.margin = "10px";
  divKey.style.backgroundColor = color;
}

function crearOActualizarDiv(color) {
  let divExistente = document.getElementById("keyColor");

  if (!divExistente) {
    divExistente = document.createElement("div");
    divExistente.id = "keyColor";
    divExistente.style.width = "200px";
    divExistente.style.height = "200px";
    divExistente.style.backgroundColor = "white";
    divExistente.style.border = "2px solid black";
    divExistente.style.margin = "10px";
    divExistente.style.backgroundColor = color;

    document.body.appendChild(divExistente);
  } else {
    divExistente.style.backgroundColor = color;
  }
}

document.addEventListener("keydown", (event) => {
  if (event.key === "a") {
    colorSeleccionado = "pink";
    cambiarColor(colorSeleccionado);
  } else if (event.key === "s") {
    colorSeleccionado = "orange";
    cambiarColor(colorSeleccionado);
  } else if (event.key === "d") {
    colorSeleccionado = "lightblue";
    cambiarColor(colorSeleccionado);
  }

  if (event.key === "q") {
    crearOActualizarDiv("purple");
  } else if (event.key === "w") {
    crearOActualizarDiv("gray");
  } else if (event.key === "e") {
    crearOActualizarDiv("brown");
  }
});