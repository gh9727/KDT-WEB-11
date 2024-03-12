import './Exam.css';
import logo from './grass.png';

function Exam() {
  return (
    <div className="container">
      <div className="circle circle1"></div>
      <div className="circle circle2"></div>
      <div className="circle circle3"></div>
      <div className="circle circle4"></div>
      <div className="circle circle5"></div>
      <div className="circle circle6"></div>
      <div className="circle circle7"></div>
      <img src={logo} />
      {/* public img 접근 */}
      <img src="/logo192.png" alt="" />
    </div>
  );
}

export default Exam;
