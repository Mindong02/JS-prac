//프로그램을 토큰으로 분해 -> 어휘 분석
//토큰을 자바스크립트 구문 규약에 맞게 분석하는 것 -> 파싱!

/*function fact (n){  // function / fact / (/ n / )/  이것들이 토큰(의미를 가지는 최소한의 단위)
                    // 국어랑 비슷 
    if(n<=1){
        console.log(n);
    }
    else{
        console.log(0);
    }
}
fact(3);
*/
/*
//호이스팅 -> 변수 선언이 아래 있고, 출력을 위에서 해도 undefined가 출력됨. 
// 변수 선언을 끌어올리는 것을 호이스팅이라 함
console.log(sum);
var sum=2;

console.log(x);
var x=3;
console.log(x);
//변수 선언만 끌어올림, 선언부는 제외
console.log(x);
var x=2;
console.log(x);
*/
/*
//hoisting 예제
function supers(){
    console.log(1, best);
    var best = "best";
    console.log(2,best);
    function best(){
        console. log("be the best");
    }
    console.log(3,best);
}
supers();
//console.log(1, best)는 아래에서 함수를 호이스팅함
//호이스팅은 선언부와 대입부가 동시에 있을 때 선언부만 끌어올림 그래서 undefined가 되는 것임.
*/
/*
// 동적 할당 변수
var pi=3.14;
console.log(pi);
var pi="원주율"
console.log(pi);
var pi=1.3; 
console.log(typeof(pi)); //numeber로 나옴. js는 var로 자료형을 정하기 때문에 int, float형이 없음.
*/
/*
// 문자열 리터럴, space holder
console.log("a");
var now = new Date();
console.log(`오늘은 ${now.getMonth()+1} 월 ${now.getDate()}일 입니다.`);
*/
/*
//객체 리터럴
var card = {suit:"하트", rank:'A'};
console.log(card.suit);
console.log(card.lol);
card.rank='B';
card.rule=14;
console.log(card);
delete card.rank;
console.log(card);
console.log("rank" in card);
console.log("lol" in card);
var person={
    name:"동민",
    height:180,
    age:24,
    sex:"남",
    married:"divorced"
}
console.log(person)
console.log(person.name)
// c++클래스랑 비슷함.

var p= {x:1.0, y:2.5};
var circle={
    center:{x:1.0, y:2.0},
    radius:3
}
console.log(circle.center.x)
*/
