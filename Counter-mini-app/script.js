let saveEl = document.getElementById("saveEl");
let countEl = document.getElementById("counter");
let array = ["Previous Entries: "];
let count = 0;
// incrementation ou sf
function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  array.push(count);
  const show = array.join(" - ");
  // kont ka nkhdem b innerText sa3a kayan ma 7sen
  saveEl.textContent = show;
  countEl.textContent = 0;
  count = 0;
}
