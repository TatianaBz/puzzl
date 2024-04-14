import "./index.html";
import "./index.css";
import code from "./image/unnamed.png";

const mult = (a, b) => a * b;

console.log(mult(2, 6));
console.log(mult(4, 3));

const imgWrap = document.querySelector(".img");
const img = new Image();
img.src = code;
img.width = 700;
imgWrap.append(img);
