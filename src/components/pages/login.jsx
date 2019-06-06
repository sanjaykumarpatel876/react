// @flow
import React, { Component } from 'react';
import {PostData} from '../../services/postData';
import {Redirect} from 'react-router-dom';
export default class Login extends Component{
    
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            loginerror:'',
            redirect:false
        }
        this.Login = this.Login.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    Login(){
        if(this.state.username && this.state.password){
            PostData('login.php',this.state).then((result) =>{
                let responseJson = result;
                console.log(responseJson);
                if(responseJson.status == '200' && responseJson.userData){
                    sessionStorage.setItem('userData', responseJson);
                    this.setState({redirect:true});
                }else{
                    this.setState({loginerror: responseJson.message});
                    console.log("Login Error");
                }
            });
        }
        
    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    render(){
        if(this.state.redirect){
            return (<Redirect to={'/'} />)
        }
        if(sessionStorage.getItem("userData")){
            return (<Redirect to={'/'} />)
        }   
        return(
            <div className="page-content nopadding login-page">
		        <div className="row">
                    <div className="col-md-3 offset-md-1">
					    <div className="brand">
                           <a className="link" href="index.html"><img src="/img/inspify_logo.png" alt="A loginimage" /></a>
                        </div>
                        <div className="error">{this.state.loginerror}</div>
                        <form id="login-form" action="javascript:;" method="post">
                            <div className="form-group">
                                <label>Username</label>
                                <div className="input-group-icon right">
                                    <div className="input-icon"><i className="fa fa-user"></i></div>
                                    <input className="form-control" type="text" name="username" placeholder="Enter username" onChange={this.onChange} />
                                </div>
                            </div>
                            <div className="py-2"></div>
                            <div className="form-group">
                                <label>Password</label>
                                <div className="input-group-icon right">
                                    <div className="input-icon"><i className="fa fa-lock font-16"></i></div>
                                    <input className="form-control" type="password" name="password" placeholder="Password" onChange={this.onChange} />
                                </div>
                            </div>
                            <div className="py-1">&nbsp;</div>
                            <div className="form-group d-flex justify-content-between">
                                <label>
                                    <button className="btn btn-info btn-black button" type="submit" onClick={this.Login}>Login</button></label>
                                <a href="forgot_password.html">Forgot password?</a>
                            </div>
                        </form>
	                </div>
					<div className="col-md-8 nopadding loginsidenav">
                        <div className="loginbgimage"></div>						
					</div>
		        </div>
            </div>
        );
    }
} 