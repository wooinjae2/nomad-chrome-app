// alert('asdsadsadsada');


a = 221
b = a-5
console.log(b);

const title = document.querySelector('#title');
const CLICKED = 'clicked'

console.dir(title);
title.addEventListener('click', () => {
    title.classList.toggle(CLICKED)
    
})

/*
우리는 매우 게으르다. 프로그래밍은 게으른 사람을 위한 것 .

log 대신 왜 console.log를 쓰는지 ? 

자바스크립트의 단점
내가 나쁘것을 쓰는것을 허용한다.
실행하기 위해 최선을 다할것이다.

a = 221 b = a-5
이렇게 쓰면 에러가 난다.
모든 명령어가 한줄에 있어야 하듯 expression도 한줄에 있어야 한다.

카카오톡을 들은 사람은 css를 알것이다.
css 끝에는 ;로 끝나야 하듯 명령어 끝에는;로 끝나야 하는데

변수 사용방법
Create
Initialize
Use
3가지 순서대로 실행하면 된다.


let 
let meaning js

let은 수학적 상태.
let 은 뭘까 ?
더 혼란스럽다 .. 

const 값이 바뀌지 않기를 바래 

let info를 쓴다면 나중에 값이 info를 1000줄 중에서 또 쓸경우 
에러 나는 부분을 찾기 어렵다
그래서 const(상수)를 사용한다. 상수는 값이 바뀌지 않는다.

javascript는 이렇게 반응한다

const a = 221;
a = 4; // 에러 발생
모든 정보나 대부분의 정보가 에러에 있기 때문에 에러를 읽을 수 있어야 한다.
변수가 바뀌어도 괜찮다면 let을 사용한다.

var를 쓰는 것을 본적이 있다.
javascript가 var를 이상하게 적용하고 있다.

var var ... 3년전에는 var만 쓸수 있었다.
그러나 지금은 let const가 있다. 


1.8 어떤 데이터가 들어갈 수 있는가 ?
주석 사용법에 대해 알려줌 한줄 ,멀티라인 주석

"555512312321"는 숫자가 아닌 텍스트다.
string
boolean
number
float 

데이터를 정렬하는 방법 Array와 Object두개가 있다.
 ? 아규먼트와 파라미터 용어 차이 
 console.log(console) 하면 많은 것들을 볼 수 있다.
 console을 내장 함수 라고 한다.
 함수는 함수다 어떤것의 기능적인 부분 
 console.log를 향상시키는 방법
 

 Documnet Object Model 자바스크립트에서 html을 객체로 바꾸어서 변경할 수 있다.
 자바스크립트가 나의 html을 가져다가 객체로 만들어 준다.
 객체는 정말 많은 키들을 가지고 있는데 



 #2.3 Modifying the DOM with JS (06:43)
console.log(title)
console.dir(뭐가 많다)
attribute classNmae id innerHtml innerText localName: h1
그리고 on이벤트 parentElement parentNode
등 많이 있다.
자바스크립트 표현법 대문자 소문자 섞여있고 많이있다.

Nicolas 객체 이것저것 많이 있는데
title.style.color = "red"

자바스크립트로 html을 바꿀수 있다.
HTML을 수정할수 있다는걸 알기 위해 이 코스에 왔다.
onClick을 바꿀 수 있고
오픈마인드이길 바래 나 이거 할수있다 !!!!!!!


*/