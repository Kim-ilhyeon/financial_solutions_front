/*
    호이스팅 (hoisting)
    js엔진은 코드 실행 전에 모든 변수, 함수를 전부 상위로 가져와 선언함.

    - 선언이 아래에 있어도 위로 끌어 올려진 것처럼 보임.
    - 변수가 이동하는게 아니라 선언만 먼저 되는 것임.
*/
// 선언 전에 접근해도 에러가 아니라 undefined값이 나옴
console.log("선언 전 : " + name1);
var name1 = "ilhyeon";
console.log("선언 전 : " + name1);

// let / const : 호이스팅은 되지만 TDZ를 만들어
// 일시적으로 선언코드 전까지는 TDZ에 기록해서 접근할 수 없게 함.
// console.log(name2);
// console.log(name3);
const name2 = "지수";
let name3 = "진우";

console.log(name2);
console.log(name3);

// 함수도 호이스팅 대상
// 전체 함수가 먼저 등록되므로 선언 전에 호출 가능.
hello();
function hello () {
    console.log("안녕하세요.");
}

// 익명함수를 만들고 변수에 할당해도 변수에 호이스팅 규칙상 선언 전 사용이 불가능하다.
// bye();   -> 변수에 함수를 넣어놓은 것이기 때문에 변수는 TDZ안에 있어서 호출이 불가능하다.
const bye = function () {
    console.log("잘가요");
}


