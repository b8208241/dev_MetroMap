import React from 'react';
import chart from "../statics/chart.json";
import Station from './Station.jsx';

export default class Graph extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  componentDidMount(){

  }

  render(){
    let {_handleState_Focus} = this.props;
    let stations = chart.data.map(function(obj, index){
      let rank = obj["rank"];
      let x = chart.rankList[rank-1]['x']
      let y = chart.rankList[rank-1]['y']
      return <Station
        key={"key_"+obj["position"]+"_"+obj["rank"]}
        coordinate={{"x": x, "y": y}}
        position={obj["position"]}
        line={obj["line"]}
        name={obj["name"]}
        number={obj["number"]}
        _handleState_Focus={_handleState_Focus}/>
    })
    return(
      <div
        style={{
          width: "100%",
          position: "absolute",
          top: "5%"
        }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="100%"
          height="87%"
          viewBox="0 0 1190 990"
          preserveAspectRatio="xMidYMid"
          >
          {stations}
        </svg>
      </div>
    )
  }
}
