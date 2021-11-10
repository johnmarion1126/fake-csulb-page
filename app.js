const nextBtn = document.querySelector(".next");
const signInBtn = document.querySelector(".submit");
const screen1 = document.querySelector(".screen-1");
const screen2 = document.querySelector(".screen-2");
const userNameForm = document.querySelector("#username");
const passWordForm = document.querySelector("#password");
const userNameHeader = document.querySelector(".return-username");
const signInOptions = document.querySelector(".sign-in__options");

let username;
let password;

screen1.classList.add("moveInScreen");

nextBtn.addEventListener('click', (event) => {
    event.preventDefault();
    screen1.classList.add("moveOffScreen");
    setTimeout(() => {
        screen2.classList.add("moveInScreen");
        signInOptions.classList.add("remove");
    }, 250);
    username = userNameForm.value;

    const text = document.createTextNode(username);
    userNameHeader.appendChild(text);
});

signInBtn.addEventListener('click', (event) => {
    event.preventDefault();
    password = passWordForm.value;
    returnValues();
});

const returnValues = () => {
    console.log(`Username: ${username} \n Password: ${password}`);
}