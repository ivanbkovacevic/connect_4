import React, { Component } from 'react';

class ScoreBoard extends Component {
    render() {
        return (
            <div className='semafor'>
                <span>ŽUTI<button className='button-win'>{this.props.scoreY}</button>   </span> 
                <span>CRVENI<button className='button-win'>{this.props.scoreR}</button>   </span>
                <span> <button className='button-newGame' onClick={this.props.clicked}>NEW GAME</button></span>
            </div>
        );
    }
}

export default ScoreBoard;