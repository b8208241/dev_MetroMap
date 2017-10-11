import React from 'react';
import InfoTitle from './InfoTitle.jsx';
import info from "../statics/general/info.json";

export default class Info extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }


  render(){
    const style={
      component_Info: {
        width: "100%",
        height: "50%",
        position: "absolute",
        top: "10%",
        left: "50%",
        transform: "translate(-50%,0)"
      },
      component_infoTitle: {
        width: "100%",
        height: "18%"
      },
      infoList: {
        width: "100%",
        height: "40%",
        position: "absolute",
        top: "19%"
      }
    }
    return(
      <div
        style={style.component_Info}>
        <div
          style={style.component_infoTitle}>
          <InfoTitle
            station={this.props.station}/>
        </div>
        <div
          style={style.infoList}>
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
      </div>
    )
  }
}
