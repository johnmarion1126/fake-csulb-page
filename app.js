const nextBtn = document.querySelector(".next");
const signInBtn = document.querySelector(".submit");
const screen1 = document.querySelector(".screen-1");
const screen2 = document.querySelector(".screen-2");
const userName = document.querySelector("#username");
const passWord = document.querySelector("#password");
const userNameHeader = document.querySelector(".return-username");
const signInOptions = document.querySelector(".sign-in__options");
const userNameForm = document.querySelector(".username-form");
const passWordForm = document.querySelector(".password-form");

let username;
let password;

screen1.classList.add("moveInScreen");

nextBtn.addEventListener('click', (event) => {
    event.preventDefault();
    transitionToPassword();
});

userNameForm.addEventListener('submit', (event) => {
    event.preventDefault();
    transitionToPassword();
});

signInBtn.addEventListener('click', (event) => {
    event.preventDefault();
    password = passWord.value;
    returnValues();
});

passWordForm.addEventListener('submit', (event) => {
    event.preventDefault();
    returnValues();
})

const returnValues = () => {
    console.log(`Username: ${username} \n Password: ${password}`);
}

const transitionToPassword = () => {
    screen1.classList.add("moveOffScreen");
    setTimeout(() => {
        screen2.classList.add("moveInScreen");
        signInOptions.classList.add("remove");
    }, 250);
    username = userName.value;

    const text = document.createTextNode(username);
    userNameHeader.appendChild(text);
}