let counter = 0;

const klikbareJupilerKnop = document.querySelector(".jupiler-button");
const restartButton = document.querySelector(".restart-button")


klikbareJupilerKnop.addEventListener('click', () => {
    counter++;
    console.log(counter);
});


restartButton.addEventListener('click', () => {
    counter = 0;
    console.log(counter);
});

