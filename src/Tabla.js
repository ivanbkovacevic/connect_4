import React, { Component } from 'react';


class Tabla extends Component {

    render() {
        let classN='coin-neutral';
        if(this.props.v===1){
            classN='coin-yellow';
        }else if(this.props.v===2){
            classN='coin-red';
        }

        return ( 
             
                 
                    <div className={classN} onClick={this.props.clicked}>
                   
                       v={this.props.v} x={this.props.x} y={this.props.y} 
                    </div>   
             
        );
    }
}

export default Tabla;