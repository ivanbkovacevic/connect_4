import React, { Component } from 'react';
import './css/connect_4.css';

class Field extends Component {

    render() {
        let clName='';
        if(this.props.value===1){
            clName='coin-yellow';
        }else if(this.props.value===2){
            clName='coin-red';
        }
       
        return (
            <div className={clName} onClick={this.props.clicked}>
            {this.props.value}-{this.props.x}-{this.props.y}</div>
        );
    }
}

export default Field;