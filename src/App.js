import React, { Component } from 'react';
import './css/connect_4.css';
import Vertikala from './Vertikala';

class App extends Component {

  state = {
    change: true,
    cId: 0,
    winY: 4,
    winR: 8,
    message: '',
    coin: { id: 0, value: 0 },
    boardV: [[]],
    boardH: [[]],
    boardFull: [
      [], [], [], []
    ]

  }

  gameStart = () => {   // pocetak igre ... u board ubacuju se 7 praznih vertikala[]
    let { boardV, boardH, boardFull, coin } = this.state;
    boardV = boardV.slice();
    let vertikala = [];

    for (let i = 0; i < 7; i++) {

      boardV.push(vertikala);
      this.setState({ boardV });  // pravljenje verticala
    }

    ///////////////////////////////////////
    boardH = boardH.slice();
    let horizontala = [];

    for (let i = 0; i < 7; i++) {

      boardH.push(horizontala);
      this.setState({ boardH });   // pravljenje horizontala
    }
    ////////////////////////////BOARD FULL ////////////

    boardFull = boardFull.slice();

    for (let i = 0; i < 4; i++) {
      let pravac = [];
      boardFull[i] = pravac;   //pravci
      for (let j = 0; j < 7; j++) {
        let niz = [];
        boardFull[i][j] = niz;  //nizovi
          this.setState({ boardFull });  // pravljenje cele table...ubacivanjem nultog coina
      }
    }
  }


  dropCoin = (i) => {                   //GLAVNA funkcija    ubacivanje coin-a u verticalu i ubacivanje verticale u boardV
    let { boardV, boardH, boardFull, coin, change, cId, message } = this.state;
    boardV = boardV.slice();
    let verticala = boardV[i].slice();
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
      boardV.splice(i, 1, verticala)  // ubacivanje tj zamena stare verticale, kliknutom verticalom u boardV
      this.setState({ boardV, verticala, change, cId });
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

    // if (verValue === 4) {             // proveravanje da li ima crvenih ili zutih coina 4 za redom
    //   message = 'ZUTI JE POBEDIO';
    //   this.setState({ message });
    // } else if (verValue === 8) {

    //   message = 'CRVENI JE POBEDIO';
    //   this.setState({ message });
    // }
    /////////////////////////HORIZONTALE///////////////////
    //prvo treba da se odredi na u koje sve horizontale pada coin a to je lako pomocu 'i' od verticala  ... 
    boardH = boardH.slice();
    let horizontala = boardH[i].slice();
    horizontala.push(coin);
    boardH.splice(i, 1, horizontala)
    this.setState({ boardH, horizontala });
    //drugo treba da se odredi da li ima 4 u nizu po horizontali...a to cemo da uradimo tako sto cemo da poredimo vrednosti na istim indexima u nizu horizontala
    boardH = boardH.slice();
    let horzValue;

    for (let i = 0; i < boardH.length; i++) {

      for (let j = 0; j < boardH[i].length; j++) {
        let ix = i + 1;
        let ixx = i + 2;
        let ixxx = i + 3;



        // let horzValue0=boardH[i][j].value;
        // let horzValue1=boardH[ix][j].value;
        // let horzValue2=boardH[ixx][j].value;
        // let horzValue3=boardH[ixxx][j].value;

        // horzValue=horzValue0+horzValue1+horzValue2+horzValue3;

      }
    }
    // if (horzValue === 4) {
    //   message = 'ZUTI JE POBEDIO';
    //   this.setState({ message });
    // } else if (horzValue === 8) {
    //   message = 'CRVENI JE POBEDIO';
    //   this.setState({ message });
    // }
    //////////////////////////////////board full////////////////////////////

    boardFull = boardFull.slice();   // ubacivanje coina u verticale
     let vPos=boardFull[0][i].length;
     if(vPos <= 6){
      boardFull[0][i][vPos]=coin;
      this.setState({ boardFull });
     }

     let winNizVer=0;
     for(let k=3;k<boardFull[0][i].length;k++ ){ //Proveravanje da li su 4 ista yaredom u verticalama
      if ( boardFull[0][i].length >= 4) {
     let winNizVer0= boardFull[0][i][k].value;
     let winNizVer1= boardFull[0][i][k-1].value;
     let winNizVer2= boardFull[0][i][k-2].value;
     let winNizVer3= boardFull[0][i][k-3].value;
     winNizVer=winNizVer0+winNizVer1+winNizVer2+winNizVer3;
     }

     if (winNizVer === 4) {
      message = 'ZUTI JE POBEDIO';
      this.setState({ message });
    } else if (winNizVer === 8) {
      message = 'CRVENI JE POBEDIO';
      this.setState({ message });
    }
  }
                                   
    /////////////////////////// ubacivanje coina u horizontale
     boardFull[1][i][vPos]=coin;  
     let pravac=boardFull[1];
     let niz=pravac[i];

     
     let winNizHor=0;
     for(let k=3;k<niz.length;k++ ){ //Proveravanje da li su 4 ista zaredom u horizontalama 
    
      if ( niz.length >= 4) {
       
     let winNizHor0= niz[k].value;
     let winNizHor1= niz[k-1].value;
     let winNizHor2= niz[k-2].value;
     let winNizHor3= niz[k-3].value;
     winNizHor=winNizHor0+winNizHor1+winNizHor2+winNizHor3;
       
     }

     if (winNizHor === 4) {
      message = 'ZUTI JE POBEDIO';
      this.setState({ message });
    } else if (winNizHor === 8) {
      message = 'CRVENI JE POBEDIO';
      this.setState({ message });
    }
  }
     
     
     
     



      

  }

  render() {
    let vertikala = null;
    vertikala = this.state.boardV.map((vert, i) => {
      return <Vertikala key={i} vertikala={vert} clicked={() => this.dropCoin(i)} />
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
