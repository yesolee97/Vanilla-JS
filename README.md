# 바닐라 js 기본기
1. 변수 (variable [벨리어블])

-변수명 작성방법 (카멜케이스) : 2번째 단어의 첫글자를 대문자로 쓰는방법

* var(바) - 구버전 상수, 덮어쓰기 계속 가능 (요즘은 쓰지 않음)
* const(컨스트) = ★ 바뀌지 않는 값 (기본)
* let(렛) = ★ 업데이트 할 수 있음 
> ex)<br>
let aa = 어쩌고; 하고 아래 어딘가에서<br>
aa = 저쩌고; 로 한번 더 써주면 저쩌고로 바뀐 값 출력

***   

#Arrays 만드는법
1. 시작과 끝에 대괄호 사용[]
2. 대괄호 안의 항목은 각각 ,로 구분되어야 함

#Arrays 안의 데이터 가져오는것
1. Arrays를 담은 변수명을 선언한다
2. 변수명 뒤에 대괄호 열고 가지고 오고싶은 데이터 순서 숫자로 입력 
3. ex) days0fweek[0];

#.push(); = 이미 만들어진 변수에 값을 추가해주는것. 
1. 앞에 const 붙일 필요없음 (이미 만들어진 값이라서)