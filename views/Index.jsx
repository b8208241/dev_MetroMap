import React from 'react';
import Graph from './Graph.jsx';
import Focus from './Focus.jsx';

export default class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      focus: false,
      focus_position: null,
      focus_name:""
    };
    this._handleState_Focus = this._handleState_Focus.bind(this);
  }

  _handleState_Focus(boolean, focus_position, focus_name){
    this.setState({
      focus: boolean,
      focus_position: focus_position,
      focus_name: focus_name
    })
  }

  render(){
    const style = {
      outline: {
        width: "100%",
		    height: "100%",
        position: "relative"
      }
    }
    return(
      <div style={style.outline}>
        <Navtop/>
        {
          this.state.focus ?
          <Focus
            focus_position={this.state.focus_position}
            focus_name={this.state.focus_name}
            _handleState_Focus={this._handleState_Focus}/>
          :
          <Graph
            _handleState_Focus={this._handleState_Focus}/>
        }
      </div>
    )
  }
}

 class Navtop extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render(){
    const style = {
      navtop: {
        width: "100%",
        height: "5%",
        position: "absolute",
        top: "0",
        fontFamily: "'Lato'"
      },
      logo: {
        position: "absolute",
        left: "9.6%",
        fontSize: "40pt",
        fontWeight: "600"
      },
      svg_burger: {
        width: "3.8%",
        height: "90%",
        position: "absolute",
        right: "12%",
        top: "10%"
      }
    }
    return(
      <nav
        style = {style.navtop}>
        <span style={style.logo}>Graph</span>
        <svg
          style={style.svg_burger}>
          <defs>
            <style>{".cls-1{fill:none;stroke:#c1c1c1;stroke-linecap:round;stroke-linejoin:round;stroke-width:3px;}"}</style>
          </defs>
          <g>
            <line className="cls-1" x1="1.5" y1="8.24" x2="26.88" y2="8.24"/>
            <line className="cls-1" x1="1.5" y1="14.98" x2="26.88" y2="14.98"/>
            <line className="cls-1" x1="1.5" y1="1.5" x2="26.88" y2="1.5"/>
          </g>
        </svg>
      </nav>
    )
  }
}
