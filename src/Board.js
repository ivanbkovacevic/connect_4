import React, { Component } from 'react';
import Field from './Field';

class Board extends Component {

    state={
        value:0,
        board:this.props.board
    }

coinDrop=(id)=>{
    let {value,board}=this.state;
     board=board.slice();
    console.log(id)
   let next=0;
        for(let i in board){
            if(id===board[i].id){
                board[i].value=1;
               this.setState({board}); 
            }
           next=i+1; 
        if(board[i].value === board[1].value ){
            console.log('dva u niyu')
        }

    }

}

    render() {
         let board=this.state.board;
           board=board.slice();
        let boardRev=board.reverse();
         let boardPrint=boardRev.map((field,i)=>{
            
            return <Field key={i} value={field.value} x={field.x} y={field.y} clicked={()=>this.coinDrop(field.id)} />
        })
        return (
           
             <div className='vertical' onClick={this.props.clicked}>
                 {boardPrint}
            </div>
        );
    }
}

export default Board;