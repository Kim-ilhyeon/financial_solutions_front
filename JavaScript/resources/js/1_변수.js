console.log("Hello world, 안녕");
/*
    js는 동적 타입 언어 : 타입을 미리 정하지 않고, 실행 중간에 값에 따라서 타입을 결정하는 언어
*/
/*
    JavaScript의 변수는

    1. var - 사용하지 않는다.
    2. let - 
    3. const - 

    JavaScript의 hoisting
    : 변수와 함수 선언이 해당 파일 최상단으로 끌어올려진 것처럼 동작하는 현상
    (선언만 끌어 올리고 할당은 그대로 남는다.)
*/
console.log(name);

var name = "김일현";
var age = 55;
console.log(name);
var height = 180.5;
var isPass = true;
name = null;
console.log(name);

/*
    let은 var에서 같은 이름의 중복 생성을 하지 못하게 만든 자료형
    const는 상수를 표현하기 위한 자료형

    let, const도 hoisting이 되지만 동시에 TDZ(Temporal Dead Zone)에 저장함
    선언 시점에 TDZ에서 제거해서 사용하게 만들어준다.
*/
// console.log(name2); 

let name2 = "김일현";
console.log(name2);

// let name2 = "김수민"; 이미 선언된 변수라는 에러가 발생

const name3 = "박지수";
// name3 = "김지수"; 값을 한번 저장하면 바꿀 수 없다.

const list = [1, 2];
list.push(3);
console.log(list);
// list = [4]; 재할당 불가



/*
    js의 네이밍 규칙

    변수 이름
    1) 일반적으로 영어를 사용하며 문자와 숫자 모두 사용할 수 있음.
    2) 특수문자는 언더스코어(_)와 달러($)만 사용할 수 있음.
    3) 숫자로 시작할 수 없음
    4) 키워드를 변수명으로 사용하면 안됨.

    일반적으로 변수명, 함수명 -> camelCase
    class, id같은 속성명 -> kebab-case
*/

// --------- 동적 타입 ---------
let value = "최지원";
console.log(typeof value);
value = 55;
console.log(typeof value); // 같은 변수에 다른 타입 재할당 가능

/*
    자료형  : 원시타입 6개 + Object타입 1개
    원시 : Number, String, Boolean, undefined, null, Symbol
    Object: Object, Array, Function . . .
*/


// Number(숫자- 정수/실수 구분X)
const age2 = 55;
const temp = -10.5;
console.log(typeof age, typeof temp);
console.log(typeof Infinity);

// String (문자열)
const title = "김일현은 26살";
console.log(typeof title);

// Boolean
const isTrue2 = true;
console.log(typeof isTrue2);

// undefined (값을 초기화하지 않았을 떄 자동 지정)
let num;
console.log(num);
console.log(typeof num);

// null (개발자가 명시적으로 '없음'을 넣을 때
let init = 10;
init = null;
console.log(typeof init); // Object로 나오는 것은 버그

// symbol (유일무이한 값)
const s1 = Symbol("1");
console.log(s1);

const s2 = Symbol("1");
console.log(s2);

console.log(s1 === s2);

// console.log(10 == "10"); ==은 값만 비교
// console.log(10 === "10"); ===은 타입까지 비교


// Object (key : value구조, Map과 유사)
const ilhyeon = { 
    name: "김일현",
    age: 26, 
    address: "경기도 시흥시", 
    job: "학생", 
    hello : function() {
        console.log("안녕, 나는 김일현이야");
    }
}

console.log(ilhyeon.name);
console.log(ilhyeon.age);
console.log(ilhyeon.address);   // 객체에 접근 .key
console.log(ilhyeon["job"]);    // [key]로 접근 [key]
ilhyeon.age = 15;
ilhyeon["job"] = "야구선수";
console.log(ilhyeon.age);
console.log(ilhyeon.job);
console.log(typeof ilhyeon);
console.log(ilhyeon.hello());

// Array (js의 배열은 리스트와 유사
const arr = ["초록색", "노락색"];
const arr2 = [];
arr.push("발간색"); // 배열의 맨 뒤에 요소를 추가
arr.push("파란색");

console.log(arr);
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[10]);   // undefined가 나옴 -> 언젠가는 개발자가 쓸수도 있는 값이라서
console.log(arr.pop()); // 맨뒤에 요소를 반환하고 배열에서 삭제.
console.log(arr);
