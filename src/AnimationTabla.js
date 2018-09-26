import React, { Component } from 'react';

class AnimationTabla extends Component {
    state = {
        AnimationTabla: [],
        dropedHeight:700,
        coinAnimated:0,
         style:{
             color: 'white',
            height: '14%',
            width: '14%',
            border: '1px solid white',
            backgroundColor:'red',
            position: "absolute",
            animation: 'drop 1s forwards',
            },
        
    }

    // dropCoinAnimation = () => {
    //     let { AnimationTabla,dropedHeight,coinAnimated,style,keyframes } = this.state;
    //     AnimationTabla = AnimationTabla.slice();
       
    //     dropedHeight=dropedHeight-100;
    
      
    //     let styleSheet = document.styleSheets[0];
    //     style={
    //         color: 'white',
    //        height: '14%',
    //        width: '14%',
    //        border: '1px solid white',
    //        backgroundColor:'red',
    //        position: "absolute",
    //        animation: 'drop 1s forwards',
    //        };
        
    //     keyframes = `y
    //     @keyframes drop {
    //       0%   { transform:translateY(0%); }
    //       100% { transform:translateY(${dropedHeight}%); }
    //     }
    //   `;
    //     styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    //     coinAnimated=(<div style={style}></div>);
    //     AnimationTabla.push(coinAnimated);
    //     this.setState({ AnimationTabla,dropedHeight,coinAnimated,style });
    // }

    render() {
     
        let { AnimationTabla,dropedHeight,style } = this.state;
        let animTabla = AnimationTabla.map((coin,i) => {
            return coin
        })

        let classN = '';
        if (this.props.v === 1) {
            classN = 'coin-yellow';
        } else if (this.props.v === 2) {
            classN = 'coin-red';
        }

        return (
            <div style={{ position: 'relative', border: '1px solid white', height: 700 }}
            onClick={this.dropCoinAnimation}>
                {animTabla}
            </div>

        );
    }
}

export default AnimationTabla;