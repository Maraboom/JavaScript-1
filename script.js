const chess = document.querySelector("div");

let trigger = true;
for (let string = 0; string < 8; string++) {
  for (let item = 0; item < 8; item++) {
    const div = document.createElement("div");
    if (item == 0) {
      trigger = !trigger;
    }
    if (trigger) {
      div.className = "square";
    } else {
      div.className = "square2";
    }
    chess.append(div);
    trigger = !trigger;
  }
}
