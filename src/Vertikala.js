import React, { Component } from 'react';
import Field from './Field';

class Vertikala extends Component {


    render() {
        let field=this.props.vertikala.map((field,i)=>{
            return <div key={i}>{field.value}</div>
        })
        return (
           
             <div className='vertical' onClick={this.props.clicked}>
                 {field}
            </div>
        );
    }
}

export default Vertikala;