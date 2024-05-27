function onGeoOk(position){
    // console.log(position); coords 안에 위도/경도 위치정보 확인할 수 있음
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("Ypu Live it", lat, lng);
}
function onGeoError(){
    alert("위치 정보를 찾을 수 없습니다");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); // Wifi, gps, 위치 등등 정보 줌