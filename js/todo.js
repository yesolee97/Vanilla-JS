const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

//Array 만들기 (배열)
let toDos = []; // let으로 쓰는 이유 (const로 쓰면 밑에줄에서 toDos 가져가서 배열에 값 추가해줄 수 없고, 새로 배열에 값 추가하면 추가된 값만 기억하게됌)

//toDos array를 로컬스토리지에 집어넣기 
function saveToDo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //배열을 스트링 값으로 변환해 스토리지에 저장 > 로컬스토리지에 저장할 때 스트링값만 저장할 수 있음, 
}

function deleteToDo(event){
    console.log("test");
    const li = event.target.parentElement; // 클릭된 이벤트 타겟(버튼) > parentElement 버튼의 부모(li)를 가르킴
    li.remove(); // 가르키고있는 li를 삭제하겠다
}

function paintToDo(newTodo){
    const li = document.createElement("li"); // li html 코드 추가
    li.id = newTodo.id; // paintToDo 함수가 매개변수를 newTodo로 가지고 있어서 li.id = newTodo.li로 해주는 것, 아래에서 보내준 값은 newToDoObject임.
    const span = document.createElement("span"); // span html 코드 추가
    span.innerText = newTodo.text; // 만들어둔 span코드 안에 받아온 newTodo 값 입력
    const button = document.createElement("button"); // button html 코드 추가
    button.innerText = "X"; // 만들어둔 button 코드 안에 텍스트 X로 입력
    button.addEventListener("click", deleteToDo);  // button 클릭 시 이벤트 설정
    li.appendChild(span); // 만들어둔 li 코드 안에 만들어둔 span 코드 추가
    li.appendChild(button);  // 만들어둔 li 코드 안에 만들어둔 button 코드 추가
    toDoList.appendChild(li);  // 만들어둔 ul 코드 안에 최종 li 코드 추가
}

function handleToDoSubmit(e){
    e.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = ""; // 이코드를 실행한다고 해서 위에서 실행한 newTodo의 값이 비워지지는 않음 > 위 시점에서 toDoInput.value값을 newTodo에 저장해놓았기 때문에.
    const newToDoObject ={
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newToDoObject); //배열에 newTodo 값 집어넣기
    paintToDo(newToDoObject); //paintToDo에 newTodo 값 넘겨주기 (넘겨준 paintToDo값으로 paintToDo안에 코드에서 돌아가서 결과값 출력)
    saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const getToDos = localStorage.getItem(TODOS_KEY); // 스토리지에 저장되어 있는 스트링 값 불러옴

if(getToDos !== null){
    const parsedToDos = JSON.parse(getToDos); // 위에서 불러온 getToDos값을 배열로 불러올 수 있게 JSON으로 처리
    toDos = parsedToDos; // 위에 let으로 선언한 toDos 가져와서 parsedToDos값 넣어주기(반복) , 만약 const로 선언했다면? > parsedToDos 값 들어갈때마다 새로 들어가는 값으로 리셋됌
    //parsedToDos.forEach(sayHello); //배열갯수만큼 sayHello 펑션 돌림(일종의 반복문) + function sayHello(item){ 와 세트
    //parsedToDos.forEach((item) => console.log("this is the turn of", item)); // 윗줄을 좀 더 간결하게 써준것
    parsedToDos.forEach(paintToDo); // 로컬스토리지에 저장되어있는배열 paintToDo function 돌려서 출력
}
/* function sayHello(item){
    console.log("this is the turn of", item); //this is the turn of + 배열값 출력
}*/