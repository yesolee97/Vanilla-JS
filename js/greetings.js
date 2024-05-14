/* 240511 - localStarage 학습
: 브라우저에 무언가를 저장한 후 나중에 가져 올 수 있음. (새로고침해도 값 남음)
localStorage.setItem("username", 예솔); > "username": key / "예솔" value

- 로컬 저장소에 해당 키와 값을 저장함.
localStorage.setItem("username", "예솔");
- 로컬 저장소에 해당 키에 해당되는 값을 불러옴.
localStorage.getItem("username");
- 로컬 저장소에 해당 키에 해당되는 키, 값을 삭제함.
localStorage.removeItem("username");
*/

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logoutButton = document.querySelector("#logout");
const HIDDEN_CLASS = "dp_n"

// 로그인 버튼 클릭 시 실행 start
function onLoginSubmit(e){
	e.preventDefault(); // 브라우저가 기본 동작을 실행하지 못하게 막기
	const username = loginInput.value;
	localStorage.setItem(USERNAME_KEY, username);
	loginForm.classList.add(HIDDEN_CLASS);
	paintGreetings(username);
}
loginForm.addEventListener("submit", onLoginSubmit);

// 사용자 명 받아서 h1태그에 넣어주는 기능만 따로 funtion에 담아둠
function paintGreetings(abc){
	//greeting.innerText = "Hello " + username;
	greeting.innerText = `Hello ${abc}`; //위 코드랑 동일함 백틱 사용해서 작업할 수 있음 이게 좀 더 새로운 방법임 규칙1, 변수명 ${} 안에 써주기 규칙2 ``로 감싸주기
	greeting.classList.remove(HIDDEN_CLASS);
	logoutButton.classList.remove(HIDDEN_CLASS); // 로그아웃 버튼 표시
}

//
const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
	loginForm.classList.remove(HIDDEN_CLASS);
	loginForm.addEventListener("submit", onLoginSubmit);
	//greeting.classList.add(HIDDEN_CLASS);
} else {
	paintGreetings(savedUsername);
	// loginForm.classList.add(HIDDEN_CLASS);
	// console.log(greeting);
}
/* 
이해 안된내용 정리
1. paintGreetings(savedUsername); 은 만들어 놓은 function인
function paintGreetings(abc){}에 (abc)값에 (savedUsername)를 대입시켜 실행하라는 뜻임.

2. function paintGreetings(abc){} 의 경우, 괄호()안에 들어가는 문자는 username이든, abc이든 상관 없음
> 대입되는 공간?을 표시해주는 문자이기 때문

3. 지피티한테 물어본 거 
onLoginSubmit 함수 내에서 paintGreetings(username)과 if-else 문 내에서 paintGreetings(savedUsername)을 호출할 때 
괄호 안에 글자가 다른 이유는 [각각의 함수 호출 시에 전달되는 인자가 다르기 때문]입니다.

onLoginSubmit 함수 내에서의 paintGreetings(username)
: 사용자가 로그인 폼을 제출할 때 호출되는 함수인데, 이때 사용자가 입력한 사용자 이름을 username이라는 매개변수로 받아옵니다. 그리고 이 값을 인자로하여 paintGreetings 함수를 호출합니다.

if-else 문 내에서의 paintGreetings(savedUsername)
: 초기화 과정에서 사용자가 이미 로그인 되어 있는 경우에 호출되는 함수인데, 
이때는 로컬 스토리지에서 가져온 사용자 이름을 savedUsername이라는 매개변수로 받아옵니다. 그리고 이 값을 인자로하여 paintGreetings 함수를 호출합니다.

즉, 함수를 호출할 때 인자에 따라 호출되는 함수의 동작이 달라질 수 있도록 하기 위해서 각각 다른 이름의 매개변수를 사용하는 것입니다.
 */
//로그아웃 버튼 만들어봄 
function onLogoutClick() {
	localStorage.removeItem(USERNAME_KEY); // 로컬 저장소에서 사용자 이름 제거
	loginForm.classList.remove(HIDDEN_CLASS); // 로그인 폼 표시
	greeting.classList.add(HIDDEN_CLASS); // 인사말 숨기기
	logoutButton.classList.add(HIDDEN_CLASS); // 로그아웃 버튼 숨기기
	loginInput.value = ""; // 입력 필드 초기화
}
logoutButton.addEventListener("click", onLogoutClick);