import React from 'react';
import info from "../statics/general/info.json";

export default class StationInfo extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render(){
    const style={
      stationInfo: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0%"
      }
    }
    return(
      <div
        style={style.stationInfo}>
        <table>
          <tbody>
            <tr>
              <td><sapn>日均進出排名:  </sapn></td>
              <td><span>{String(info[this.props.station].rank)}</span></td>
            </tr>
            <tr>
              <td><span>日均進出人數: </span></td>
              <td><span>{String(info[this.props.station].avg_usage)}</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
