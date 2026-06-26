/*
    JSON (JavaScript Object Notation)
    - 데이터를 주고받는 텍스트 형식
    - 서버 통신, 로컬에 데이터를 저장
    - 객체와 비슷하지만 json은 문자열이다.
*/

const user = {
    name: "김일현",
    age: 20,
    skills: ["js", "java", "db"],
    tmpFunc: function() {}
};

// 객체 -> json문자열
// 서버로 보낼 떄, JSON.stringify(객체)
// => 함수는 제외하고 변환됨.
const jsonStr = JSON.stringify(user);

console.log(jsonStr);
console.log(typeof(jsonStr));

// 3번째 인자에 들여쓰기 칸 수 지정
console.log(JSON.stringify(user, null, 2));

// JSON.parse(json문자열) -> 문자열을 객체로 변환
const obj = JSON.parse(jsonStr);
console.log(obj);
console.log(typeof(obj));
console.log(obj.name);
console.log(obj.skills);





