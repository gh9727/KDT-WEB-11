console.log('안녕');

// js자료형 변수: 자료형 = 자료형에 상응하는 데이터
const msg: string = '타입스크립트 학습';
const num: number = 100;

console.log(msg);
console.log(num);

// fucntion 함수명(매개변수: 자료형) : 반환될 자료형 {return}
function sum(x: number, y: number): number {
  return x + y;
}
console.log(sum(10, 20));
