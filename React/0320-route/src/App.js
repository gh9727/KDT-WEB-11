import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import MainPage from './pages/MainPage';
import ProductDetailPage from './pages/MainPage';
import Header from './component/Header';
import StudentHeader from './pages/StudentHeader';
import StudentDetail from './pages/StudentDetail';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setProducts(res.data.slice(0, 10));
    console.log('products', res.data.slice(0, 10));
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route
            path="/products"
            element={<ProductPage products={products} />}
          ></Route>
          <Route
            path="/products/:productid"
            element={<ProductDetailPage products={products} />}
          ></Route>
          {/* 실습 내용 추가 */}
          <Route path="/student/" element={<StudentHeader />}></Route>
          <Route path="/student/:name" element={<StudentDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
