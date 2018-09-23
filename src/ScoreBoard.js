import React, { Component } from 'react';

class ScoreBoard extends Component {
    render() {
        return (
            <div className='semafor'>
                <div className='playerY'>ŽUTI</div><button className='button-winY'>{this.props.scoreY}</button>
                <div className='playerR'>CRVENI</div><button className='button-winR'>{this.props.scoreR}</button>
                <button className='button-newGame' onClick={this.props.clicked}>NEW GAME</button>
            </div>
        );
    }
}

export default ScoreBoard;