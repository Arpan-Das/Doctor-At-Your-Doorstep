import './App.css';
import Footer from './components/utils/Footer/Footer';
import Nav from './components/utils/nav/Nav';
import Home from './components/Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Nav/>

      <div className="App_Container">
        <Home/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
