const toDoForm = document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".todo-list");

const TODOS_KEY = "toDos"
const toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    //event에서 정보를 얻고 event.target은 클릭된 html element임 
    //여기서 parentElement를 보면 어떤 것이 타겟인지 알 수 있지.
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "X";
    span.innerText = newTodo;
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); //append는 맨 마지막에 놓여져야함.
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = ""; //toDoInput창 비우기.
    toDos.push(newTodo); //localstprage에 배열을 저장하고 싶지만 문자만 저장 가능.
    paintToDo(newTodo);  //jsonstringify Js object나 array 또는 어떤 js 코드간에 그걸 string으로 만들어준다.
    saveToDos();         //string을 json.parse안에 넣으면 배열을 얻을 수 있다.
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(element => { //각각의 element들한테 함수 적용
        console.log("this is the turn of ", element);
    });
}

