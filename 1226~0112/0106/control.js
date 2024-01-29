// 반복문 제어
// break : 멈추고 빠져나옴
// continue : 멈추고 반복문 증감식으로 넘어감(다음 반복줄 실행)

for (let i = 0; i < 100; i++) {
    if (i === 11) {
        console.log('끝!');
        break;
    }
    console.log(i);
}
let sum = 0;
for (let j = 0; j < 100; j++) {
    sum += j;
}
console.log(sum);
