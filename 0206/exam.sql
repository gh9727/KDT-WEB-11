CREATE TABLE user(
	id VARCHAR(10) NOT NULL PRIMARY KEY,
    pw VARCHAR(20) NOT NULL,
    username VARCHAR(5) NOT NULL,
    gender ENUM('F', 'M', '') DEFAULT '',
    birthday DATE NOT NULL,
    age INT(3) NOT NULL DEFAULT 0
);

INSERT INTO user(id, pw, username, gender, birthday, age) values('hong1234','8o4bkg', '홍길동','M','1990-01-31',33);
INSERT INTO user(id, pw, username, gender, birthday, age) values('sexysung','87awjkdf','성춘향','F','1992-03-31',31);
INSERT INTO user(id, pw, username, gender, birthday, age) values('power70','qxur8sda','변사또','M','1970-05-02',53);
INSERT INTO user(id, pw, username, gender, birthday, age) values('hanjo','jk48fn4','한조','M','1984-10-18',39);
INSERT INTO user(id, pw, username, gender, birthday, age) values('widowmaker','38ewifh3','위도우','F','1976-06-27',47);
INSERT INTO user(id, pw, username, gender, birthday, age) values('dvadva','k3f3ah','송하나','F','2001-06-03',22);
INSERT INTO user(id, pw, username, gender, birthday, age) values('jungkrat','4ifha7f','정크랫','M','1999-11-11',24);

SELECT id, pw, username, gender, birthday, age  FROM user;
-- 5.1
SELECT * FROM user
ORDER BY birthday;
-- 5.2	
SELECT * FROM user
where gender = 'M'
ORDER BY username desc;
-- 5.3
SELECT id,username FROM user
WHERE birthday LIKE('%199%');
-- 5.4
SELECT * FROM user
WHERE birthday LIKE('%-06-%')
ORDER BY birthday;
-- 5.5
SELECT * FROM user
WHERE gender = 'M' AND birthday LIKE('%197%');
-- 5.6
SELECT * FROM user 
ORDER BY age desc limit 3;
-- 5.7
SELECT * FROM user
WHERE age between 25 and 50;
-- 5.8
update user set pw = '12345678' WHERE id = 'hong1234';
SELECT id,pw FROM user 
WHERE id = 'hong1234';
-- 5.9
delete from user WHERE id = 'jungkrat';
SELECT id FROM user;