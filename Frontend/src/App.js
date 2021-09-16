import './App.css';
import Footer from './components/utils/Footer/Footer';
import Nav from './components/utils/nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>

      <div className="App_Container">
        this is your home page section
      </div>

      <Footer/>
    </div>
  );
}

export default App;
