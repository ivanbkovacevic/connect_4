import React, { Component } from 'react';
import './css/connect_4.css';
import Vertical0 from './Vertical0';
import Vertical1 from './Vertical1';
import Vertical2 from './Vertical2';
import Vertical3 from './Vertical3';
import Vertical4 from './Vertical4';
import Vertical5 from './Vertical5';
import Vertical6 from './Vertical6';
import Vertikala from './Vertikala';

class App extends Component {

  state = {
    change: true,
    cId: 0,
    winY: 4,
    winR: 8,
    message: '',
    coin: { id: 0, value: 4 },
    board:[[{id:0,value:0}]],
    v_0_arr: [{ id: 0, value: 0 }],
    v_1_arr: [{ id: 0, value: 1 }],
    v_2_arr: [{ id: 0, value: 2 }],
    v_3_arr: [{ id: 0, value: 3 }],
    v_4_arr: [{ id: 0, value: 4 }],
    v_5_arr: [{ id: 0, value: 5 }],
    v_6_arr: [{ id: 0, value: 6 }],

  }

  gameStart=()=>{
    let {board}=this.state;
    board=board.slice();
    let vertikala=[];

    for(let i=0; i<7;i++){
    
      board.push(vertikala);
      this.setState({board});
    }
    
  }



  // v_0 = (i) => {
  //   let { v_0_arr, change, coin, cId,message } = this.state;
  //   change = !change;
  //   cId++;
  //   coin = { ...coin };
  //   coin.id = cId;
  //   if (change === true) {
  //     coin.value = 2;
  //   } else {
  //     coin.value = 1;
  //   }
  //   v_0_arr = v_0_arr.slice();
  //   let vLen = v_0_arr.length;

  //   if (vLen < 7) {
  //     v_0_arr.push(coin);
  //     this.setState({ v_0_arr, change, coin, cId });
  //   }

  //   let vValue;
  //   for (let i = 3; i < v_0_arr.length; i++) {
  //     let ii = Number(i - 1);

  //     if (v_0_arr.length >= 5) {

  //       let vValue0 = v_0_arr[i].value;
  //       let vValue1 = v_0_arr[i - 1].value;
  //       let vValue2 = v_0_arr[i - 2].value;
  //       let vValue3 = v_0_arr[i - 3].value;
  //       vValue = vValue0 + vValue1 + vValue2 + vValue3;
  //     }

  //   }

  //   if (vValue === 4) {
  //     message = 'ZUTI JE POBEDIO';
  //     this.setState({ message });
  //   } else if (vValue === 8) {

  //     message = 'CRVENI JE POBEDIO';
  //     this.setState({ message });
  //   }
  // }

  dropCoin=(i)=>{
    let {board,coin}=this.state;
    board=board.slice();
    let verticala=board[i].slice();
    i;
   
    verticala.push(coin);
    board.splice(i,1,verticala)
      
       this.setState({board});
      
      }

  render() {
    let { coin } = this.state;
    // let v_0 = null;
    // v_0 = this.state.v_0_arr.map((c, i) => {
    //   return <Vertical0 key={i} coin={c.value} clicked={() => this.v_0(i)} />
    // });

   

/////////////////////////////////
    let vertikala=null;
    vertikala=this.state.board.map((vert,i)=>{
      return <Vertikala key={i} vertikala={vert} clicked={() => this.dropCoin(i)}/>

    })

    return (
      <div className='container-main'>

        {/* <div className='vertical'>
          {v_0}
        </div>
        <div className='vertical'>
          {v_1}
        </div>
        <div className='vertical'>
          {v_2}
        </div>
        <div className='vertical'>
          {v_3}
        </div>
        <div className='vertical'>
          {v_4}
        </div>
        <div className='vertical'>
          {v_5}
        </div>
        <div className='vertical'>
          {v_6}
        </div> */}
        <div className='pobeda'>
          - {this.state.message}
        </div>
        <button onClick={this.gameStart}>START</button>
          /-- {vertikala}
      </div>
    );
  }
}

export default App;
