import './App.css'
import AddProducts from './Components/AddProducts';
import Cart from './Components/Cart';
import Head from './Components/Head';
import ShowProducts from './Components/ShowProducts';

function App() {
  return (
    <div className="App">
      <Head/>
      <Cart/>
      <AddProducts/>
      <ShowProducts/>
    </div>
  );
}

export default App;
