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