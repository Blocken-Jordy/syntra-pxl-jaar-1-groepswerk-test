let counter = 0;
let hiddenCounter = 0;
let sixpackCounter = 0;
let sixpackInterval;

const klikbareJupilerKnop = document.querySelector(".jupiler-button");
const tripel = document.querySelector(".tripel-button");
const restartButton = document.querySelector(".restart-button");
const num = document.getElementById("coun");
const sixpack = document.getElementById("sixpack");

tripel.disabled = true;

//Jupiler knop +1
klikbareJupilerKnop.onclick = function () {
  counter++;
  hiddenCounter++;
  num.value = counter;
  console.log(counter);

  if (hiddenCounter === 10) {
    klikbareJupilerKnop.disabled = true;
    tripel.disabled = false;
  }

  if (counter === 10) {
    sixpack.disabled = false;
  }
};

// Tripel knop +2
tripel.onclick = function () {
  counter += 2;
  klikbareJupilerKnop.disabled = false;
  tripel.disabled = true;
  console.log(counter);
  num.value = counter;

  hiddenCounter = 0;
};

//restart knop
restartButton.addEventListener("click", () => {
  counter = 0;
  console.log(counter);
  sixpackCounter = 0;
  clearInterval(sixpackInterval);
});

//sixpack knop - iedere 10s telt hij +1
sixpack.onclick = function () {
  counter -= 10;
  sixpackCounter += 1;
  num.value = counter;
  timer();
};

function timer() {
  if (sixpackInterval) {
    clearInterval(sixpackInterval);
  }
  sixpackInterval = setInterval(() => {
    counter += sixpackCounter;
    num.value = counter;
    console.log(counter);
    if (counter < 10) {
      sixpack.disabled = true;
    } else {
      sixpack.disabled = false;
    }
  }, 1000);
}
