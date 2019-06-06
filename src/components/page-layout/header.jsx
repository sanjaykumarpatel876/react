// @flow
import React, { Component } from 'react';
export default class Header extends Component{

    render(){

        return(
            
            <header className="header">
                <div className="page-brand">
                    <a className="link" href="#">
                        <span className="brand">IWC
                            <span className="brand-tip">&nbsp;SCHAFFHAUSEN</span>
                        </span>
                        
                    </a>
                </div>
                <div className="flexbox flex-1">
                    
                </div>
            </header>
        
        );
    }
} 