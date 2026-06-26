/*
    - 실행 중 발생하는 오류를 잡아서 프로그램이 비정상 종료되는 것을 막는 처리방식
    - try-catch / finally, throw, Error객체
*/

// try : 오류가 발생할 수 있는 코드를 감싸줌
// catch : try영역에 오류가 발생하면 실행하는 코드
// finally : 오류여부와는 관계 없이 항상 실행하는 코드

try {
    const data = JSON.parse("문자열 입력");
    console.log(data);
} catch (err) {
    console.log("에러 발생 : " + err.message);
} finally {
    console.log("실행 완료");
}

try {
    console.log("정상코드");
} catch (err) {
    console.log("에러 발생 : " + err.message);
} finally {
    console.log("실행 완료");
}

// throw로 직접 오류를 발생 시킬 수 있다.
// new Error(메세지);

function divide(a, b) {
    if (b === 0) {
        throw new Error("0으로 나눌 수 없음");
    }
    return a/b;
}
try {
    console.log(divide(10, 2)); // 5
    console.log(divide(10, 0)); // 에러발생
    console.log("에러없이 끝까지 실행됨");
} catch (err) {
    console.log("에러 발생 : " + err.message);
} finally {
    console.log("실행 완료");
}


