const btn = document.getElementById('btn');
const def = document.getElementById('default');
let input = document.getElementById('id');
// addEventListener("이벤트","콜백함수()")
// 콜백함수 매개변수로 이벤트 객체를 생성할 수 있다.
// 이벤트 객체를 통해 다양한 메서드 접근 가능

// click 이벤트
btn.addEventListener('click', function (event) {
    event.preventDefault(); // 먼저 써야한다.
    console.log(event);
    console.log(event.target);
    // console.log('안녕하세요');
});

// mouse 이벤트
btn.addEventListener('mouseover', function () {
    console.log('mouseover');
});
btn.addEventListener('mouseout', function () {
    console.log('mouseout');
});
// focus 이벤트: 버튼 클릭할 때 1번만 작동됨
// input 태그에 사용하는게 적당함
btn.addEventListener('focus', function () {
    console.log('focus');
});

input.addEventListener('focus', function () {
    console.log('focus');
});

input.addEventListener('blur', function () {
    console.log('blur');
});

input.addEventListener('keydown', function () {
    console.log('kewdown');
});
input.addEventListener('keyup', function () {
    console.log('keyup');
});

// this: 그 함수가 속해 있던 객체 참조
// 뭔가를 클릭할때 불러오는 함수(콜백함수)에서 this는 그 뭔가를 의미함
// this === 자기 자신이라고 생각하면 됨
def.addEventListener('click', function (event) {
    event.preventDefault(); // form 전송을 막는 메서드
    console.log(this);
    this.textContent = '클릭함';
});
