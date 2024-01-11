// div.container
$('.container').css({
    border: '1px solid black',
    position: 'relative',
    top: '10px',
    left: '50px',
    width: '350px',
    height: '300px',
    display: 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
});

// div.container > div.box
$('.box').css({
    flex: '10',
    width: '280px',
    border: '5px solid orange',
    'border-radius': '15px',
    display: 'flex',
    'flex-wrap': 'wrap',
    'justify-content': 'center',
    'align-content': 'center',
});
// div.container > div.box > span.span
$('.span').css({ 'font-size': '40px', 'margin-top': '15px' });

// div.container > div.buttonBox
$('.buttonBox').css({ flex: '1', display: 'flex', 'align-items': 'center' });
// div.container > div.buttonBox > button.btn
$('.btn').css({ 'background-color': 'black', color: 'white', 'margin-right': '5px' });

function apple() {
    $('.box').empty();
    $('.box').append('<img src="apple.png"></img>');
    $('img').css({ width: '100%', height: '80%' });
}
function banana() {
    $('.box').empty();
    $('.box').append('<img src="banana.png"></img>');
    $('img').css({ width: '100%', height: '80%' });
}
function grape() {
    $('.box').empty();
    $('.box').append('<img src="grape.png"></img>');
    $('img').css({ width: '100%', height: '80%' });
}
function peach() {
    $('.box').empty();
    $('.box').append('<img src="peach.png"></img>');
    $('img').css({ width: '100%', height: '80%' });
}
