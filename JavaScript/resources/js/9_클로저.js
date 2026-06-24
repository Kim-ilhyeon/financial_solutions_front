/*
    클로저
    - 함수, 그 함수가 선언된 시점의 렉시컬 환경의 조합
    즉, 내부 함수가 외부 함수의 변수를 기억한다.
    외부 함수가 끝나도 계속 변수를 사용할 수 있다.
*/

function getCount() {
    let count = 0;  // 외부에서 직접 접근 x
    function increase() {
        count++;
        return count;
    }

    return increase;    // 내부 함수를 반환 -> 외부에서 count값에 간접접근
}

const run = getCount();
console.log(run());
console.log(run());
console.log(run());
console.log(run());
console.log(run());

// count변수는 보이진 않지만 increase()함수 안에 존재하고, increase()를 통해서만 변경이 된다. -> 캡슐화
// run이 살아 있는 한 count가 메모리에 유지됨. -> 상태 유지

// 호출마다 독립된 환경을 가질 수 있다.
const run1 = getCount();
const run2 = getCount();

console.log(run1());
console.log(run1());
console.log(run1());
console.log(run2());

function out (outValue) {
    function inner (innerValue) {
        console.log("outValue : " + outValue);  // out함수 실행이 끝나다ㅗ 값이 유지된다.
        console.log("innerValue : " + innerValue);
    }
    return inner;
}

const print = out("외부함수");
print("내부함수");

// 데이터 은닉
function createStore (inital = 0) {
    let value = inital; // value에는 외부접근 불가
    return {
        get: () => value,
        set: (v) => {value = v;},
        increase : () => {value++; return value;}
    }
}

const store = createStore(10);
console.log(store.get());
store.increase();
store.set(100);
console.log(store.get());





