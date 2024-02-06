-- INNER JOIN 실습 --------------------------------------------------------------
CREATE TABLE customer(
    id VARCHAR(20) NOT NULL PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    birthday DATE NOT NULL
); 
INSERT INTO customer(id, name, birthday) values
('aaa','홍길동','1990-03-17'),
('bbb','성춘향','1992-02-06'),
('ccc','이몽룡','1991-05-13');

CREATE TABLE orderlist(
    id INT AUTO_INCREMENT NOT NULL PRIMARY,
    customer_id VARCHAR(20) NOT NULL,
    product_name VARCHAR(20) NOT NULL,
    quantity INT,
    FOREIGN KEY (customer_id) REFERENCES customer(id) ON DELETE CASCADE
);
INSERT INTO orderlist(customer_id, product_name, quantity) VALUES
('aaa','맥북 프로',1),
('bbb','모니터',10),
('ccc','키보드',3),
('bbb','핸드폰',2),
('ccc','마우스',10);

SELECT a.id as order_id, a.name, b.product_name FROM customer as a INNER JOIN orderlist as b
ON a.id = b.customer_id
WHERE b.quantity >= 5; 



-- Left/Right Outer JOIN 실습 --------------------------------------------------------------
CREATE TABLE department(
    department_id INT PRIMARY KEY,
    department_name VARCHAR(255) NOT NULL
);

DROP TABLE employes;
CREATE TABLE employes(
    employes_id INT PRIMARY KEY,
    username VARCHAR(31) NOT NULL,
    department_id INT,
    FOREIGN KEY(department_id) REFERENCES department(department_id)
);

INSERT INTO department(department_id, department_name) VALUES
(1,'기획팀'),
(2,'IT개발팀'),
(3,'디자인팀');

INSERT INTO employes(employes_id,username,department_id) VALUES 
(1,'홍길동',2),
(2,'성춘향',3),
(3,'이몽룡', NULL),
(4,'임꺽정',2),
(5,'황진이',3);