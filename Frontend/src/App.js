import './App.css';
import Footer from './components/utils/Footer/Footer';
import Nav from './components/utils/nav/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/Pages/About/About';
import Services from './components/Pages/Services/Services';
import Home from './components/Pages/Home/Home';
import NotFound from './components/utils/NotFound/NotFound'
import Signin from './components/Pages/SignIn/Signin';
import Doctors from './components/Pages/Doctors/Doctors';
import Dashbord from './components/Pages/Dashbord/Dashbord';
import Signup_doctor from './components/Pages/Signup_doctor/Signup_dr';
import signup_patient from './components/Pages/SignUp_patient/signup_patient';
import Alert from './components/utils/Alertbox/Alert.jsx';
import React, { useState } from "react";




function App() {
  const [alert, setalert] = useState({ type:"", msg:"" })
  return (
    <Router>
      <div className="App">
        <Nav />
        <Alert alert={alert}/>
        {/* all the Routes  */}
        <Switch>
          <Route exact path="/About" component={About}/>
          <Route exact path="/Services" component={Services}/>
          <Route exact path='/' component={ Home } />
          <Route exact path='/SignIn' component={ Signin } />
          <Route path="/Signup_Doctor">
                <Signup_doctor  setalert={setalert}/>
              </Route>
          <Route exact path='/Signup_patient' component={ signup_patient} />
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
