function addClass() {
    $('#hi').addClass('font-size');
}
// 특정 클래스 삭제
function removeClass() {
    $('#hi').removeClass('font-size');
    $('#hi').removeClass('color-blue');
    // $('#hi').removeClass(); // 매개 변수값을 넣지 않으면 해당 요소의 모든 클래스 삭제함
}
// 특정 클래스 유무 true, false 반환
function hasClass() {
    console.log($('#hi').hasClass('color-blue'));
    console.log($('#hi').hasClass('font-size'));
    console.log($('#hi').hasClass('bg-color'));
    // console.log($('#hi').hasClass()); // 아무것도 안넣으면 무조건 false
}
// 특정 클래스가 없으면 추가, 있으면 삭제
function toggleClass() {
    $('#hi').toggleClass('bg-color');
}
// 특정 클래스 a를 특정 클래스 b로 n초 동안 변환시킴
function switchClass() {
    $('#hi').switchClass('color-blue', 'color-red', 30000); // 1000은 1초를 의미함
}
