
// << 230828 커밋 깃 코드 =======
const amIFat = true;
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

title.innerText = "Hello";

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

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handlemouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);


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

window.addEventListener("resize", heandleWindowResize);
//window.addEventListener("copy", handleWindowCopy); = title.oncopy = handleWindowCopy; // 둘이 같음
title.oncopy = handleWindowCopy;

window.addEventListener("offline", handleWindowOffLine);
window.addEventListener("online", handleWindowOnLine);
