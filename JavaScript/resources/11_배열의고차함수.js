/*
    배열의 고차한수

    - 고차함수 : 함수를 인자로 받는 함수
    - 대부분 원본을 바꾸지 않고, 새로운 배열을 만들어서 반환 (불변성을 유지)
*/
let stdList = [
    {id: 1, name: "김일현", java: 75, db: 80},
    {id: 2, name: "김이현", java: 86, db: 40},
    {id: 3, name: "김삼현", java: 20, db: 90},
]

// forEach(반복할 함수) : 전체 순회
stdList.forEach((v, i) => {
    console.log(i + "번째 : " + v.name);
});

/*
function forEach(callback) {
    for(let i=0; i < stdList; i++) {
        callback(stdList[i], i);
    }
}
*/

// map(함수) : 기존 배열을 가지고 새로운 배열을 만든다.
// -> 각 요소를 전달해서 리턴받은 값을 가지고 새로운 배열을 만듬
let nums = [1, 2, 3];
// 각 값들을 두배로 하여 새로운 배열을 생성
let doubled = nums.map((n) =>  n * 2);
console.log(doubled);

const names = stdList.map(std => std.name);
console.log(names);

// filter(함수) : 조건을 통과한 요소만 남기는 새로운 배열을 만든다.
// -> 각 요소를 전달해서 리턴값이 true인 요소만 남긴 새로운 배열을 만듬
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = nums.filter(num => num%2===0);
console.log(even);

stdList = [
    {id: 1, name: "김일현", java: 75, db: 80},
    {id: 2, name: "김이현", java: 86, db: 40},
    {id: 3, name: "김삼현", java: 20, db: 90},
]
// id가 2인 학생 삭제

stdList = stdList.filter(std => std.id!==2);
console.log(stdList);

// id가 3인 학생의 이름을 "김명현"으로 변경
stdList = stdList.map(std => {
    if (std.id === 3) {
        std.name = "김명현";
    }
    return std;
});
console.log(stdList);

// reduce : 하나의 값으로 누적시키기 위해서 사용
// reduce((누적값, 요소) => {...}, 초기값)
// 순회하는 동안에는 return값이 첫번쨰 인자인 누적값으로 반환되어 반복된다.
const scoreList = [10, 20, 30];
const total = scoreList.reduce((acc, cur) => {
    acc += cur;
    return acc;
}, 0);
console.log(total);

stdList = [
    {id: 1, name: "김일현", java: 75, db: 80},
    {id: 2, name: "김이현", java: 86, db: 40},
    {id: 3, name: "김삼현", java: 20, db: 90},
];
// stdList의 java점수의 총 합을 구해라
const javaSum = stdList.reduce((acc, cur) => {
    acc += cur.java;
    return acc;
}, 0);
console.log(javaSum);

// find / findIndex
// find : 조건을 만족하는 첫 요소를 반환 (없으면 undefined를 반환)
const found1 = stdList.find(std => std.name === "김일현");
console.log(found1);
const found2 = stdList.find(std => std.name === "김명현");
console.log(found2);

// findIndex : 조건을 만족하는 첫 요소의 인덱스를 반환 (없으면 -1)
const idx1 = stdList.findIndex(std => std.name === "김일현");
console.log(idx1);
const idx2 = stdList.findIndex(std => std.name === "김명현");
console.log(idx2);

// some, every
const arr = [1, 2, 3, 4, 5];
console.log(arr.some(n => n>3)); // sum은 조건을 만족시키는 값이 한개라도 있다면 true
console.log(arr.every(n => n>3)); // every는 요소 전부가 조건을 만족시키면 true


stdList = [
    {id: 1, name: "김일현", java: 75, db: 80},
    {id: 2, name: "김이현", java: 86, db: 40},
    {id: 3, name: "김삼현", java: 20, db: 90},
]
// db점수가 80점 이상인 학생들의 이름만 저장
const result = stdList.filter(std => std.db>=80).map(std => std.name);
console.log(result);

