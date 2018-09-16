import React, { Component } from 'react';
import './css/connect_4.css';
import Vertical0 from './Vertical0';
import Vertical1 from './Vertical1';
import Vertical2 from './Vertical2';
import Vertical3 from './Vertical3';
import Vertical4 from './Vertical4';
import Vertical5 from './Vertical5';
import Vertical6 from './Vertical6';

class App extends Component {

  state = {
    change: true,
    cId: 0,
    winY: 4,
    winR: 8,
    message: '',
    coin: { id: 0, value: 0 },
    v_0_arr: [{ id: 0, value: 0 }],
    v_1_arr: [{ id: 0, value: 0 }],
    v_2_arr: [{ id: 0, value: 0 }],
    v_3_arr: [{ id: 0, value: 0 }],
    v_4_arr: [{ id: 0, value: 0 }],
    v_5_arr: [{ id: 0, value: 0 }],
    v_6_arr: [{ id: 0, value: 0 }],

  }

  v_0 = (i) => {
    let { v_0_arr, change, coin, cId,message } = this.state;
    change = !change;
    cId++;
    coin = { ...coin };
    coin.id = cId;
    if (change === true) {
      coin.value = 2;
    } else {
      coin.value = 1;
    }
    v_0_arr = v_0_arr.slice();
    let vLen = v_0_arr.length;

    if (vLen < 7) {
      v_0_arr.push(coin);
      this.setState({ v_0_arr, change, coin, cId });
    }

    let vValue;
    for (let i = 3; i < v_0_arr.length; i++) {
      let ii = Number(i - 1);

      if (v_0_arr.length >= 5) {

        let vValue0 = v_0_arr[i].value;
        let vValue1 = v_0_arr[i - 1].value;
        let vValue2 = v_0_arr[i - 2].value;
        let vValue3 = v_0_arr[i - 3].value;
        vValue = vValue0 + vValue1 + vValue2 + vValue3;
      }

    }

    if (vValue === 4) {
      message = 'ZUTI JE POBEDIO';
      this.setState({ message });
    } else if (vValue === 8) {

      message = 'CRVENI JE POBEDIO';
      this.setState({ message });
    }
  }

  v_1 = (i) => {
    let { v_1_arr, change, coin, cId } = this.state;
    change = !change;
    cId++;
    coin = { ...coin };
    coin.id = cId;
    if (change === true) {
      coin.value = 2;
    } else {
      coin.value = 1;
    }
    v_1_arr = v_1_arr.slice();
    let vLen = v_1_arr.length;

    if (vLen < 7) {
      v_1_arr.push(coin);
      this.setState({ v_1_arr, change, coin, cId });
    }
  }

  v_2 = (i) => {
    let { v_2_arr, change, coin, cId } = this.state;
    change = !change;
    cId++;
    coin = { ...coin };
    coin.id = cId;
    if (change === true) {
      coin.value = 2;
    } else {
      coin.value = 1;
    }
    v_2_arr = v_2_arr.slice();
    let vLen = v_2_arr.length;

    if (vLen < 7) {
      v_2_arr.push(coin);
      this.setState({ v_2_arr, change, coin, cId });
    }
  }

  v_3 = (i) => {
    let { v_3_arr, change, coin, cId } = this.state;
    change = !change;
    cId++;
    coin = { ...coin };
    coin.id = cId;
    if (change === true) {
      coin.value = 2;
    } else {
      coin.value = 1;
    }
    v_3_arr = v_3_arr.slice();
    let vLen = v_3_arr.length;

    if (vLen < 7) {
      v_3_arr.push(coin);
      this.setState({ v_3_arr, change, coin, cId });
    }
  }

  v_4 = (i) => {
    let { v_4_arr, change, coin, cId } = this.state;
    change = !change;
    cId++;
    coin = { ...coin };
    coin.id = cId;
    if (change === true) {
      coin.value = 2;
    } else {
      coin.value = 1;
    }
    v_4_arr = v_4_arr.slice();
    let vLen = v_4_arr.length;

    if (vLen < 7) {
      v_4_arr.push(coin);
      this.setState({ v_4_arr, change, coin, cId });
    }
  }

  v_5 = (i) => {
    let { v_5_arr, change, coin, cId } = this.state;
    change = !change;
    cId++;
    coin = { ...coin };
    coin.id = cId;
    if (change === true) {
      coin.value = 2;
    } else {
      coin.value = 1;
    }
    v_5_arr = v_5_arr.slice();
    let vLen = v_5_arr.length;

    if (vLen < 7) {
      v_5_arr.push(coin);
      this.setState({ v_5_arr, change, coin, cId });
    }
  }

  v_6 = (i) => {
    let { v_6_arr, change, coin, cId } = this.state;
    change = !change;
    cId++;
    coin = { ...coin };
    coin.id = cId;
    if (change === true) {
      coin.value = 2;
    } else {
      coin.value = 1;
    }
    v_6_arr = v_6_arr.slice();
    let vLen = v_6_arr.length;

    if (vLen < 7) {
      v_6_arr.push(coin);
      this.setState({ v_6_arr, change, coin, cId });
    }
  }

  render() {
    let { coin } = this.state;
    let v_0 = null;
    v_0 = this.state.v_0_arr.map((c, i) => {
      return <Vertical0 key={i} coin={c.value} clicked={() => this.v_0(i)} />
    });

    let v_1 = null;
    v_1 = this.state.v_1_arr.map((c, i) => {
      return <Vertical1 key={i} coin={c.value} clicked={() => this.v_1(i)} />
    });

    let v_2 = null;
    v_2 = this.state.v_2_arr.map((c, i) => {
      return <Vertical2 key={i} coin={c.value} clicked={() => this.v_2(i)} />
    });

    let v_3 = null;
    v_3 = this.state.v_3_arr.map((c, i) => {
      return <Vertical3 key={i} coin={c.value} clicked={() => this.v_3(i)} />
    });


    let v_4 = null;
    v_4 = this.state.v_4_arr.map((c, i) => {
      return <Vertical4 key={i} coin={c.value} clicked={() => this.v_4(i)} />
    });

    let v_5 = null;
    v_5 = this.state.v_5_arr.map((c, i) => {
      return <Vertical5 key={i} coin={c.value} clicked={() => this.v_5(i)} />
    });

    let v_6 = null;
    v_6 = this.state.v_6_arr.map((c, i) => {
      return <Vertical6 key={i} coin={c.value} clicked={() => this.v_6(i)} />
    });

    return (
      <div className='container-main'>

        <div className='vertical'>
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
        </div>
        <div className='pobeda'>
          - {this.state.message}
        </div>

      </div>
    );
  }
}

export default App;
