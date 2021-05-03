import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Homepage from './components/Homepage';

function App() {

  return (
    <div className="App">
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route exact path="/:page?" render={props => <Navbar {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
