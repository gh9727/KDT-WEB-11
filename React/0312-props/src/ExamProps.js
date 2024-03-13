import './Exam.css';
const ExamProps = ({ food }) => {
  return (
    <h1>
      좋아하는 음식은 <span id="food">{food}</span>
    </h1>
  );
};
export default ExamProps;

ExamProps.defaultProps = {
  food: '초밥',
};
