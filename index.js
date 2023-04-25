let counter = 0;

const KlikbareJupilerKnop = document.querySelector(".jupiler-button");


KlikbareJupilerKnop.addEventListener('click', () => {
    counter++;
    console.log(counter);
});

