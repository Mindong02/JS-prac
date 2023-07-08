//프로그램을 토큰으로 분해 -> 어휘 분석
//토큰을 자바스크립트 구문 규약에 맞게 분석하는 것 -> 파싱!

function fact (n){  // function / fact / (/ n / )/  이것들이 토큰(의미를 가지는 최소한의 단위)
                    // 국어랑 비슷 
    if(n<=1){
        console.log(n);
    }
    else{
        console.log(0);
    }
}
fact(3);