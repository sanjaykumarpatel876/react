import React, { Component } from 'react';
export default class Loader extends Component{

    render(){

        return(
            <div>
                <div className="sidenav-backdrop backdrop"></div>
                <div className="preloader-backdrop">
                    <div className="page-preloader">Loading</div>
                </div>
            </div>
        );
    }
} 