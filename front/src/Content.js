import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from "./Home";
import Workers from "./Workers";
import Places from "./Places";
import Clients from "./Clients";
import Services from "./Services";
import Admin from "./admin";
import Login from "./login";
let Content = ()=>{
    let style = {};
    return (<div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path={"/services"} component={Services}/>
                    <Route exact path={"/clients"} component={Clients}/>
                    <Route exact path={"/places"} component={Places}/>
                    <Route exact path={"/workers"} component={Workers}/>
                    <Route exact path={"/admin"} component={Admin}/>
                    <Route exact path={"/login"} component={Login}/>
                </Switch>
            </BrowserRouter>
    </div>)
}
export default Content;