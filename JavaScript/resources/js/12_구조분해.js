/*
    스프레드 연산자와 구조분해 할당
    - 스프레드(...) : 배열/객체의 요소를 펼쳐서 복사, 전달 사용
    - 구조분해할당 : 배열/객체에서 값을 추출해 개별변수에 할당
*/

// 스프레드 : 배열
let members = ["김일현", "김이현", "김삼현"];
let members2 = [...members, "김사현", "김오현"];

console.log("members : " + members);
console.log("members2 : " + members2);


// 스프레드 : 객체
let user01 = {
    id: "user01",
    pwd: "pass01",
    name: "ilhyeon",
    age: 20,
    height: 174.3
};
console.log(user01);
// user01.pwd = "pass02";

// user01의 pwd를 "pass02"로 수정
user01 = {...user01, pwd: "pass02"};
console.log(user01);

// user01의 주소를 추가
user01 = {...user01, address: "경기도 시흥시"};
console.log(user01);

// 갯수를 알 수 없는 여러 개의 매개변수를 받을 때 
function sumAll (...args) {
    console.log(args);
    return args.reduce((acc, cur) => acc+cur, 0);
}

console.log(sumAll(1,2,3,4,5,6,7,8,9,10));

// 배열의 구조분해 할당(순서 기반)
const list = ["김일현", "김이현", "김삼현"];
// 배열의 각 요소를 변수로 만들어서 쓰고 싶다.
const [one, two] = list;
console.log(one, two);

// 일부 건너뛰기
const [first, , third] = list;
console.log(first, third);
// 일부 가져오고 나머지는 한번에
const [head, ...rest] = list;
console.log(head, rest);

// 객체 구조분해 할당(key기준)
user01 = {
    id: "user01",
    pwd: "pass01",
    name: "ilhyeon",
    age: 20,
    height: 174.3
};

const {name, age} = user01;
console.log(name, age);

const {name: userName, age: userAge} = user01;
console.log(userName, userAge);

// 특정 key가 없을 시 기본값 부여 가능
const {job = "무직"} = user01;
console.log(job);

function printUser({name, age}) {
    console.log("제 이름은 " + name + "이고, 나이는 " + age + "살 입니다.");
};
// printUser(user01.name, user01.age);
printUser(user01);

