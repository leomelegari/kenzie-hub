import { useEffect } from "react";
import { useState } from "react";
import { Route, Switch } from "react-router";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";

const Routes = () => {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));

    if (token) {
      return setAuth(true);
    }
  }, [auth]);

  return (
    <Switch>
      <Route exact path="/">
        <Login auth={auth} setAuth={setAuth} />
      </Route>
      <Route path="/signup">
        <Signup auth={auth} />
      </Route>
      <Route path="/dashboard">
        <Dashboard auth={auth} setAuth={setAuth}/>
      </Route>
    </Switch>
  );
};

export default Routes;
