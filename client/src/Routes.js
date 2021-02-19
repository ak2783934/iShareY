import { BrowserRouter, Switch, Route } from "react-router-dom";

import Launch from "./components/launch";
import Team from "./components/team";
import Login from "./components/login";
import Signup from "./components/signup";
import AdminRoute from "./backfront/adminroute";
import PrivateRoute from "./backfront/privateroute";
import AdminDashboard from "./components/admindashboard";
import NgoDashboard from "./components/ngodashboard";
import ManageWork from "./components/managework";
import ManageTask from "./components/managetask";
import ManageMsg from "./components/managemsg";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Launch} />
        <Route path="/team" exact component={Team} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
        <AdminRoute path="/adminmanagework" exact component={ManageWork} />
        <AdminRoute path="/adminmanagetask" exact component={ManageTask} />
        <AdminRoute path="/adminmanagemsg" exact component={ManageMsg} />
        <PrivateRoute path="/ngo/dashboard" exact component={NgoDashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
