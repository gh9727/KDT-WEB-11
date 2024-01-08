// Date 객체
// 1970년 1월 1일 0시 기준으로 시작 === UTC(영국) -> 대한민국 시간: UTC + 9
console.log(new Date(2024, 1, 3, 15));
const date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth() + 1);
// 오늘이 며칠인지 나타냄
console.log(date.getDate());
// 요일을 숫자로 나타냄
console.log(date.getDay());
console.log(date.getHours());
// getTime(): 시간을 타임스탬프로 나타냄
console.log(date.getTime());
console.log(date.getSeconds());
console.log(date.getMilliseconds());

console.log(
    `${date.getFullYear()}년 ${
        date.getMonth() + 1
    }월 ${date.getDate()}일 ${date.getHours()}시 ${date.getMinutes()}분 ${date.getSeconds()}초`
);

// Math 객체
console.log(Math.PI);
console.log(Math.E);
console.log(Math.max(1, 5, 3, 8, 2));
console.log(Math.min(10, 7, 1, 6, -10));
console.log(Math.random()); // 0 ~ 1 사이의 난수
console.log(Math.round(1.7)); // 반올림
console.log(Math.floor(1.7)); // 버림
console.log(Math.ceil(1.7)); // 올림
console.log(Math.abs(10 - 20)); // 절대값
console.log(Math.cbrt(3));
