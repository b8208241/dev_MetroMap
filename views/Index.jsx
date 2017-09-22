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
        height: "100vh",
        position: "absolute"
      }
    }
    return(
      <div style={style.outline}>
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
