import React from 'react';
import Note from './Note.jsx';
import Info from './Info.jsx';

export default class Focus extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
    this._handleClick_backSign = this._handleClick_backSign.bind(this);
  }

  _handleClick_backSign(event){
    event.stopPropagation();
    event.preventDefault();
    this.props._handleState_Focus(false, null, "")
  }

  componentDidMount(){

  }

  render(){
    const style = {
      page_Focus: {
        width: "100%",
        height: "95%",
        position: "absolute",
        top: "3%"
      },
      svg_backSign: {
        width: "3.6%",
        height: "5.4%",
        position: "absolute",
        bottom: "5%",
        left: "19%",
        cursor: "pointer"
      }
    }
    return(
      <div style={style.page_Focus}>
        <Info
          station={this.props.focus_name}/>
        <Note
          station={this.props.focus_name}/>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 41.58 27.62"
          style={style.svg_backSign}
          onClick={this._handleClick_backSign}>
          <defs>
            <style>{".cls-backSign-1,.cls-backSign-2{fill:none;stroke:#afafaf;stroke-linecap:round;stroke-linejoin:round;}.cls-backSign-1{stroke-width:5px;}.cls-backSign-2{stroke-width:4px;}"}</style>
          </defs>
          <g>
            <line className="cls-backSign-1" x1="4.79" y1="13.81" x2="39.08" y2="13.81"/>
            <line className="cls-backSign-2" x1="2" y1="13.81" x2="14.66" y2="2"/>
            <line className="cls-backSign-2" x1="14.66" y1="25.62" x2="2" y2="13.81"/>
          </g>
        </svg>
      </div>
    )
  }
}
