/*
console.log(document);

console.log($(document));
-> 보통 클릭이벤트를 여기에 쓰진 않음
$(document).ready(function () {
    console.log('ready() - 문서의 DOM 트리가 완성되면 실행되는 이벤트');
});
$(function () {
    console.log('안녕');
});
*/

// click() 이벤트
$('.hello').click(function () {
    $('.hello').css('color', 'red');
});
$('.nums').click(function () {
    // $('.nums').css('color', 'blue');
    // $(this)는 자기자신 = 이벤트가 적용된 요소
    $(this).css('color', 'blue');
});

// mouseover() 이벤트 : 마우스 올렸을 때
$('.numbers').mouseover(function () {
    // $('.numbers').css('background-color', 'green');
    // $('.numbers').append('<li>.mouseover() call</li>');
    $(this).css('background-color', 'green');
});

// hover() 이벤트 : 마우스 올렸을 때와 때었을 때 -> 토글이랑 비슷함

// $('.div-hover').hover(
//     // 올렸을 때 콜백함수
//     function () {
//         $(this).addClass('hover');
//     },
//     // 때었을 때 콜백함수
//     function () {
//         $(this).removeClass('hover');
//     }
// );

$('.div-hover').hover(function () {
    $(this).toggleClass('hover');
});

//  scroll()
//  ex: 윈도우 창 스크롤 할 경우
$(window).scroll(function () {
    console.log('scroll');
});

// keydown() 이벤트, keyup() 도 있음
$('.input-key').keydown(function (event) {
    if (event.code === 'ArrowUp') {
        console.log('up');
    } else if (event.code === 'ArrowDown') {
        console.log('down');
    }
});

// on('이벤트명',function(){}) 이벤트, 복잡한 이벤트 시 사용함
$('.nums').on('click', function () {
    $('.hello').css('background-color', 'red');
});
