// @flow
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
export default class Home extends Component {
    constructor(props){
        super(props);
        this.state ={
            redirect:false
        }
    }
    componentWillMount(){
        if(sessionStorage.getItem("userData")){
            console.log("User logged in");
        }else{
            this.setState({redirect:true});
        }
    }
    
    render() {
        if(this.state.redirect){
            return (<Redirect to={'/login'} />)
        }
        return (
            <div className="page-content fade-in-up">
                
                <div className="page-heading">
                    <h3 className="page-title">Top Stories</h3>
                    
                </div>

                
                <div className="row">
                    <div className="col-md-12">
                        <div className="dadhboardscroller">
                            <div className="row">	
                                <div className="col-md-3">
                                
                                    <div className="card-deck">
                                        <div className="card">
                                            <div className="card-header">
                                                
                                                <span className="pull-left text-muted font-13">Instagram</span>
                                            </div>
                                            
                                            
                                            <img className="card-img-top" src="/img/image.png" />
                                            
                                            <div className="card-footer">
                                                <a className="text-info"><i className="fa fa-eye"></i> 2.5k</a> &nbsp; &nbsp;&nbsp;
                                                <a className="text-info"><i className="fa fa-eye"></i> 2.5s</a> &nbsp; &nbsp;&nbsp; 
                                                <a className="text-info"><i className="fa fa-share"></i> 755</a> &nbsp; &nbsp;&nbsp;
                                                
                                            </div>
                                        </div>
                                        
                                    </div>
                                
                                </div>

                                <div className="col-md-3">
                                    <div className="card-deck">
                                        <div className="card">
                                            <div className="card-header">
                                                
                                                <span className="pull-left text-muted font-13">Instagram</span>
                                            </div>
                                            
                                            
                                            <img className="card-img-top" src="/img/image.png" />
                                            
                                            <div className="card-footer">
                                                <a className="text-info"><i className="fa fa-eye"></i> 2.5k</a> &nbsp; &nbsp;&nbsp;
                                                <a className="text-info"><i className="fa fa-eye"></i> 2.5s</a> &nbsp; &nbsp;&nbsp; 
                                                <a className="text-info"><i className="fa fa-share"></i> 755</a> &nbsp; &nbsp;&nbsp;
                                                
                                            </div>
                                        </div>
                                                
                                    </div>
                                
                                </div>

                                <div className="col-md-3">
                                    <div className="card-deck">
                                        <div className="card">
                                            <div className="card-header">
                                                
                                                <span className="pull-left text-muted font-13">Instagram</span>
                                            </div>
                                            
                                            
                                            <img className="card-img-top" src="/img/image.png" />
                                            
                                            <div className="card-footer">
                                                <a className="text-info"><i className="fa fa-eye"></i> 2.5k</a> &nbsp; &nbsp;&nbsp;
                                                <a className="text-info"><i className="fa fa-eye"></i> 2.5s</a> &nbsp; &nbsp;&nbsp; 
                                                <a className="text-info"><i className="fa fa-share"></i> 755</a> &nbsp; &nbsp;&nbsp;
                                                
                                            </div>
                                        </div>
                                                
                                    </div>
                                
                                </div>

                                <div className="col-md-3">
                                    <div className="card-deck">
                                        <div className="card">
                                            <div className="card-header">
                                                
                                                <span className="pull-left text-muted font-13">Instagram</span>
                                            </div>
                                            
                                            
                                            <img className="card-img-top" src="/img/image.png" />
                                            
                                            <div className="card-footer">
                                                <a className="text-info"><i className="fa fa-eye"></i> 2.5k</a> &nbsp; &nbsp;&nbsp;
                                                <a className="text-info"><i className="fa fa-eye"></i> 2.5s</a> &nbsp; &nbsp;&nbsp; 
                                                <a className="text-info"><i className="fa fa-share"></i> 755</a> &nbsp; &nbsp;&nbsp;
                                                
                                            </div>
                                        </div>
                                                
                                    </div>
                                
                                </div>



                            </div>
                        </div>
                    </div>
                </div>


            </div>

        );
    }
} 