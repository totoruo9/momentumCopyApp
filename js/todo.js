const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
const toDoBtn = document.querySelector(".todo-btn");
const todo = document.querySelector(".todo");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(e){
    const li = e.target.parentElement;
    li.remove();
    toDos = toDos.filter(item => item.id !== parseInt(li.id, 10));
    saveToDos();
}

function paintToDo({text, id}){
    const li = document.createElement('li');
    li.id = id;
    const span = document.createElement('span');
    span.innerText = text;
    const button = document.createElement('button');
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(e){
    e.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = '';
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

function onTodoList(e){
    e.preventDefault();
    todo.classList.toggle("hidden");
}

toDoForm.addEventListener("submit", handleToDoSubmit);
toDoBtn.addEventListener("click", onTodoList);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}