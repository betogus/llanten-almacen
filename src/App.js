import './Styles/App.scss';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'


// VIEWS
import Home from './views/Home/Home'
import About from './views/About/About'
import Contact from './views/Contact/Contact'
import Store from './views/Store/Store';
import Category from './views/Category/Category';

// COMPONENTS
import NavBar from './components/header/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';

const App = () => {
  
  return (
   
      <Router>
      <NavBar />
        <Routes >
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />} />
         
          <Route path='/store' element={<Store />}/>
          <Route path='/category' element={<Category/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        </Routes>
      </Router>
  );
}

export default App;
