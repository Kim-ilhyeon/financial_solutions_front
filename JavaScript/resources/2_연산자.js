/*
    연산자
    - 산술 / 대입 / 비교 / 논리
    - 삼항 연산자, ?.
*/

// 산술 연산자 : + - * / % **(거듭제곱)
console.log(10 + 3);
console.log(10 - 3);
console.log(10 * 3);
console.log(10 / 3);
console.log(10 % 3);
console.log(2 ** 10);   // 거듭 제곱

// 대입 연산자 : = += -= *= /= %=
let x = 10;
x += 5;
console.log(x);

// 비교 연산자 : > < >= <= !=
// == / != : 타입 비교X, 값 비교O
// === / !== : 타입 비교O, 값 비교O
console.log(55 == "55");
console.log(55 === "55");
console.log(55 != "55");
console.log(55 !== "55");

// 논리 연산자 && || !
// &&, ||은 단순하게 true/false를 판단하는게 아니라 "값"을 반환 (단축평가)
// A && B : A가 false A, ture면 B
// A || B : A가 true면 A, false이면 B
console.log(true && "결과");
console.log(false && "결과");
console.log("값" || "기본 값");
console.log("" || "기본 값");

function greet(name) {
    name = name || "손";
    console.log("안녕하세요. " + name + "님");
}

greet();
greet("일현");

const user = {
    name: "일현"
};
user && console.log(user.name);

// 삼항 연산자 조건 ? A : B;
const age = 20;
const msg = age >= 19 ? "성인" : "미성년";
console.log(msg);

// ?? : null병합 연산 -> 왼쪽이 null/undefined일 때 오른쪽을 사용
const count = 0;
console.log(count || 10);   // 0은 false로 간주되어 뒤에 있는 10이 출력됨
console.log(count ?? 10);   // 0은 null/undefined는 아니기 때문에 0이 출력됨

// ?. : 옵셔널 -> 값이 없으면 에러 없이 undefined로 반환
const data = {user: null};
// console.log(data.user.name);
console.log(data.user?.name);
