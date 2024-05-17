const quotes = [
    {
        quote: "언제나 현재에 집중할수 있다면 행복할것이다.",
        author:"파울로 코엘료",
    },
    {
        quote: "행복의 문이 하나 닫히면 다른 문이 열린다.",
        author:"헬렌켈러",
    },
    {
        quote: "한번의 실패와 영원한 실패를 혼동하지 마라.",
        author:"F.스콧 핏제랄드",
    },
    {
        quote: "길을 잃는 다는 것은 곧 길을 알게 된다는 것이다.",
        author:"동아프리카속담",
    },
    {
        quote: "당신이 할수 있다고 믿든 할수 없다고 믿든 믿는 대로 될것이다.",
        author:"헨리 포드",
    },
    {
        quote: "중요한 것은 내가 어디에 있는가가 아니라 어느 쪽을 향해 가고 있는가이다.",
        author:"올리버 웬들 홈스",
    },
    {
        quote: "진정 원하는 것에 온전히 집중할 때 우리는 비로소 성장할 수 있다.",
        author:"빌 버넷",
    },
    {
        quote: "한 번 실패한 것이, 앞으로의 모든 일에 실패할 거라는 것을 의미하지는 않는다.",
        author:"마릴린 먼로",
    },
    {
        quote: "실패는 넘어지는 것이 아니라 일어나는 것을 포기하는 것이다.",
        author:"중국속담",
    },
    {
        quote: "사랑할 수 있는 능력이 있다면 먼저 자신을 사랑하라.",
        author:"찰스 부코스키",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuotes = quotes[Math.floor(Math.random() * quotes.length)];
// Math.random(): Math의 function 중 하나, 1~9숫자를 랜덤하게 불러올 수 있음
// x 10 해주는 이유 : 배열 갯수만큼 하드코딩해주는 것
// floor: 무조건 내림해주는 숫자, 여기선 1의자리 숫자 뒤의 숫자를 날리려고 사용
//quotes.length: quotes의 길이를 재줌 (quotes이 가지고 있는 배열 갯수만큼 랜덤으로 돌아가게 하려고)

quote.innerHTML = todayQuotes.quote;
author.innerHTML = todayQuotes.author;