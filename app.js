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

window.addEventListener("resize", heandleWindowResize);