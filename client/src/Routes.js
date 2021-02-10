import { BrowserRouter, Switch, Route } from "react-router-dom";

/* 
TODO: Here we have to make 4 routes 
*1) home {representing the front page of the website }
*2) Team {our page where we have our pictures}
*3) login {login page}
*4) signUp {signup karo}
*/

import Launch from "./components/launch";
import Team from "./components/team";
import Login from "./components/login";
import Signup from "./components/signup";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Launch} />
        <Route path="/team" exact component={Team} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
