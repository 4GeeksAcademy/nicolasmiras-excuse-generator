import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  function generateExcuse() {
    let randomNumber = arr => arr[Math.floor(Math.random() * arr.length)];
    return `${randomNumber(who)} ${randomNumber(action)} ${randomNumber(what)} ${randomNumber(when)}.`;
  }

  const excuse = generateExcuse();
  document.getElementById("excuse").innerText = excuse;
};
