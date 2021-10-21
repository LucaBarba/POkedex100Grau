import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Navbar from "./components/navbar";

import Login from "./pages/login";
import Main from "./pages/main";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
