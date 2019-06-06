import React, { Component } from 'react';
import Header from "./components/page-layout/header";
import Leftsidebar from "./components/page-layout/leftsidebar";
import Home from "./components/pages/home";
import Footer from "./components/page-layout/footer";
import Login from "./components/pages/login";
import { Router, Route, Link, browserHistory, IndexRoute, BrowserRouter,Switch } from 'react-router-dom';
import Loader from './components/page-layout/loader';

export default class Routes extends Component {

    render() {
        return (
            <BrowserRouter> 
            <Switch>
                <Route exact={true} path='/' render={() => (
                    <div class="page-wrapper">       
                        <Header />
                        <Leftsidebar />
                        <div class="content-wrapper">
                            <div class="py-3"></div>
                            <div class="page-heading">
                                <h1 class="page-title">Dashboard</h1>
                                
                            </div>
                            <Home />
                        <Footer />
                        </div>
                        <Loader />
                    </div>
                    
                )}/>

                <Route exact={true} path='/login' render={() => (
                    <div className="Container">
                        <Login />                   
                    </div>
                )}/>
            
            </Switch>                            
            </BrowserRouter>
        );
    }
}