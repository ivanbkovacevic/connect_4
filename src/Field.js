import React, { Component } from 'react';
import './css/connect_4.css';

class Field extends Component {
    render() {
        return (
            <li className={this.props.inCoin}>1</li>
        );
    }
}

export default Field;