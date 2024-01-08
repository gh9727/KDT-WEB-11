let str = 'Happy day~! ';
console.log(str.length); // 빈 문자 포함 문자열의 길이 반환
// toUpperCase(), toLowerCase(): 회원가입시 아이디 중복을 막기위해 사용됨.
console.log(str.toUpperCase()); // 모든 문자 대문자로 치환
console.log(str.toLowerCase()); // 모든 문자 소문자로 치환
console.log(str.indexOf('y')); // y로 시작하는 문자열의 인덱스 위치 반환.(단, 첫번째 문자만 검색함.)
console.log(str.slice(2)); // 2번째 문자부터 마지막 번째 문자까지만 잘라낸다.
console.log(str.slice(2, -7)); // 음수일때는 뒤에서 부터 자른다.

console.log(str.replace('a', 's')); // 첫 번째 문자만 다른 문자로 치환,
console.log(str.replaceAll('a', 's')); // 모든 문자를 다른 문자로 치환
console.log(str.repeat(2)); // 문자열을 n번만큼 반복시킨다.
console.log(str.trim().toLowerCase().split('p')); // 문자열의 양옆 공백을 삭제한다.

const colors = ['red', 'orange', 'yellow'];
console.log(colors.join(' ')); // 문자열 합치기
console.log(str.split('Ha')); // 문자열 자르기(문자열 단위('Ha')로 자르게 되면 ''요소가 추가됨.)

let hello = 'Hello~';

let helloSplit = hello.split('');
console.log(helloSplit);

let helloReverse = helloSplit.reverse();
console.log(helloReverse);

let helloJoin = helloReverse.join('');
console.log(helloJoin);

// 메서드 체이닝
console.log(hello.split('').reverse().join(''));
