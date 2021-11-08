const nextBtn = document.querySelector(".next");
const screen1 = document.querySelector(".screen-1");
const screen2 = document.querySelector(".screen-2");

screen1.classList.add("moveInScreen");

nextBtn.addEventListener('click', (event) => {
    event.preventDefault();
    screen1.classList.add("moveOffScreen");
    setTimeout(() => {
        screen2.classList.add("moveInScreen");
    }, 250);
});

// TODO: Collect sign in info with javascript