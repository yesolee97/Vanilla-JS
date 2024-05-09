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


const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function clickHandle(){
	const username = loginInput.value;
	/*if(username === ""){
		alert("Plase write your name");
	} else if(username.length > 15) {
		alert("your name is too rong");
	}*/
	console.log(username);
}

loginButton.addEventListener("click", clickHandle);