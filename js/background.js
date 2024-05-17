const images = ["0.jpeg","1.jpeg","2.jpeg"];

const chosenImage = images[Math.floor(Math.random() *images.length)];

const bgImage = document.createElement("img"); // img 엘리먼트 태그 생성 "" 안에 다른 html 태그도 생성가능
bgImage.src = `img/${chosenImage}`; // src 설정
document.body.appendChild(bgImage); // html에 코드 추가
console.log(bgImage); //콘솔 확인용  