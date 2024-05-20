const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

function paintToDo(newTodo){
    console.log("i will paint", newTodo);
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo;
    toDoList.appendChild(li);    
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = ""; // 이코드를 실행한다고 해서 위에서 실행한 newTodo의 값이 비워지지는 않음 > 위 시점에서 toDoInput.value값을 newTodo에 저장해놓았기 때문에.
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);