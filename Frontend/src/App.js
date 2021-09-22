import './App.css';
import Footer from './components/utils/Footer/Footer';
import Nav from './components/utils/nav/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/pages/About/About';
import Services from './components/pages/Services/Services';
import Home from './components/pages/Home/Home';
import NotFound from './components/utils/NotFound/NotFound'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        
        {/* all the Routes  */}
        <Switch>
          <Route exact path="/About" component={About}/>
          <Route exact path="/Services" component={Services}/>
          <Route exact path='/' component={ Home } />

          {/* if someone enter some diff routes */}
          <Route component={NotFound} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
