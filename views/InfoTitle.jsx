import React from 'react';
import info from "../statics/general/info.json";

export default class InfoTitle extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
    this._proc_strokeColor = this._proc_strokeColor.bind(this);
  }

  _proc_strokeColor(line){
    switch (line) {
      case "BL":
        return ("stroke: blue")
        break;
      case "G":
        return ("stroke: #009245")
        break;
      case "O":
        return ("stroke: #F7931E")
        break;
      case "R":
        return ("stroke: #EF1B2B")
        break;
      case "BR":
        return ("stroke: #754C24")
        break;
      default:
        return ("stroke: black")
        break;
    }
  }

  render(){
    const style={
      infoTitle: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0"
      },
      infoTitleName: {
        position: "absolute",
        right: "0",
        top: "0"
      },
      svg_infoTitle: {
        position: "absolute",
        top: "0",
        left: "0"
      }
    }
    return(
      <div
        style={style.infoTitle}>
        <div
          style={style.infoTitleName}>
          {info[this.props.station].name}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 264 79.28"
          style={style.svg_infoTitle}>
          <defs>
            <style>{".cls-infoStation-1,.cls-infoStation-2{font-size:25.07px;}.cls-infoStation-1{font-family:SourceHanSansTW-Regular-B5pc-H, Source Han Sans TW;}.cls-infoStation-2{font-family:SourceHanSansTW-Normal-B5pc-H, Source Han Sans TW;}.cls-infoStation-3,.cls-infoStation-4{fill:none;stroke-miterlimit:10;}.cls-infoStation-3{"+this._proc_strokeColor(info[this.props.station].line)+";stroke-width:2px;}"}</style>
          </defs>
          <g>
            <text className="cls-infoStation-1" transform="translate(11.17 27.57)">{info[this.props.station].line}</text>
            <text className="cls-infoStation-2" transform="translate(12.17 52.26)">{info[this.props.station].number}</text>
            <rect className="cls-infoStation-3" x="4.46" y="1.08" width="44.16" height="59.19" rx="5.78" ry="5.78" transform="translate(-0.15 0.13) rotate(-0.28)"/>
          </g>
        </svg>
      </div>
    )
  }
}
