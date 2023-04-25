let counter = 0;
let hiddenCounter = 0;

const KlikbareJupilerKnop = document.querySelector(".jupiler-button");
const tripel = document.querySelector('.tripel-button');
tripel.disabled = true;

KlikbareJupilerKnop.onclick = function () {
    counter++;
    hiddenCounter++;
    console.log(counter);

    if (hiddenCounter === 10) {
        KlikbareJupilerKnop.disabled = true;
        tripel.disabled = false;
    }
    };
    tripel.onclick = function () {
        counter += 2;
        KlikbareJupilerKnop.disabled = false;
        tripel.disabled = true;
        console.log(counter);
        hiddenCounter =0;
    };




