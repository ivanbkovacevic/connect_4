import React, { Component } from 'react';
import './css/connect_4.css';

class Field extends Component {

    render() {
       
        let coinClass=this.props.coinClass
        return (
            <li className='list' onClick={this.props.clicked}>{this.props.coinValue}<span>&nbsp;</span></li>
        );
    }
}

export default Field;