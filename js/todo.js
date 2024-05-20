const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const toDos = []

//toDos array를 로컬스토리지에 집어넣기 
function saveToDo(){
    localStorage.setItem("todos", toDos);
}

function deleteToDo(event){
    console.log("test");
    const li = event.target.parentElement; // 클릭된 이벤트 타겟(버튼) > parentElement 버튼의 부모(li)를 가르킴
    li.remove(); // 가르키고있는 li를 삭제하겠다

}

function paintToDo(newTodo){
    const li = document.createElement("li"); // li html 코드 추가
    const span = document.createElement("span"); // span html 코드 추가
    span.innerText = newTodo; // 만들어둔 span코드 안에 받아온 newTodo 값 입력
    const button = document.createElement("button"); // button html 코드 추가
    button.innerText = "X"; // 만들어둔 button 코드 안에 텍스트 X로 입력
    button.addEventListener("click", deleteToDo);  // button 클릭 시 이벤트 설정
    li.appendChild(span); // 만들어둔 li 코드 안에 만들어둔 span 코드 추가
    li.appendChild(button);  // 만들어둔 li 코드 안에 만들어둔 button 코드 추가
    toDoList.appendChild(li);  // 만들어둔 ul 코드 안에 최종 li 코드 추가
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = ""; // 이코드를 실행한다고 해서 위에서 실행한 newTodo의 값이 비워지지는 않음 > 위 시점에서 toDoInput.value값을 newTodo에 저장해놓았기 때문에.
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);