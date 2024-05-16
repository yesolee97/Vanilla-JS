const clock = document.querySelector("#clock");

/*function sayHello(){
    console.log("hello");
}*/

//setInterval(sayHello, 5000); //5초마다 반복실행, 사이트 접속 5초후 실행
//setTimeout(sayHello, 5000); // 5초 기다렸다가 한번만 실행, 사이트 접속 5초후 실행
//PadStart (20, "x") // 앞쪽에 20글자가 아닐경우 x로 채워넣는다

function getclock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padEnd(3, "무래");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
    date.getSeconds()
}
getclock();// 바로 시간 호출하기 위한 함수
setInterval(getclock, 1000);// 1초마다 호출

