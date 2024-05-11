// << 230828 커밋 깃 코드 =======
/*const amIFat = true;
console.log(amIFat);

const days0fweek=["mon", "tue", "wed", "thu", "fri", "sat"];

//get Item form array
console.log(days0fweek);

// Add one more day to the array
days0fweek.push("sun");
console.log(days0fweek);
//  230828 커밋 깃 코드- cab1772addab836ffeab5393abfb5c1987117407 >>




const title = document.querySelector(".hello h1");

console.dir(title);


function handleTitleClick(){
	//console.log("title was click");	
	title.style.color = "blue";
}
function handlemouseEnter(){
	//console.log("mouseenter!");
	title.innerText = "Mouse is here!";
}
function handleMouseLeave(){
	//console.log("Mouse leave!");
	title.innerText = "Mouse is gone!";
}
function heandleWindowResize(){
	//console.log();
	document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy(){
	alert("copier!");
}
function handleWindowOffLine(){
	alert("WiFI Off!!");
}
function handleWindowOnLine(){
	alert("WiFI OnLine!");
}


//title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handlemouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
title.oncopy = handleWindowCopy;
//window.addEventListener("copy", handleWindowCopy); = title.oncopy = handleWindowCopy; // 둘이 같음

window.addEventListener("resize", heandleWindowResize);
window.addEventListener("offline", handleWindowOffLine); //와이파이(인터넷) 끊김 감지
window.addEventListener("online", handleWindowOnLine); //와이파이(인터넷) 켜짐 감지
*/

/* 240505 학습내용
const title = document.querySelector(".hello h1");
function handleToggleClick(){
	const TitltColor = title.style.color;
	let NewColor = title.style.color;
	if(TitltColor === "blue"){
		NewColor = " orange";
	} else {
		NewColor = "blue";
	}
	title.style.color = NewColor;
}
title.addEventListener("click", handleToggleClick);
*/

/*
newColor를 let이라는 변수로 선언해준 이유 - 계속 변화되기 때문

currentColor에는 현재 h1.style.color에 색깔의 데이터를 받아오고
아래 if문에서 currentColor의 현재 데이터가 blue와 일치한지 보고 있음
blue와 일치하여 true면 let으로 선언한 newColor에 "tomato"라는 데이터를 받아오고
false일 경우엔 newColor에 "blue"라고 데이터를 넣어줌.

마지막에 if문이 끝나고 난 뒤에 title.style.color = NewColor; 코드 넣는이유
- if문(조건문) NewColor에 값은 받아져 있지만, 그게 title.style.color에 값을 넣으라는 코드는 없음,
그래서 마지막줄에 title.style.color에 NewColor 값을 넣어주라는 코드 넣어줌
*/

/* 240508 ~ 09 학습
const title = document.querySelector(".hello h1");
const clickedClass = "active"; // css에서 클래스가 변경 될때 if, else에다 2번 넣어줄 필요 없이 여기에다가 한번만 넣어주면 되기 때문에 변수로 만들어줌

function handleToggleClick(){
	if(title.classList.contains(clickedClass)){
		title.classList.remove(clickedClass);
	}else{
		title.classList.add(clickedClass);
	}
	title.classList.toggle(clickedClass); // 위에 if문이랑 동일한 기능 수행
}
title.addEventListener("click", handleToggleClick);*/


//const loginButton = document.querySelector("#login-form button");

/* function clickHandle(){
	const username = loginInput.value;
	if(username === ""){
		alert("Plase write your name");
	} else if(username.length > 15) {
		alert("your name is too rong");
	}
}*/

//loginButton.addEventListener("click", clickHandle);

/* 
// (e)이해할 수 있게 실습한 코드, 
const link = document.querySelector("a");

addEventListener를 통해 일어난 event를 handle function의 ()안에 담으면(ex, (e)) 이벤트를 실행하면서 발생한 정보들을 (e)를 통해 컨트롤 하거나 (e)에 담긴 정보들로 여러 작업을 진행할 수 있음. (preventDefault(), screenX/Y(마우스의 현재 가로/세로위치) 등 )
function linkStop(e){
	e.preventDefault();
	console.dir(link);
}

link.addEventListener("click", linkStop);
*/


//240510 - 자발적 코드 작성 (유저가 내용 입력했을경우 form 사라지게)
/*const formbtn = document.querySelector("#login-form button");
const loginSubMit = document.querySelector("#login-form input[type='submit']");

function formOkHandle(){
	if(loginInput === ""){
		alert("plase too white user name");
	} else {
		loginForm.classList.add("dp_n");
	}
}

loginSubMit.addEventListener("click", formOkHandle);*/



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
const HIDDEN_CLASS = "dp_n"

// 로그인 버튼 클릭 시 실행 start
function onLoginSubmit(e){
	e.preventDefault(); // 브라우저가 기본 동작을 실행하지 못하게 막기
	const username = loginInput.value;
	localStorage.setItem(USERNAME_KEY, username);
	loginForm.classList.add(HIDDEN_CLASS);
	paintGreetings(suername);
}
loginForm.addEventListener("submit", onLoginSubmit);
// 로그인 버튼 클릭 시 실행 end

// 사용자 명 받아서 h1태그에 넣어주는 기능만 따로 funtion에 담아둠 아래에서 쓰임
function paintGreetings(abc){
	//greeting.innerText = "Hello " + username;
	greeting.innerText = `Hello ${abc}`; //위 코드랑 동일함 백틱 사용해서 작업할 수 있음 이게 좀 더 새로운 방법임 규칙1, 변수명 ${} 안에 써주기 규칙2 ``로 감싸주기
	greeting.classList.remove(HIDDEN_CLASS);
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