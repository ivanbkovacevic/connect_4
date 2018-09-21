import React, { Component } from 'react';

class ScoreBoard extends Component {
    render() {
        return (
            <div classname='semafor'>
                <span>ZUTI <button className='button-win'>{this.props.scoreY}</button> </span> 
                <span>CRVENI <button className='button-win'>{this.props.scoreR}</button></span>
            </div>
        );
    }
}

export default ScoreBoard;