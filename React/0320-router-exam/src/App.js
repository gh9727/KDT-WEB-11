import MainPage from './pages/MainPage';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudentPage from './pages/StudentPage';
import StudentQueryPage from './pages/StudentQueryPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="student/:name" element={<StudentPage />}></Route>
          <Route
            path="studentQuery/:name"
            element={<StudentQueryPage />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
