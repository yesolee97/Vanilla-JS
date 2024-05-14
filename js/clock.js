const clock = document.querySelector("#clock");

function sayHello(){
    console.log("hello");
}

//setInterval(sayHello, 5000); //5초마다 반복실행, 사이트 접속 5초후 실행
//setTimeout(sayHello, 5000); // 5초 기다렸다가 한번만 실행, 사이트 접속 5초후 실행
//PadStart (20, "x") // 앞쪽에 20글자가 아닐경우 x로 채워넣는다

function getclock(){
    const date = new Date();
    const hours = String(date.getHours()).PadStart(2, "0");
    const minutes = String(date.getgetMinutesHours()).PadStart(2, "0");
    const second = String(date.getSeconds()).PadStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${second}`;
    date.getSeconds()
}
getclock();// 바로 시간 호출하기 위한 함수
setInterval(getclock, 1000);// 1초마다 호출

