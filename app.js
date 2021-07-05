const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

const innerText = document.querySelector("h1");

/*function onLoginBtnClick(){
    console.log(loginInput.value.length);
}

function onChangeLoginInput(e){
    if(!loginInput.value.length){
        loginButton.disabled = true;
        innerText.innerText = "Inner Text";
    }else if(loginInput.value.length > 15){
        loginButton.disabled = true;
        innerText.innerText = "Is to long name";
    }else {
        loginButton.disabled = false;
        innerText.innerText = e.target.value;
    }
}

loginButton.addEventListener("click", onLoginBtnClick);
loginInput.addEventListener("input", onChangeLoginInput);*/