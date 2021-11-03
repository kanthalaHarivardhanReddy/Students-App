import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/signin">
          <Signin/>
        </Route>
        <Route exact path="/signup">
          <Signup/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
    
    </>
  );
}

export default App;
