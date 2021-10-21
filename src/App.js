import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Login from "./pages/login";
import Main from "./pages/main";
import Register from "./pages/register";

import links from "./resources/links";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={links.login.path}>
          <Login />
        </Route>
        <Route path={links.register.path}>
          <Register />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
