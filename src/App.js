import './App.css';
import Navbar from './components/Navbar';
import { Redirect, Route, Switch } from "react-router-dom";

export default function App() {

  return (
    <div className="App">
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route exact path="/:page?" render={props => <Navbar {...props} />} />
      </Switch>
    </div>
  );
}

