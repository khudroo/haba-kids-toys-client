import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Explore from "./Pages/Home/Explore/Explore";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
