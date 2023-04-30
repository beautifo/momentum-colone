//2-1 2-4
//데이터 타입
// 2 = int
// 1.5 = float
// "Hello" = string - string의 의미 = 처음부터 끝까지 모두 글자로 이루어져 있다.
// true , false = boolean
// boolean 은 언제 쓰는가?
// 참과 거짓이 필요할 때 Ex)    사용자가 로그인 하였는가?
//                              비디오가 재생되고 있는가?
// nothing there = null - 자바스크립트에게 여기엔 "값"이 없다 확실히 알려주는 것
//                        비어있어요. 를 의도적으로 표현
//                        빈 상자를 포장 했어요.
// deinfed;
// undefined; - 컴퓨터 메모리 안에 공간은 존재하나 값은 없음.
//              빈상자를 만들었어요.





//2-2~3
// let const -vartiable 설정
// const = can't change variable
// let =  can change variable
// 기본적인 방법 = 일단 const로 쓰고 variable을 바꿀 상황이 왔을 때 let로 바꾼다. var은 쓰지 않는게 좋다.
// ps  var - 오래된 방식
// var 원한다면 언제 어디서든 업데이트 가능하다
// var = 협업을 할 때 큰 도움이 되지 않는다.

// 요약
// let : 재선언 금지 / 재할당 가능
// let a = b;
// let a = c;(불가능)
//  a = c; (가능)  
// const : 재선언 금지 / 재할당 가능
// const a = b;
// const a = c;(불가능)
// a = c (불가능)
// var  : 재선언 가능 / 재할당 가능
// var a = b; 
// var a = c; (가능)
// a = c;(가능)

//2-5
//array : 컴퓨터 과학에서 제일 중요한 부분
//const dayOfWeek = [mon, tue, wed, thu, fri, sat, sun];
//console.log(dayOfWeek);
//Get Item from Array
//console.log(dayOfWeek[4]); -python과 똑같이 array에는 0부터 시작한다.
//Add one more day to the array
//dayOfWeek.push(sun);
//consonle.log(dayOfWeek);

//2-6 object == pyhton dic
//const player = ["nico", 1212, false, "little bit"];
//const player = {
//    name: "nico",
//    points: 10,
//    fat: true,
//}
//console.log(player);
//console.log(player.name);
//player.lastName = "super"; -오브젝트에 내용 추가 방법
//player.points = 15; - 오브젝트에 내용 수정 방법
//console.log(player);
//리스트는 모든 값이 의미를 갖는다.

//2-7 Functions = 계속 반복해서 사용할 수 있는 코드 조각 / 코드릅 캡슐화 해서 반복할 수 있게 해준다.
// function sayHello(nameOfPerson){
//      console.log("Hello my name is ");    
//}

//2-10
//const calculator = {
//    add: function (a,b){
//        console.log(a+b);
//    },
//     minus:function(a,b){
//         console.log(a-b);     
//    }
//}

//2-11 return 을 써보자! function 은 나를 위해 무언가를 해주는 것 - function을 통해 값을 얻어야함.
//const age = 96;
// function calculaterKrage(ageOfForeigner){
//    return ageOfForeigner +2;    -return을 사용하면 function(argument)를 이것의 값으로 대체한다.
//}
// const krAge=calculaterKrage(age);
// console.log(krAge);

//2-13 14 15 conditional
//const age = prompt("How old are you?");
//console.log(typeof age); - 입력하면 string로 받는다.
//타입 변경 방법
//parseInt(age);
// console.log(age, parseInt(age));
//const age = parseInt(prompt("How old are you?"));
//isNaN() 입력 값이 숫자인지 아닌 지 구별하기 숫자면 false 값이 반환된다.

//if(condition){
//    실행코드=true ---실행
//    실행코드=false ----다음 else 값 실행
//    } else{}
//if(isNaN(age)){
//    console.log(“please wirte a number”);
//    } else{
//    console.log(“Thank you for writing your age”);
//    }
//true || true === true
//false || true === true
//true || false === true
//false || false === false


//true && true === true
//false && true === false
//true && false === false
//false && false === false

//3-3
/*- 지금 js파일이 있기 때문에 js를 통해 html의 내용을 가져올 수 있는 거임
- document가 html이 js파일을 load하기 때문에 존재 → 그 다음에 browser가 우리가 document에 접근할 수 있게 해줌
- element의 내부를 보고 싶으면 console.dir()
기본적으로 object로 표시한 element를 보여줌(전부 js object임)
그 element 중 앞에 on이 붙은 것들은 event임
- event: 어떤 행위를 하는 것
모든 event는 js가 listen할 수 있음
- eventListener : event를 listen함 → js에게 무슨 event를 listen하고 싶은 지 알려줘야 함
- title.addEventListener("click") : 누군가가 title을 click하는 것을 listen할 거임 → 무언가를 해줘야함

const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
title.style.color = "blue";
}
title.addEventListener("click",handleTitleClick);
//click하면 handleTitleClick이라는 function이 동작하길 원함
//그래서 handle~ 함수에 () 를 안넣은 것임
//즉, js가 대신 실행시켜주길 바라는 것임!

- function이 js에게 넘겨주고 유저가 title을 click할 경우에 js가 실행버튼을 대신 눌러주길 바라는 것임( 직접 handleTitleClick(); 이렇게 하는 것이 아니라)
- 함수에서 () 이 두 괄호를 추가함으로써 실행버튼을 누를 수 있는 거임
*/