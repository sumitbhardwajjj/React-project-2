import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Products from './component/products';
import Header from './component/header';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Cart from './component/Cart';
import { Provider } from 'react-redux'
import store from './component/store';

function App() {
  return (
   <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Header/>}/>
      <Route path='/product' element={<Products/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
   </BrowserRouter>
   </Provider>
  );
}

export default App;
