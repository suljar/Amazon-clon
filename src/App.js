import './App.css';
import Home from './components/./HomePage/HomePage';
import Header from "./components/partials/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Checkout from "./Checkout";
// import Login from "./Login";


export default function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          {/* <Route path="/login">
            <Login />
          </Route> */}
          <Route path="/checkout">
            <Header />
            {/* <Checkout /> */}
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}