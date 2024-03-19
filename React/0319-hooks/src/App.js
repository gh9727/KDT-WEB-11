import './App.css';
import Exam from './component/Exam';
import Faq from './component/Faq';
import Form from './component/Form';
import UseCallBackEx from './component/UseCallBackEx';
import UseMemoEx from './component/UseMemoEx';
import UseReducerEx from './component/UseReducerEx';

function App() {
  return (
    <div className="App">
      {/* <UseMemoEx />
      <hr />
      <UseCallBackEx postId={9} />
      <hr />
      <UseReducerEx />
      <hr />
      <Faq /> */}
      {/* <Form /> */}
      <Exam />
    </div>
  );
}

export default App;
