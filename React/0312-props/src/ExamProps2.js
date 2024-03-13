import './Exam2.css';
import logo from './images.jpg';
const ExamProps2 = ({ title, author, price, type }) => {
  return (
    <div>
      <h1 id="main">이번주 베스트셀러</h1>
      <img src={logo} alt="" />
      <h2 id="title">{title}</h2>
      <div className="css">저자: {author}</div>
      <div className="css">판매가: {price}</div>
      <div className="css">구분: {type}</div>
    </div>
  );
};
export default ExamProps2;

ExamProps2.defaultProps = {
  food: '초밥',
};
