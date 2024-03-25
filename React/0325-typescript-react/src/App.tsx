import ExamList from './components/ExamList';
import Student from './components/Student';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';

function App() {
  const handleClick = (name: string, grade: number) => {
    console.log(`안녕 나의 이름은 ${name}이고, ${grade}학년이야~`);
  };
  return (
    // <div className="App">
    //   <Student name={'코딩온'} grade={3} part="CS" handleClick={handleClick} />
    //   <Student name={'코딩'} grade={1} handleClick={handleClick} />
    // </div>
    // <div className="App">
    //   <TodoList />
    // </div>
    <div className="App">
      <ExamList />
    </div>
  );
}

export default App;
