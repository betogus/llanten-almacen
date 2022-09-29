import './Styles/App.scss';
import NavBar from './components/header/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer title='Bienvenido a Llanten Almacen'/>
    </>
  );
}

export default App;
