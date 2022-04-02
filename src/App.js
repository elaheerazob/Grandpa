import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import OrderReview from './Component/OrderReview/OrderReview';
import Header from './Component/Header/Header';
import Grandpa from './Component/Grandpa/Grandpa';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/orderreview' element={<OrderReview></OrderReview>}></Route>
        <Route path='/grandpa' element={<Grandpa></Grandpa>}></Route>
      </Routes>
    </div>
  );
}

export default App;
