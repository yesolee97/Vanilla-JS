const API_KEY = "11";

function onGeoOk(position){
    // console.log(position); coords 안에 위도/경도 위치정보 확인할 수 있음
    const lat = position.coords.latitude;// 위치 정보 객체에서 위도를 추출
    const lon = position.coords.longitude;// 위치 정보 객체에서 경도를 추출
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(URL)
        .then(response => response.json()
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        }))
    
}
function onGeoError(){
    alert("위치 정보를 찾을 수 없습니다"); // 위치 정보를 가져오지 못했을 때 경고 메시지 표시
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); // 사용자의 위치 정보를 가져오고, 성공 시 onGeoOk, 실패 시 onGeoError 호출