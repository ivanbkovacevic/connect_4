import React, { Component } from 'react';
import './css/connect_4.css';
import Field from './Field';

class Vertical6 extends Component {

    render() {
        let coin=this.props.coin;
        let inCoin;
        coin===1 ? inCoin='coin-yellow' : inCoin='coin-red';
        
        return (
            <div onClick={this.props.clicked}>
            <ul ><Field inCoin={inCoin}/></ul>
            </div>
        );
    }
}

export default Vertical6;