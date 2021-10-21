import './App.css';
import Footer from './components/utils/Footer/Footer';
import Nav from './components/utils/nav/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/Pages/About/About';
import Services from './components/Pages/Services/Services';
import Home from './components/Pages/Home/Home';
import NotFound from './components/utils/NotFound/NotFound'
import Singin from './components/Pages/SignIn/Singin';
import Doctors from './components/Pages/Doctors/Doctors';
import Dashbord from './components/Pages/Dashbord/Dashbord';

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
          <Route exact path='/SignIn' component={ Singin } />
          <Route exact path='/Find-Doctor' component={ Doctors } />
          <Route exact path='/dashboard' component={ Dashbord } />

          {/* if someone enter some diff routes */}
          <Route component={NotFound} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
