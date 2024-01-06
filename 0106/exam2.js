let now = new Date().getHours();
now <= 12
    ? now >= 0 && now <= 6
        ? console.log('오전 새벽입니다.')
        : console.log('오전입니다.')
    : now >= 13 && now <= 19
    ? console.log('오후입니다.')
    : console.log('오후 밤입니다.');
