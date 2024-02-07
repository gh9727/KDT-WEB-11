// 임시 DB
const comments = [
    {
        id: 1,
        userid: 'hello',
        date: '2024-02-01',
        comments: '안녕하세요',
    },
    {
        id: 2,
        userid: 'happy',
        date: '2024-01-03',
        comments: '반갑습니다',
    },
    {
        id: 3,
        userid: 'lucky',
        date: '2024-02-05',
        comments: '행복하세요',
    },
    {
        id: 4,
        userid: 'fail',
        date: '2024-02-07',
        comments: '축구망했다',
    },
];

// 모듈 export -> 다른 파일에서 접근가능
module.exports = comments;
