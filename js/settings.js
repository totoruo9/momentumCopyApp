const nameChange = document.querySelector("#name-change");
const nameRemove = document.querySelector("#name-remove");
const goalChange = document.querySelector("#goal-change");
const goalRemove = document.querySelector("#goal-remove");
const allDataRemove = document.querySelector("#all-data-remove");

const settings = document.querySelector("#settings-layer");
const openSettingsBtn = document.querySelector(".open-settings");
const closeSettingsBtn = document.querySelector(".close-settings");

function onChangeName(e){
    const changeText = e.target.querySelector("input").value;
    localStorage.setItem(USERNAME_KEY, changeText);
}

function onRemoveName(e){
    localStorage.removeItem(USERNAME_KEY);
    localStorage.removeItem(SET_GOAL);
}

function onChangeGoal(e){
    const changeText = e.target.querySelector("input").value;
    localStorage.setItem(SET_GOAL, changeText);
}

function onRemoveGoal(e){
    localStorage.removeItem(SET_GOAL);
}

function onAllDataRemove(e){
    localStorage.clear();
}


function closeSettings(){
    settings.classList.add(HIDDEN_CLASSNAME);
}

function openSettings(){
    settings.classList.remove(HIDDEN_CLASSNAME);
}

nameChange.addEventListener("submit", onChangeName);
nameRemove.addEventListener("submit", onRemoveName);
goalChange.addEventListener("submit", onChangeGoal);
goalRemove.addEventListener("submit", onRemoveGoal);
allDataRemove.addEventListener("submit", onAllDataRemove);

openSettingsBtn.addEventListener("click", openSettings);
closeSettingsBtn.addEventListener("click", closeSettings);