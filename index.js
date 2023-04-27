let counter = 0;
let hiddenCounter = 0;

const klikbareJupilerKnop = document.querySelector(".jupiler-button");
const tripel = document.querySelector(".tripel-button");
const restartButton = document.querySelector(".restart-button");
let num = document.getElementById("coun");

tripel.disabled = true;

klikbareJupilerKnop.onclick = function () {
  counter++;
  hiddenCounter++;
  num.value = counter;
  console.log(counter);

  if (hiddenCounter === 10) {
    klikbareJupilerKnop.disabled = true;
    tripel.disabled = false;
  }
};
tripel.onclick = function () {
  counter += 2;
  klikbareJupilerKnop.disabled = false;
  tripel.disabled = true;
  console.log(counter);
  num.value = counter;

  hiddenCounter = 0;
};

restartButton.addEventListener("click", () => {
  counter = 0;
  console.log(counter);
});
