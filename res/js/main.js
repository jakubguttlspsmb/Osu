const circle = document.getElementById("circle");
const couter = document.getElementById("couter");
const timerFast = document.getElementById("timerFast");
const timerMedium = document.getElementById("timerMedium");
const timerSlow = document.getElementById("timerSlow");
const ballFast = document.getElementById("ballFast");
const ballMedium = document.getElementById("ballMedium");
const ballSlow = document.getElementById("ballSlow");
const dificulty = document.getElementById("dificulty");
var hits = 0;

image_array = ["enemy1.png", "enemy2.png", "enemy3.png", "enemy4.png", "enemy5.png"];
function get_random_image() {
  random_index = Math.floor(Math.random() * image_array.length);
  selected_image = image_array[random_index];
  document.getElementById("circle").src = `./res/img/${selected_image}`;
}

image_array2 = [
  "can_i_play_daddy.png",
  "dont_hurt_me.png",
  "bring_em.png",
  "i_am_death_incarnatr.png",
  "uber.png",
];

var myTimer = setInterval(myFn, 400000);

function randomize() {
  document.getElementById("circle").style.marginTop = randomNumber(7, 22);
  document.getElementById("circle").style.marginLeft = randomNumber(-74, 74);
  hits++;
  counter.innerHTML = hits;
  clearInterval(myTimer);
  myTimer = setInterval(myFn, x);
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min + "%";
}

function myFn() {
  hits -= 2;
  counter.innerHTML = hits;
}

timerFast.onclick = () => {
  x = 400;
  document.getElementById("timerFast").style.fontWeight = "bold";
  document.getElementById("timerMedium").style.fontWeight = "normal";
  document.getElementById("timerSlow").style.fontWeight = "normal";
  selected_image2 = image_array2[4];
  document.getElementById("dificulty").src = `./res/img/${selected_image2}`;
};
timerMedium.onclick = () => {
  x = 900;
  document.getElementById("timerFast").style.fontWeight = "normal";
  document.getElementById("timerMedium").style.fontWeight = "bold";
  document.getElementById("timerSlow").style.fontWeight = "normal";
  selected_image2 = image_array2[2];
  document.getElementById("dificulty").src = `./res/img/${selected_image2}`;
};
timerSlow.onclick = () => {
  x = 1600;
  document.getElementById("timerFast").style.fontWeight = "normal";
  document.getElementById("timerMedium").style.fontWeight = "normal";
  document.getElementById("timerSlow").style.fontWeight = "bold";
  selected_image2 = image_array2[0];
  document.getElementById("dificulty").src = `./res/img/${selected_image2}`;
};

ballFast.onclick = () => {
  document.getElementById("circle").style.transition = "0.1s";
  document.getElementById("ballFast").style.fontWeight = "bold";
  document.getElementById("ballMedium").style.fontWeight = "normal";
  document.getElementById("ballSlow").style.fontWeight = "normal";
};
ballMedium.onclick = () => {
  document.getElementById("circle").style.transition = "0.3s";
  document.getElementById("ballFast").style.fontWeight = "normal";
  document.getElementById("ballMedium").style.fontWeight = "bold";
  document.getElementById("ballSlow").style.fontWeight = "normal";
};
ballSlow.onclick = () => {
  document.getElementById("circle").style.transition = "0.7s";
  document.getElementById("ballFast").style.fontWeight = "normal";
  document.getElementById("ballMedium").style.fontWeight = "normal";
  document.getElementById("ballSlow").style.fontWeight = "bold";
};
