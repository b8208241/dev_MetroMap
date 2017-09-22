import React from 'react';
import info from "../statics/info.json";

export default class Info extends React.Component {
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
      component_Info: {
        width: "24%",
        height: "88%",
        position: "absolute",
        top: "7%",
        left: "19%"
      },
      infoTitle: {
        width: "100%",
        height: "18%",
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
      },
      infoList: {
        width: "100%",
        height: "40%",
        position: "absolute",
        top: "19%"
      },
      infoLocation: {
        width: "51%",
        height: "40.1%",
        position: "absolute",
        bottom: "0",
        right: "0"
      }
    }
    return(
      <div
        style={style.component_Info}>
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
              <style>{".cls-infoStation-1,.cls-infoStation-2{font-size:25.07px;}.cls-infoStation-1{font-family:SourceHanSansTW-Regular-B5pc-H, Source Han Sans TW;}.cls-infoStation-2{font-family:SourceHanSansTW-Normal-B5pc-H, Source Han Sans TW;}.cls-infoStation-3,.cls-infoStation-4{fill:none;stroke-miterlimit:10;}.cls-infoStation-3{"+this._proc_strokeColor(info[this.props.station].line)+";stroke-width:2px;}.cls-infoStation-4{stroke:#afafaf;stroke-width:3px;}"}</style>
            </defs>
            <g>
              <text className="cls-infoStation-1" transform="translate(11.17 27.57)">{info[this.props.station].line}</text>
              <text className="cls-infoStation-2" transform="translate(12.17 52.26)">{info[this.props.station].number}</text>
              <rect className="cls-infoStation-3" x="4.46" y="1.08" width="44.16" height="59.19" rx="5.78" ry="5.78" transform="translate(-0.15 0.13) rotate(-0.28)"/>
              <line className="cls-infoStation-4" y1="77.78" x2="264" y2="77.78"/>
            </g>
          </svg>
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
        <div
          style={style.infoLocation}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135.13 177.68">
            <defs>
              <style>{".cls-infoLocation-1{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:1.02px;}"}</style>
            </defs>
            <g>
              <path className="cls-infoLocation-1" d="M81.17,18.41c.1-.34-.65-.92-.63-1.27,0-.73,1.59-2.46,1.59-2.46s0-2.75-.63-3.33c-.21-.2-1.16-.14-1.16-.14l-6-.73a7.32,7.32,0,0,0-1.11-1.83,5.6,5.6,0,0,0-1.59-.4L69.9,6.66,69.43,3.8,68.71,2.3,68.39,1,67.58.51H66.39A10.38,10.38,0,0,1,64.51,1.7c-.17,0-.55-.08-.71,0-.83.39-2.06,3-2.06,3s-.51.4-.56.61c-.17.82,1.35,2.37,1.11,3.18-.12.41-1.51.8-1.51.8H59.5l-2.44,1.23a7.49,7.49,0,0,0-1.25,1.51,11.84,11.84,0,0,0,0,3.1l-1.47,1.43-2.94.48L49.74,18.8l-4.82.79s-2.31,1.69-2.68,2.54a11.51,11.51,0,0,0,0,3.49S42,28.7,41.17,29.12c-1.06.55-3.5-1.13-4.68-1-.49.07-1.25,1-1.75,1-1.16,0-3.81-2.62-3.81-2.62a2.12,2.12,0,0,0-.79.18c-.55.51-.87,2.88-.87,2.88s-.76-.14-1,0c-.7.49-1.19,3.21-1.19,3.21l-3.79,2.78-3,5.08s.27,1.35,0,1.67c-.44.51-2.66.4-2.66.4L5.14,56.34S6.7,60.22,6,61.26s-3.7,0-4.21,1c-.63,1.18,1.92,5,1.92,5L.58,71.58A4.49,4.49,0,0,0,.58,73a3.8,3.8,0,0,0,.91.79l3.65,3.08,1.35.54H15l1.35.44,3.1,1.67,8.41,7.94,3.89,8L32.52,99,32,112.06l-.56,1.83-4,3.81-1.59,1-4.68.85a2.9,2.9,0,0,0-1,0c-1.05.55-2.7,3.93-2.7,3.93l.08,1.19,3,7L21,139l.63,1.49a9.5,9.5,0,0,0,2,2.2,5.08,5.08,0,0,0,1.59,0l5.4-4.64s2.05-3.6,3.25-4.13a5.75,5.75,0,0,1,2.06.16l2.22.08,3,1.9,3.33,4.76,3.73,2.46s2.17,3,1.9,4C50,148,48,149,48,149l.32,5.87.71.63s1.33-2.56,2.14-2.46c.44.06.79,1.59.79,1.59l-.08,2.12L53,157.89h3.17l.71.36-.24,1.11s-.06,1.05.16,1.29,1.59.34,1.59.34h1.35l1.35-2.34s.3-.89.56-.87c.52,0,.87,1.9.87,1.9L62.36,161a19,19,0,0,0,.08,3.93,8.6,8.6,0,0,0,1,1.51l2,3.17.91,2.78,1.15,1.57,4,.85h2.78L76,173.65s.33-.7.56-.79c.43-.18,1.83.32,1.83.32l1.51.63,1.19.56,1.75.44,3.65-.36,1.19.36,1,1,1,1,1.43.4,1.35-.56s1.06.65,1.43.56,1.35-1.59,1.35-1.59l2.54-.16,3.25-2.28,1.9-.46h1l1,0s.61-1.58.4-2.06-1.59-1-1.59-1L102,168.23l-1.9-.58H95.93l-1.75-1.39-.87-.4s-1.22-.63-1.27-1,1-1.27,1-1.27-1.18-3.41-.73-4.44c.19-.44,1.22-.84,1.41-1.27a5.59,5.59,0,0,0,0-1.75s-2.42-1.78-2.58-2.7,1.29-2.86,1.29-2.86l.34-1.27v-1l-2.5-2.3s-.64-.34-.71-.56c-.31-.91.28-1.64.71-3.1.34-1.16.42-3.11,1-3.57s2.21.48,2.78.08.37-2.2.87-2.7c1-.94,5.32-.63,5.32-.63l2.22.16,1.35.87,4.44.24,1.83-1.27,1.27-1.51.71-2s.5-.82.79-.87c.77-.14,2.78,1.43,2.78,1.43l2.22-.4a6.41,6.41,0,0,1,2.38-.08c.57.3,1.18,1.77,1.83,1.83s2.3-1.67,2.3-1.67l3.73.22.87.22h2.7a4.23,4.23,0,0,0,1.67.28c.34-.14.87-1.19.87-1.19l.4-3.1a8.49,8.49,0,0,0-2.54-1c-.94,0-3.33,1.75-3.33,1.75l-4.52.4-6.43-3.41-3.89-2.06-1.83-.56-1.59-1.19-2.3-.56-2.46-2.46-2.38-3.33s-.7-2.38-.4-3.1,2.14-1.59,2.14-1.59l2-2,.24-1-1-2.06-2.14-2.22s-1,0-1.19-.32c-.29-.53.71-2.3.71-2.3l1.67-1.19.79-1.9s-.38-1.39-.08-1.69c.14-.14.79.06.79.06h.71l-.32-2,.56-1-.08-1.59L110,90.87l.48-2.38L110.14,87l-.71-1.75-1-3.41s.64-.57.56-.79c-.14-.41-1.67-.48-1.67-.48l-1.27-.79-2.94-3.1-.79-.87-1-.71a17.72,17.72,0,0,1-2.22-.32,22.49,22.49,0,0,1-2.54-1.29l-2.3-.81a7.45,7.45,0,0,1-2.46,0c-.54-.26-1.51-1.87-1.51-1.87a6.78,6.78,0,0,1-.79-1.67A4.24,4.24,0,0,1,89.9,68l2.32-4.37s.82-.11,1-.32c.43-.59-.37-2.31,0-2.94s2.42-.79,2.42-.79l.63-.79.71-.63s.49-.59.43-.81-1.22-.82-1.22-.82-.68,0-.82-.2a3.1,3.1,0,0,1-.2-2.24c0-.14.41-.41.41-.41l.41-1s-.26-.41-.41-.41-.41.41-.41.41l-.82-.82-1-.61a9.25,9.25,0,0,0-1-1,7,7,0,0,0-1-.41,12.3,12.3,0,0,1-1.43-2.24,4.72,4.72,0,0,1,0-1l-.61-1.43a3.92,3.92,0,0,1-.82-.82c-.16-.38.15-1.25,0-1.63-.07-.17-.44-.35-.61-.41a3.64,3.64,0,0,0-.82,0l-1.22-1s-.2-.13-.2-.2c0-.29.82-.82.82-.82a2.08,2.08,0,0,1,0-.61A2.94,2.94,0,0,1,87,39V37.19l-.61-1.43L86,33.52s-.45-.24-.61-.2-.41.41-.41.41l-1.83-.61-1.22-1a3.28,3.28,0,0,0-.61-.41,10.92,10.92,0,0,0-2.45,0s-1.08-.48-1.22-.82.2-1,.2-1-.33-.94-.2-1.22,1.22-.82,1.22-.82L80.28,27l.61-1,.61-1.22a3.54,3.54,0,0,0,.2-.82,4.62,4.62,0,0,0-.41-1l-.61-1-.61-1.43.41-1A5.63,5.63,0,0,0,81.17,18.41Z"/>
            </g>
          </svg>
        </div>
      </div>
    )
  }
}
