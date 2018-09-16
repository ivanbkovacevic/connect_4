import React, { Component } from 'react';
import './css/connect_4.css';
import Field from './Field';

class Vertical0 extends Component {

    render() {

        let coinValue=this.props.coin;
        let coinClass;
        if(coinValue===1){
            coinClass='coin-yellow';
        }else if(coinValue===2){
            coinClass='coin-red';
        }else{
            coinClass='coin-neutral';
        }
      
        return (
            <ul className='list' onClick={this.props.clicked}>
            <Field coinClass={coinClass} coinValue={coinValue}/>
            </ul>
        );
    }
}

export default Vertical0;