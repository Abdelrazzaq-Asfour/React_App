import './App.css';
import Header from './header';
import Main from './Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './products';
import Favorites from './favorites';

function App() {
  return (
    <>
      <Header />

<Router>
  <Routes>
  <Route  path="/" Component={Main} ></Route>
  <Route  path="/products" Component={Products} ></Route>
  <Route  path="/favorites" Component={Favorites} ></Route>
  </Routes>
</Router>
    </>
  );
}

export default App;