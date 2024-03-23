// only typescript type

// Tuple: "순서"와 "개수"가 정해진 배열
// let 변수: [자료형,자료형..] = [배열 요소..]
let drink: [string, number] = ['사이다', 1000];
drink[0] = '콜라';
// Tuple 한계: 값이 추가됨
drink.push('음료수');
console.log(drink);

// readonly 키워드: 요소 타입 순서 & 길이 "고정"
// const 변수: readonly [자료형,자료형..] = [배열 요소..]
const drink2: readonly [string, number] = ['사이다', 1000];
// drink2.push('음료수'); ERROR를 띄어 PUSH 막아줌

console.log('\n');
console.log('=====================================\n');
// ============================================================
// Enum : 숫자 or 문자열 열거형
// enum 변수 {변수=값..}
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}

enum Cafe {
  americano = '아메리카노',
  latte = '카페라떼',
}

console.log('Auth.admin :', Auth.admin);
console.log('Cafe.latte :', Cafe.latte);

// 값을 넣지 않으면 숫자형, 첫 요소 0으로 할당
enum Cake {
  chocolate,
  vanilla,
  strawberry,
}

// 값을 넣지 않으면 숫자형, 첫 요소 0으로 할당
enum Cake2 {
  chocolate,
  vanilla,
  strawberry = '딸기 케이크',
}

console.log('Cake2.chocolate :ㅌ', Cake2.chocolate);
console.log('Cake2.strawberry :', Cake2.strawberry);

console.log('\n');
console.log('=====================================\n');
// ============================================================
// any
// 명시적으로
let val: any;
val = 1;
val = undefined;
val = 'hello';
val = { name: 'codingon' };

// 암묵적으로
let val2;
val2 = false;
val2 = 'hi';

// ============================================================
// 사용자 정의 타입

// 1. interface
// interface 변수 {key : 자료형 ..}
interface Student {
  name: string;
  isPassed: boolean;
}

// const 변수: interface변수 = {interface키 : value ..}
const student: Student = {
  name: '홍길동',
  isPassed: true,
};

//enum + interface
enum Score {
  Aplus = 'A+',
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
}

// interface 상속
// interface 변수 extends 부모interface변수 {key : 자료형 ..}
interface BaseballClub extends Student {
  position: string;
  readonly height: number;
  backNumber?: number; // ?: 있어도 되고, 없어도 된다.
  //   score: Score;
  [grade: number]: Score; // 학년 : 점수
}

// 부모interface키도 사용해야함
const otani: BaseballClub = {
  name: 'otani',
  isPassed: false,
  position: 'abcd',
  height: 35,
  //   score: Score.A,
  1: Score.A,
};
console.log(otani);
otani.position = '투수';
console.log(otani);

console.log('\n');
console.log('=====================================\n');
// ============================================================
// 2. type(자료형 설정하기)
type Bp1 = 500 | 700 | 1000;
enum Bp2 {
  SM = 500,
  MD = 700,
  LG = 1000,
}

const width1: Bp1 = 500;
const width2: Bp2 = Bp2.LG;

// 교차 타입: 두개 이상의 타입을 합치는 것
interface Toy {
  name: string;
  start(): void;
}

interface Car {
  name: string;
  color: string;
  price: number;
}

type ToyCar = Toy & Car;
const toyCar: ToyCar = {
  name: 'tayo',
  start() {
    console.log('출발');
  },
  color: 'blue',
  price: 10000,
};

console.log(toyCar);

type Gender = 'F' | 'M';
type Person = {
  name: string;
  age?: number;
  like?: string;
  gender: Gender;
};

let daniel: Person = {
  name: 'daniel',
  gender: 'F',
};
