$('tr td:first-child').css('color', 'red');
$('tr td:last-child').css('color', 'blue');

$('td').on('click', function () {
    // td 요소 정보를 변수에 담기
    let td_this = $(this); // 배열처럼 쌓이는가?
    let value = $(this).text();
    $('#day').val(`2022.7.${value}`);

    $('button').on('click', function () {
        let value2 = $('#content').val();
        $(td_this).append(`<div>${value2}</div>`);
        // 위의 td_this가 초기화가 되어도 이전 td 요소 정보도 같이 딸려와서
        // td 요소에 input 데이터를 넣어준 뒤 td_this 변수 null로 초기화
        td_this = null;
    });
});
