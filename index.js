let counter = 0;
let hiddenCounter = 0;
let sixpackCounter = 0;
let sixpackInterval;
let vodkaInterval;
let vodka = 0;

const klikbareJupilerKnop = document.querySelector(".jupiler-button");
const tripel = document.querySelector(".tripel-button");
const restartButton = document.querySelector(".restart-button");
const num = document.getElementById("coun");
const sixpack = document.getElementById("sixpack");
const voka = document.getElementById("vodka");

tripel.disabled = true;

//Jupiler knop +1
klikbareJupilerKnop.onclick = function () {
  counter++;
  hiddenCounter++;
  num.value = counter;

  if (hiddenCounter === 10) {
    klikbareJupilerKnop.disabled = true;
    tripel.disabled = false;
  }

  if (counter === 10) {
    sixpack.disabled = false;
  }
  if (counter === 10) {
    voka.disabled = false;
  }
};

// Tripel knop +2
tripel.onclick = function () {
  counter += 2;
  klikbareJupilerKnop.disabled = false;
  tripel.disabled = true;
  num.value = counter;

  hiddenCounter = 0;
};

//restart knop
restartButton.addEventListener("click", () => {
  counter = 0;
  num.value = counter;
  vodka = 0;
  sixpackCounter = 0;
  hiddenCounter = 0;
  clearInterval(sixpackInterval);
  clearInterval(vodkaInterval);
  if (counter < 10) sixpack.disabled = true;
  if (counter < 10) voka.disabled = true;
  klikbareJupilerKnop.disabled = false;
  tripel.disabled = true;
});

//sixpack knop - iedere 10s telt hij +1
sixpack.onclick = function () {
  counter -= 10;
  sixpackCounter += 1;
  num.value = counter;
  timer();
  if (counter < 10) {
    sixpack.disabled = true;
    voka.disabled = true;
  } else {
    sixpack.disabled = false;
    voka.disabled = false;
  }

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
      voka.disabled = true;
    } else {
      sixpack.disabled = false;
      voka.disabled = false;
    }
  }, 1000);
}

voka.onclick = function () {
  counter -= 10;
  vodka += 2;
  num.value = counter;
  tweedeUpgrade();
  if (counter < 10) {
    sixpack.disabled = true;
    voka.disabled = true;
  } else {
    sixpack.disabled = false;
    voka.disabled = false;
  }
};

function tweedeUpgrade() {
  if (vodkaInterval) {
    clearInterval(vodkaInterval);
  }
  vodkaInterval = setInterval(() => {
    counter += vodka;
    num.value = counter;
    console.log(counter);


    if (counter < 10) {
      voka.disabled = true;
      sixpack.disabled = true;
    } else {
      voka.disabled = false;
      sixpack.disabled = false;
    }
  }, 1000);
}
