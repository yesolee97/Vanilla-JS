const clock = document.querySelector("#clock");
//clock.innerText = "lalal"


function sayHello(){
    console.log("hello");
}

//setInterval(sayHello, 5000); //5초마다 반복실행, 사이트 접속 5초후 실행
//setTimeout(sayHello, 5000); // 5초 기다렸다가 한번만 실행, 사이트 접속 5초후 실행

function getclock(){
    const date = new Date();
    clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}
getclock();// 바로 시간 호출하기 위한 함수
setInterval(getclock, 1000);// 1초마다 호출