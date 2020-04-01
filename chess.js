const figurs = {
  black: {
    king: "&#9818",
    rook: "&#9820",
    bishop: "&#9821",
    queen: "&#9819",
    knight: "&#9822",
    pawn: "&#9823"
  },
  white: {
    king: "&#9812",
    rook: "&#9814",
    bishop: "&#9815",
    queen: "&#9813",
    knight: "&#9816",
    pawn: "&#9817"
  }
};

function addSquares(extraClass) {
  const chess = document.querySelector("#chess");

  const square = document.createElement("div");
  square.classList.add("square");
  square.innerHTML = figurs.black.queen;
  if (extraClass) square.classList.add(extraClass);

  chess.append(square);
  function clickEvent() {
    if (document.querySelector(".click")) {
      square.classList.remove("click");
    } else {
      square.classList.add("click");
    }
  }
  square.addEventListener("click", clickEvent);
}

const color = {
  one: "light",
  two: "dark"
};

for (let i = 0; i < 64; i++) {
  if (!(i % 8)) {
    color.one = color.one === "light" ? "dark" : "light";
    color.two = color.two === "light" ? "dark" : "light";
  }

  const colorClass = i % 2 ? color.one : color.two;

  addSquares(colorClass);
}
