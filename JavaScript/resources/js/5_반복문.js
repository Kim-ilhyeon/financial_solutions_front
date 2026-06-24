/*
    반복문
    - for / while / do-while
    - break / continue
    - for...of(값 순회) / for...in(key 순회)
*/

// for문 : 반복 횟수가 정해져 있을 떄
// 1 ~ 7까지 반복
for (let i = 1; i <= 7; i++) {
    console.log("회차 : " + i);
};

// while : 조건이 참인 동안 반복할 때
let i = 1;
while (i <= 7) {
    console.log("회차 : " + i);
    i++;
}

// do-while : 1번은 무조건 실행하고, 조건 검사
i = 1;
do {
    console.log("회차 : " + i);
}while (i > 7);

// break / continue
// break : 즉시 반복문을 종료
// continue : 이번 회차는 이제 건너뛰고 다음회차로 이동
for (let j = 1; j <= 10; j++) {
    if (j === 5) {
        continue;
    }
    if (j === 8) {
        break;
    }
    console.log(j);
}

// for...of : 배열의 값을 순회할 때 사용
const members = ["김일현", "김수민", "박지수"];
for (const name of members) {
    console.log(name);
}

// for...in : 객체의 kwy를 순회할 때 사용
const std = {name:"임요환", java:75, db:80};
for (const key in std) {
    console.log(key);
    console.log(std[key]);
}

// 배열을 for...in으로 사용하면?
for (const name in members) {
    console.log(name);
}




