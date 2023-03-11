import './App.css';
import Main from './Main';
import Book from './Book';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Confirmation from './Confirmation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/book' element={<Book />}></Route>
        <Route path='/confirmation' element={<Confirmation />}></Route>
        <Route path='/' element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
