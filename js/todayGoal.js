const goalForm = document.querySelector("#goal-form");
const todayGoalWrap = document.querySelector("#todayGoal");
const todayGoal = document.querySelector("#todayGoal p");
const goalInput = document.querySelector("#goal-input");

const SET_GOAL = "goal";

function onTodayGoal(e){
    e.preventDefault();
    const goalValue = goalInput.value;
    todayGoal.innerText = goalValue;
    todayGoalWrap.classList.remove(HIDDEN_CLASSNAME);
    goalForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(SET_GOAL, goalValue);
}

goalForm.addEventListener("submit", onTodayGoal);

if(localStorage.goal && localStorage.username){
    todayGoalWrap.classList.remove(HIDDEN_CLASSNAME);
    todayGoal.innerText = localStorage.getItem(SET_GOAL)
}else if(localStorage.username && !localStorage.goal ) {
    goalForm.classList.remove(HIDDEN_CLASSNAME);
}