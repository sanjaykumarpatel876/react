// @flow
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
export default class Leftsidebar extends Component{
    constructor(props){
        super(props);
        this.state ={
            redirect:false
        }
    }
    logout(){
        sessionStorage.setItem('userData','');
        sessionStorage.clear();
        this.setState({redirect:true});
    }
    render(){
        if(this.state.redirect){
            return (<Redirect to={'/login'} />)
        }
        return(
           
            <nav className="page-sidebar" id="sidebar">
                <div id="sidebar-collapse">
                    <div className="py-3"></div>
                    <div className="inner-logo admin-block text-center">
                        <div>
                            <img src="/img/innerlogo.png"  />
                        </div>                    
                    </div>				
                    <div className="admin-block text-center">
                        <div className="text-center">
                            <img src="/img/admin-avatar.png" width="45px" />
                        </div>
                        <div className="clearfix"></div>
                        <div className="admin-info">
                            <div className="font-strong">James Brown</div><small>Administrator</small></div>
                    </div>
                    <ul className="side-menu metismenu">
                        <li>
                            <a href="index.html"><i className="sidebar-item-icon fa fa-home"></i>
                                <span className="nav-label">Dashboard</span>
                            </a>
                        </li>
                        
                        
                        
                        <li>
                            <a href="index.html"><i className="sidebar-item-icon fa fa-home"></i>
                                <span className="nav-label">Stories</span>
                            </a>
                        </li>
                        
                        <li>
                            <a href="index.html"><i className="sidebar-item-icon fa fa-home"></i>
                                <span className="nav-label">Products</span>
                            </a>
                        </li>
                       
                        <li>
                            <a href="index.html"><i className="sidebar-item-icon fa fa-home"></i>
                                <span className="nav-label">In-store</span>
                            </a>
                        </li>
                        
                        <li>
                            <a href="javasript:void(0)" onClick={this.logout}><i className="sidebar-item-icon fa fa-home"></i>
                                <span className="nav-label">Logout</span>
                            </a>
                        </li>
                       
                    </ul>
                </div>
            </nav>
            
        );
    }
} 