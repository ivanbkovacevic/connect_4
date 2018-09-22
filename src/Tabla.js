import React, { Component } from 'react';


class Tabla extends Component {

    render() {
        let classN='';
        if(this.props.v===1){
            classN='coin-yellow';
        }else if(this.props.v===2){
            classN='coin-red';
        }

        return (      
                    <div className='coin-neutral'  onClick={this.props.clicked}>
                     <div className={classN}> x{this.props.x} y{this.props.y}</div>
                     
                    </div>   
             
        );
    }
}

export default Tabla;