const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const getHour = parseInt(/([0-9]*):(?:[0-9]*)/.exec(document.querySelector("#clock").innerText)[1], 10);

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(e){
    e.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
};

function paintGreeting(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    if(getHour >= 6 && getHour <= 11){
        greeting.innerText = `좋은 아침이네요, ${username}님`;
    } else if(getHour >= 12 && getHour <= 17){
        greeting.innerText = `점심은 맛있게 드셨나요? ${username}님`;
    } else if(getHour >= 18 && getHour <= 21){
        greeting.innerText = `${username}님, 오늘 저녁은 요리를 해보는 건 어떨까요?`;
    } else if(getHour >= 12 && getHour <= 17){
        greeting.innerText = `${username}님, 이제 하루를 마무리 할 시간이네요.`;
    } else {
        greeting.innerText = `오늘 하루도 고생하셨습니다. ${username}님`;
    };
    if(!localStorage.goal){
        const goalForm = document.querySelector("#goal-form");
        goalForm.classList.remove(HIDDEN_CLASSNAME);
    };
    
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else {
    paintGreeting(saveUsername);
};