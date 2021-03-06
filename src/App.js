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
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Register from "./Pages/Register/Register";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import DashBoard from "./Pages/DashBoard/DashBoard/DashBoard";
import PrivetRoute from "./Pages/Login/PrivetRoute/PrivetRoute";
import Purchase from "./Pages/Purchase/Purchase";


function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <PrivetRoute path="/purchase/:id">
                <Purchase />
            </PrivetRoute>

            <PrivetRoute path="/dashboard">
              <DashBoard />
            </PrivetRoute>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
