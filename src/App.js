import React, { Component } from 'react';
import './css/connect_4.css';
import Tabla from './Tabla';
import ScoreBoard from './ScoreBoard';


class App extends Component {

  state = {
    change: true,
    cId: 0,
    winY: 4,
    winR: 8,
    message: '',
    coin: { id: 0, value: 0, x: 0,y: 0},
    y_pos:-1,
    boardMatrix:[],
    xDropedArr:[],
    sirina:7,
    visina:7,

    scoreY:0,
    scoreR:0
  }

  gameStart = () => {   // POCETAK IGRE ... 
    let {  coin,boardMatrix,sirina,visina, xDropedArr } = this.state;
   
   ///////////////////MATRICA///////////////////
   boardMatrix = boardMatrix.slice();
 
   xDropedArr = xDropedArr.slice();
   for (let i = 0; i < visina; i++) {
 
        let y=[];
        let count7=i*7;
        for (let j = 0; j < sirina; j++) {
          let xDroped={value:0};
          xDropedArr.push(xDroped);
          let countAll=j+count7
            coin={id:countAll, value: 0, x: j, y: i};
           y.push(coin);
        }
        boardMatrix.push(y)

   }
       this.setState({boardMatrix,  xDropedArr});
  }


  gameReset = () => {   // RESETOVANJE IGRE ... 
    let {  coin,boardMatrix,sirina,visina, xDropedArr,message } = this.state;
   
   ///////////////////MATRICA///////////////////
   boardMatrix = boardMatrix.slice();
   boardMatrix=[];
 
   xDropedArr = xDropedArr.slice();
   xDropedArr=[];
   message='';
  
   for (let i = 0; i < visina; i++) {
 
        let y=[];
        let count7=i*7;
        for (let j = 0; j < sirina; j++) {
          let xDroped={value:0};
          xDropedArr.push(xDroped);
          let countAll=j+count7
            coin={id:countAll, value: 0, x: j, y: i};
           y.push(coin);
        }
        boardMatrix.push(y)

   }
       this.setState({boardMatrix,xDropedArr,message});
  }

/////////////////////////////////////////////////////////////////////////////////////////////////////
  dropCoin = (i,v,x,y) => {                   //GLAVNA funkcija    ubacivanje coin-a u verticalu i ubacivanje verticale u boardV
    let { boardMatrix, change, message,y_pos,xDropedArr,scoreR,scoreY } = this.state;
    boardMatrix=boardMatrix.slice();    
     
    xDropedArr=xDropedArr.slice();    
    let x_pos=x;     //  trazenje kolone u kojoj je ubacen coin i ubacivanje na dno prv put pa ya jedno mesto gore svaki drugi put
     y_pos=xDropedArr[x_pos].value++;  // slaganje coina u coloni
   
      this.setState({xDropedArr,y_pos});
  
    change = !change;
    let value;
    if (change === true) {  //  switch za promenu boje coina a samim tim i vrednosti coina
      value = 2;
    } else {
      value = 1;
    }

    let lastCoin;
    if(y_pos<7 && message.length===0){
      lastCoin=boardMatrix[y_pos][x_pos].value=value; // konkretna-GLAVNA promena boje u matrici  --JAKO BITNO---
      this.setState({change,boardMatrix,y_pos});
    }
    

 ///////////////////PROVERAVANJE 4 U NIZU VERTIKALE///////////////////////////////////////////
 if(y_pos>2 && y_pos<7){
  let twoInRow=boardMatrix[y_pos-1][x_pos].value;
  let treeInRow=boardMatrix[y_pos-2][x_pos].value;
  let fourInRow=boardMatrix[y_pos-3][x_pos].value;

  if(lastCoin===twoInRow && lastCoin===treeInRow && lastCoin===fourInRow){
    if(lastCoin===1){
      message='ZUTI JE POBEDIO';
      scoreY++;
      this.setState({message,scoreY});
    }else{
      message='CRVENI JE POBEDIO';
      scoreR++;
      this.setState({message,scoreR});
    }
      
  }
 }

  /////////////////// PROVERAVANJE 4 U NIZU HORIZONTALE ///////////////////////////////////////////
  
  if(x_pos>2 && y_pos<7){ /// od levo ka desno
    let horTwoLtoR=boardMatrix[y_pos][x_pos-1].value;
    let horTreekLtoR=boardMatrix[y_pos][x_pos-2].value;
    let horFourLtoR=boardMatrix[y_pos][x_pos-3].value;

    if( lastCoin===horTwoLtoR  && lastCoin===horTreekLtoR && lastCoin===horFourLtoR ){
      if(lastCoin===1){
        message='ZUTI JE POBEDIO';
        scoreY++;
        this.setState({message,scoreY});
      }else{
        message='CRVENI JE POBEDIO';
        scoreR++;
      this.setState({message,scoreR});
      }   
    }
  }


  if(x_pos<4 && y_pos<7){ /// od desno ka levo
    let horTwoLtoR=boardMatrix[y_pos][x_pos+1].value;
    let horTreekLtoR=boardMatrix[y_pos][x_pos+2].value;
    let horFourLtoR=boardMatrix[y_pos][x_pos+3].value;

    if( lastCoin===horTwoLtoR  && lastCoin===horTreekLtoR && lastCoin===horFourLtoR ){
      if(lastCoin===1){
        message='ZUTI JE POBEDIO';
        scoreY++;
      this.setState({message,scoreY});
      }else{
        message='CRVENI JE POBEDIO';
        scoreR++;
      this.setState({message,scoreR});
      }   
    }
  }

    /////////////////// PROVERAVANJE 4 U DIJAGONALA OD LEVO KA DESNO -///////////////////////////////////////////
  /// od gore ka dole
    if(x_pos<4 && y_pos<7){ 
      if(y_pos>2){
        let dij_2_downToUpLtoR=boardMatrix[y_pos-1][x_pos+1].value;
        let dij_3_downToUpLtoR=boardMatrix[y_pos-2][x_pos+2].value;
        let dij_4_downToUpLtoR=boardMatrix[y_pos-3][x_pos+3].value;
      
      if( lastCoin===dij_2_downToUpLtoR  && lastCoin===dij_3_downToUpLtoR && lastCoin===dij_4_downToUpLtoR ){
        if(lastCoin===1){
          message='1 ZUTI JE POBEDIO DIJ OD LEVO KA DESNO OD GORE ka DOLE';
          scoreY++;
          this.setState({message,scoreY});
        }else{
          message='1 CRVENI JE POBEDIO DIJ OD LEVO KA DESNO OD GORE ka DOLE';
          scoreR++;
          this.setState({message,scoreR});
        }
        }   
      }
    }

 /// od dole ka gore
 if(x_pos>2){ 
  if(y_pos<4 && y_pos<7){
    let dij_2_UptoDownLtoR=boardMatrix[y_pos+1][x_pos-1].value;
    let dij_3_UptoDownLtoR=boardMatrix[y_pos+2][x_pos-2].value;
    let dij_4_UptoDownLtoR=boardMatrix[y_pos+3][x_pos-3].value;
  
  if( lastCoin===dij_2_UptoDownLtoR  && lastCoin===dij_3_UptoDownLtoR && lastCoin===dij_4_UptoDownLtoR ){
    if(lastCoin===1){
      message='2 ZUTI JE POBEDIO DIJ OD LEVO KA DESNO OD DOLE KA GORE';
      scoreY++;
      this.setState({message,scoreY});
    }else{
      message='2 CRVENI JE POBEDIO DIJ OD LEVO KA DESNO OD DOLE KA GORE';
      scoreR++;
      this.setState({message,scoreR});
    }
    }   
  }
}

    /////////////////// PROVERAVANJE 4 U DIJAGONALA OD DESNO KA LEVO -///////////////////////////////////////////
  /// od dole ka gore
  if(x_pos<4){ 
    if(y_pos<4 && y_pos<7){
      let dij_2_downToUpRtoL=boardMatrix[y_pos+1][x_pos+1].value;
      let dij_3_downToUpRtoL=boardMatrix[y_pos+2][x_pos+2].value;
      let dij_4_downToUpRtoL=boardMatrix[y_pos+3][x_pos+3].value;
    

    if( lastCoin===dij_2_downToUpRtoL  && lastCoin===dij_3_downToUpRtoL && lastCoin===dij_4_downToUpRtoL ){
      if(lastCoin===1){
        message='3 ZUTI JE POBEDIO DIJ OD DESNO KA LEVO OD  DOLE KA GORE';
        scoreY++;
      this.setState({message,scoreY});
      }else{
        message='3 CRVENI JE POBEDIO DIJ OD DESNO KA LEVO OD  DOLE KA GORE';
        scoreR++;
        this.setState({message,scoreR});
      }
      }   
    }
  }

/// od gore ka dole
if(x_pos<4){ 
if(y_pos>2 && y_pos<7){
  let dij_2_UptoDownRtoL=boardMatrix[y_pos-1][x_pos+1].value;
  let dij_3_UptoDownRtoL=boardMatrix[y_pos-2][x_pos+2].value;
  let dij_4_UptoDownRtoL=boardMatrix[y_pos-3][x_pos+3].value;

if( lastCoin===dij_2_UptoDownRtoL  && lastCoin===dij_3_UptoDownRtoL && lastCoin===dij_4_UptoDownRtoL ){
  if(lastCoin===1){
    message='4 ZUTI JE POBEDIO DIJ OD DESNO KA LEVO OD KA GORE DA DOLE';
    scoreY++;
    this.setState({message,scoreY});
  }else{
    message='4 CRVENI JE POBEDIO DIJ OD DESNO KA LEVO OD KA GORE DA DOLE';
    scoreR++;
      this.setState({message,scoreR});
  }
  }   
}
}
 
  
  /////////////////////////////////////POKUSAJ PROVERAVANJA OD JEDNOM//////////////////////////

//  if(x_pos>2 && x_pos<4 ){

//     for(let ix=1;ix<4;ix++ ){
//       ix=Number(ix);
//      let iy=0;
    
//         let twoInRowU=boardMatrix[y_pos-iy][x_pos-ix].value;
//         if(lastCoin===twoInRowU ){
//           let treeInRowU=boardMatrix[y_pos-iy][x_pos-ix].value;
//           if(lastCoin===treeInRowU ){
//             let fourInRowU=boardMatrix[y_pos-iy][x_pos-ix].value;
//             if(lastCoin===fourInRowU){
//               if(lastCoin===1){
//                 message='ZUTI JE POBEDIO';
//                 this.setState({message});
//               }else{
//                 message='CRVENI JE POBEDIO';
//                 this.setState({message});
//               }   
//             }
//           }
//       }
//     }  
//  }
   
  
 
  }

  render() {
    let {boardMatrix,scoreR,scoreY}=this.state;
    boardMatrix=boardMatrix.slice();
    boardMatrix=boardMatrix.reverse();
    let tabla = [];
    for (let i in boardMatrix) {
      for (let j in boardMatrix[i]){
        let v=boardMatrix[i][j].value;
        let x=boardMatrix[i][j].x;
        let y=boardMatrix[i][j].y;
        let id=boardMatrix[i][j].id;
        tabla.push( <Tabla key={i+j} x={x} y={y} v={v} id={id} clicked={() => this.dropCoin(i,v,x,y)} />
        
        )} 
 }
  
    return (
      <div className='container-main'>
      <ScoreBoard scoreY={scoreY} scoreR={scoreR} />
        <div className='pobeda'>
          - {this.state.message}
        </div>
        <button onClick={this.gameStart}>START</button>
        <button onClick={this.gameReset}>RESET</button>
         {tabla}
      </div>
    );
  }
}

export default App;
