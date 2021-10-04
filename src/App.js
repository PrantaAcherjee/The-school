import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About'
import Error from './Components/Error/Error';
import ServicesTwo from './Components/ServicesTwo/ServicesTwo';
import Faq from './Components/FAQ/Faq';

function App() {
  return (
    <div className="App">
      {/* Router section added  */}

      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/service">
            <ServicesTwo></ServicesTwo>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/faq">
            <Faq></Faq>
          </Route>
          <Route exact path="/*">
            <Error></Error>
          </Route>
        </Switch>
      </BrowserRouter>


    </div>
  );
}

export default App;
