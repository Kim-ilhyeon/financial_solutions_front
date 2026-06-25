/*
    배열 : 값을 순서대로 나열하는 자료구조
*/

// 배열 생성
// 변수 = [];
let memebers = ["김일현", "김이현", "김삼현"];

memebers.push("김사현");    // 맨 뒤에 추가
console.log(memebers);

console.log(memebers.pop());    // 맨 뒤에 값을 가져오고 배열에서 제거
console.log(memebers);

memebers.unshift("김영현"); // 맨 앞에 추가
console.log(memebers);

console.log(memebers[0]);
console.log(memebers[0]);

memebers[1] = "김명현";
console.log(memebers);


// splice : 배열에서 값을 잘라냄 (원본 훼손됨)
let arr = ["a", "b", "c", "d", "e"];
// 배열.splice(인덱스, 몇개를);
let spliceArr = arr.splice(1, 2);   // ["b", "c"]
console.log(arr);
console.log(spliceArr);

// slice : 배열에서 값을 추출함 (원본 유지됨)
arr = ["a", "b", "c", "d", "e"];

// 배열.slice(시작인덱스, 끝인덱스-1);
sliceArr = arr.slice(0, 3); // ["a", "b", "c"]
console.log(arr);
console.log(sliceArr);

// 검색
let colors = ["red", "green", "blue"];
console.log(colors.indexOf("green"));   // 해당 값이 있는 인덱스 번호를 반환, 없다면 -1을 반환
console.log(colors.includes("blue"));   // 해당 값이 포함되어있는지 확인, 있으면 true
console.log(colors.includes("purple")); // 해당 값이 포함되어있는지 확인, 없으면 false

// 문자열 변환
members = ["김일현", "김이현", "김삼현"];
// 배열.join(구분자)
console.log(members.join());    // ,를 포함한 문자열로 변환
console.log(members.join("-"));    // -를 포함한 문자열로 변환

// 정렬
members.reverse();
console.log(members);

members.sort(); // 오름차순
console.log(members);
// 내림차순 -> sort() 후에 reverse()하면 내림차순으로 적용 가능

// sort의 기준을 전달
// 배열.sort(기준 함수);
// a를 b보다 뒤로 -> 0보다 큰 수 반환
// a를 b보다 앞으로 -> 0보다 작은 수를 반환
// 순서를 유지하겠다면 0을 반환

// 오름차순 기준일 때 (a, b) => a - b;
let nums = [10, 3, 5, 37];
nums.sort((a, b) => a - b); // 오름차순
console.log(nums);
nums.sort((a, b) => b - a); // 내림차순
console.log(nums);

let stdList = [
    {name: "김일현", java: 75},
    {name: "김이현", java: 20},
    {name: "김삼현", java: 98},
];

stdList.sort((a, b) => a.java - b.java);    // java점수로 오름차순
console.log(stdList);







