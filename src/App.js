import React, { Component } from 'react';
import './css/connect_4.css';
// import Vertical0 from './Vertical0';
// import Vertical1 from './Vertical1';
// import Vertical2 from './Vertical2';
// import Vertical3 from './Vertical3';
// import Vertical4 from './Vertical4';
// import Vertical5 from './Vertical5';
// import Vertical6 from './Vertical6';
import Vertikala from './Vertikala';

class App extends Component {

  state = {
    change: true,
    cId: 0,
    winY: 4,
    winR: 8,
    message: '',
    coin: { id: 0, value: 5 },
    board:[[]],
    v_0_arr: [{ id: 0, value: 0 }],
    v_1_arr: [{ id: 0, value: 1 }],
    v_2_arr: [{ id: 0, value: 2 }],
    v_3_arr: [{ id: 0, value: 3 }],
    v_4_arr: [{ id: 0, value: 4 }],
    v_5_arr: [{ id: 0, value: 5 }],
    v_6_arr: [{ id: 0, value: 6 }],
  }

  gameStart=()=>{   // pocetak igre ... u board ubacuju se 7 praznih vertikala[]
    let {board}=this.state;
    board=board.slice();
    let vertikala=[];

    for(let i=0; i<7;i++){
    
      board.push(vertikala);
      this.setState({board});
    }
    
  }


  dropCoin=(i)=>{                   // ubacivanje coin-a u verticalu i ubacivanje verticale u board
    let {board,coin,change,cId,message}=this.state;
    board=board.slice();
    let verticala=board[i].slice();
    /////////////////////////////////
   
    change = !change;
    cId++;
    coin = { ...coin };
    coin.id = cId;
    if (change === true) {  //  promena boje coina a samim tim i vrednosti coina
      coin.value = 2;
    } else {
      coin.value = 1;
    }
    verticala = verticala.slice();
    let verLen = verticala.length;   // uzimanje duzine verticale

    if (verLen < 7) {
        verticala.push(coin);       // ubacivanje coina u verticalu
        board.splice(i,1,verticala)  // ubacivanje tj zamena kliknute verticale u board
       this.setState({board,verticala,change,cId});
    }

    let verValue;
    for (let i = 3; i < verticala.length; i++) {
    //  let ii = Number(i - 1);

      if (verticala.length >= 4) {

        let verValue0 = verticala[i].value;                       // uzimanje poslednje 4 vrednosti  u verticalama
        let verValue1 = verticala[i - 1].value;
        let verValue2 = verticala[i - 2].value;
        let verValue3 = verticala[i - 3].value;
        verValue = verValue0 + verValue1 + verValue2 + verValue3;   
      }

    }

    if (verValue === 4) {             // proveravanje da li ima crvenih ili zutih coina 4 za redom
      message = 'ZUTI JE POBEDIO';
      this.setState({ message });
    } else if (verValue === 8) {

      message = 'CRVENI JE POBEDIO';
      this.setState({ message });
    }

      }

  render() {
    let vertikala=null;
    vertikala=this.state.board.map((vert,i)=>{
      return <Vertikala key={i} vertikala={vert} clicked={() => this.dropCoin(i)}/>
    })

    return (
      <div className='container-main'>

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
