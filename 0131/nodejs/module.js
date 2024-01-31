// 하나의 모듈 파일에 하나의 모듈 만들기
const a = 10;
const b = 20;
function connect() {
    return a + b;
}
// module.js 에서만 connect() 사용 가능
connect();

// module.js 파일 외에 index.js 에서도 connect() 사용 가능
// module.exports = connect;

// 하나의 모듈 파일에 여러개 모듈 만들기
const c = 'c 변수';
const d = 'd 변수';
const e = 'e 변수';

// 방법 1
module.exports = {
    c,
    d,
    e,
    connect,
};

// 방법 2
module.exports.c = c;
module.exports.d = d;
module.exports.e = e;
