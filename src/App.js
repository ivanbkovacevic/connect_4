import React, { Component } from 'react';
import './css/connect_4.css';
import Tabla from './Tabla';


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
    visina:7
  }

  gameStart = () => {   // pocetak igre ... 
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

/////////////////////////////////////////////////////////////////////////////////////////////////////
  dropCoin = (i,v,x,y) => {                   //GLAVNA funkcija    ubacivanje coin-a u verticalu i ubacivanje verticale u boardV
    let { boardMatrix, coin, change, message,y_pos,sirina,xDropedArr } = this.state;
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

    let lastCoin=boardMatrix[y_pos][x_pos].value=value; // konkretna-GLAVNA promena boje u matrici
   
   this.setState({change,boardMatrix,y_pos});
 ///////////////////PROVERAVANJE 4 U NIZU VERTIKALE///////////////////////////////////////////
 if(y_pos>2){
  let twoInRow=boardMatrix[y_pos-1][x_pos].value;
  let treeInRow=boardMatrix[y_pos-2][x_pos].value;
  let fourInRow=boardMatrix[y_pos-3][x_pos].value;


  if(lastCoin===twoInRow && lastCoin===treeInRow && lastCoin===fourInRow){
    if(lastCoin===1){
      message='ZUTI JE POBEDIO';
      this.setState({message});
    }else{
      message='CRVENI JE POBEDIO';
      this.setState({message});
    }
      
  }
 }

  /////////////////// PROVERAVANJE 4 U NIZU HORIZONTALE ///////////////////////////////////////////
  
  if(x_pos>2){ /// od levo ka desno
    let horTwoLtoR=boardMatrix[y_pos][x_pos-1].value;
    let horTreekLtoR=boardMatrix[y_pos][x_pos-2].value;
    let horFourLtoR=boardMatrix[y_pos][x_pos-3].value;

    if( lastCoin===horTwoLtoR  && lastCoin===horTreekLtoR && lastCoin===horFourLtoR ){
      if(lastCoin===1){
        message='ZUTI JE POBEDIO';
        this.setState({message});
      }else{
        message='CRVENI JE POBEDIO';
        this.setState({message});
      }   
    }
  }


  if(x_pos<4){ /// od levo ka desno
    let horTwoLtoR=boardMatrix[y_pos][x_pos+1].value;
    let horTreekLtoR=boardMatrix[y_pos][x_pos+2].value;
    let horFourLtoR=boardMatrix[y_pos][x_pos+3].value;

    if( lastCoin===horTwoLtoR  && lastCoin===horTreekLtoR && lastCoin===horFourLtoR ){
      if(lastCoin===1){
        message='ZUTI JE POBEDIO';
        this.setState({message});
      }else{
        message='CRVENI JE POBEDIO';
        this.setState({message});
      }   
    }
  }
 
  
  
 
   
  
 
  }

  render() {
    let {boardMatrix}=this.state;
    boardMatrix=boardMatrix.slice();
    boardMatrix=boardMatrix.reverse();
    let tabla = [];
    for (let i in boardMatrix) {
      for (let j in boardMatrix[i]){
        let v=boardMatrix[i][j].value;
        let x=boardMatrix[i][j].x;
        let y=boardMatrix[i][j].y;
        tabla.push( <Tabla key={i+j} x={x} y={y} v={v} clicked={() => this.dropCoin(i,v,x,y)} />
        
        )} 
 }
  
    return (
      <div className='container-main'>
        <div className='pobeda'>
          - {this.state.message}
        </div>
        <button onClick={this.gameStart}>START</button>
         {tabla}
      </div>
    );
  }
}

export default App;
