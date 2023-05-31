const button_click = () => (msg.innerText = "お名前は" + nameText.value + "さんですね");
const enter_click = () => (msg.innerText = "こんにちは" + nameText.value + "さん");

let nameText = document.getElementById("nameText");
nameText.addEventListener("input", enter_click);

let msg = document.getElementById("msg");
let checkbutton = document.getElementById("checkButton");

checkbutton.addEventListener("click", button_click);
