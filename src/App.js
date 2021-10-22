import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Main from "./pages/main";
import Login from "./pages/login";
import Register from "./pages/register";
import Profile from "./pages/profile";

import links from "./resources/links";

import UserContext from "./contexts/userContext";

import useUser from "./storage/userStorage";

function App() {
  const [user, setUser] = useUser();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Switch>
          <Route path={links.login.path}>
            <Login />
          </Route>
          <Route path={links.register.path}>
            <Register />
          </Route>
          <Route path={links.profile.path}>
            <Profile />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
