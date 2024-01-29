// jquery
// 구조:  ${선택자}.동작함수();

// console.log($('#hello').text());
// $('#hello').text('안녕히가세요');
// $('#hello').css('font-size', '20px');

// jquery 메서드 : val()
function getValue() {
    let value = $('input').val();
    console.log(value);
}
function setValue() {
    $('input').val('설정완료');
}
// jquery css()
function changeCssJs() {
    let span = document.querySelector('span');
    span.style = 'font-size : 20px; color : red;';
}

function changeCssJquery() {
    $('span').css('font-size', '40px');
    $('span').css('color', 'blue');
    $('span').css({ 'font-size': '40px', color: 'blue' });
}

function getCssJquery() {
    console.log($('span').css('color'));
}

// jquery 메서드 : attr()
function changeAttrJs() {
    let a = document.querySelector('a');
    a.setAttribute('href', 'https://www.naver.com');
}
function changeAttrJquery() {
    $('a').attr('href', 'https://www.daum.com');
}

// jquery 동작함수 : html()
function changeHtmlJs() {
    let p = document.querySelector('.html');
    p.innerHTML = '<p>javaScript</p>';
}
function changeHtmlJquery() {
    $('.html').html('<p>Jquery</p>');
}

// jquery 요소 추가하기 append() + prepend()
function appendJs() {
    // 항상 기준이 되는 dom을 가져온다.
    let ul = document.querySelector('.colors');
    let li = document.createElement('li');
    li.textContent = '마지막으로 추가된 js';
    ul.append(li);
}
function appendJquery() {
    // jquery도 기준점이 있어야 함.
    // html() 동작함수랑 사용방법이 비슷함
    $('.colors').append('<li>마지막으로 추가된 jquery</li>');
}

function prependJs() {
    let ul = document.querySelector('.colors');
    let li = document.createElement('li');
    li.textContent = '처음으로 추가된 js';
    ul.prepend(li);
}
function prependJquery() {
    $('.colors').prepend('<li>처음으로 추가된 jquery</li>');
}

// jquery : remove() - 요소 삭제하기 + 얘도 기준점이 있어야함.
function removeJs() {
    let li = document.querySelector('#li2');
    li.remove();
}

function removeJquery() {
    $('#li2').remove();
}

// jquery : empty() - 요소 삭제하기
function emptyJs() {
    let nums = document.querySelector('.nums');
    console.log(nums);
    nums.innerHTML = '';
}
function emptyJquery() {
    $('.nums').empty();
}

// 요소 탐색하기
function findParents() {
    console.log($('.child2').parents());
}
function findParent() {
    console.log($('.child2').parent());
}
function findNext() {
    console.log($('.child2').next());
}
function findPrev() {
    console.log($('.child2').prev());
}
function findChildren() {
    console.log($('.parent').children());
}
