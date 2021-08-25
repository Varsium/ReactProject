import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Store from "./Store";
import Error from "./Error";
import Login from "./Login"
import DashBoard from "./DashBoard";
import Footer from './Footer'
import Header from './Header'
import SideNav from './SideNav'
import Calendar from "./Calendar";

const Router = () => (

  <BrowserRouter>
  <div>
   <Header/>
    <SideNav/> 
    </div>
    <Switch>
      <Route exact path="/" component={DashBoard} />
      <Route exact path="/Login" component={Login} />
      <Route  path="/Store" component={Store} />
      <Route  path="/Calendar" component={Calendar} />
      <Route path="/ /:param" component={Error} />
    </Switch>
    <div>
    <Footer/>
    </div>
  </BrowserRouter>
);

export default Router;
