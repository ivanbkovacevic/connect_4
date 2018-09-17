import React, { Component } from 'react';
import Field from './Field';

class Vertikala extends Component {


    render() {
         let verticala=this.props.vertikala;
           verticala=verticala.slice();
        let verticalaRev=verticala.reverse();
         let verticalaPrint=verticalaRev.map((field,i)=>{
            
            return <Field key={i} value={field.value} />
        })
        return (
           
             <div className='vertical' onClick={this.props.clicked}>
                 {verticalaPrint}
            </div>
        );
    }
}

export default Vertikala;