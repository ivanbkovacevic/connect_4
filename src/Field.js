import React, { Component } from 'react';
import './css/connect_4.css';

class Field extends Component {

    render() {
        let clName='';
        this.props.value===1 ? clName='coin-yellow' : clName='coin-red'
        return (
            <div className={clName}>{this.props.value}</div>
        );
    }
}

export default Field;