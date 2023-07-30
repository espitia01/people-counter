
const element = document.getElementById("count-el");
let count = Number(element.innerText);
let saveEl = document.getElementById("save-el");

function increment() {
    count += 1;
    element.innerText = count;
}

//Document Object Model

function decrement() {
    count -= 1;
    element.innerText = count;
}

function save() {
    let curr = " " + count + " - ";
    saveEl.innerText = saveEl.innerText + curr;
}

function reset() {
    element.innerText = 0;
    saveEl.innerText = "Previous Entries: ";
}
