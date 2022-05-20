import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap//dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Add from './components/Add';
import View from './components/View';

function App() {
  return (
   <>

 <BrowserRouter>
    <Routes>
    
<Route path='/R' exact element={<Register/>}></Route>
<Route path='/' exact element={<Login/>}></Route>
{<Route path='/a' exact element={<Add/>}></Route>}
<Route path='/v' exact element={<View/>}></Route>
    </Routes>
    
    
    </BrowserRouter>

</>
  );
}

export default App;
