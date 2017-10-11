import React from 'react';
import Info from './Info.jsx';
import InfoTitle from './InfoTitle.jsx';
import Visited from './Visited.jsx';

export default class Focus extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      renderMist: false,
      renderVisited: false
    };
    this.openMist = this.openMist.bind(this);
    this._handleClick_backSign = this._handleClick_backSign.bind(this);
  }

  openMist(){
    this.setState({renderMist: false})
    let stationName = this.props.focus_name;
    let d = new Date();
    let time = d.getTime();

    let self = this;
    axios.post('/user/station/build', {
      station: stationName,
      time: time
    }).then(function(res){
      if(res.data.success){
        self.setState({renderVisited: true})
      }
    }).catch(function(err){
      console.log(err)
    })
  }

  _handleClick_backSign(event){
    event.stopPropagation();
    event.preventDefault();
    this.props._handleState_Focus(false, null, "")
  }

  componentWillMount(){
    let stationName = this.props.focus_name;
    //this line is tricky, but only "this" should be putted into the var
    let self = this;
    axios.get('/user/station/status', {
      params: {
        station: stationName
      }
    }).then(function(res){
      if(!res.data.status[0]){
        self.setState({renderMist: true})
      }else{
        self.setState({renderVisited: true})
      }
    }).catch(function(err){
      console.log(err)
    })
  }

  render(){
    const style = {
      page_Focus: {
        width: "100%",
        height: "95%",
        position: "absolute",
        top: "5%"
      }
    }
    return(
      <div className="pageFocus" style={style.page_Focus}>
        {
          this.state.renderVisited &&
          <Visited
            focus_name={this.props.focus_name}/>
        }
        {
          this.state.renderMist &&
          <Mist
            focus_name={this.props.focus_name}
            openMist={this.openMist}/>
        }
        <SVGbacksign
          _handleClick_backSign={this._handleClick_backSign}/>
      </div>
    )
  }
}


class Mist extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
    this._handleClick_openMist = this._handleClick_openMist.bind(this);
  }

  _handleClick_openMist(event){
    event.preventDefault();
    event.stopPropagation();
    this.props.openMist();
  }

  render(){
    const style = {
      view_Mist: {
        width: "40%",
        height: "80%",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)"
      },
      buttonOpenMist: {
        width: "50%",
        height: "20%",
        position: "absolute",
        top: "65%",
        left: "50%",
        transform: "translate(-50%,0)",
        border: "1px solid black",
        borderRadius: "0.5px",
        cursor: "pointer"
      }
    }
    return(
      <div
        style={style.view_Mist}>
        <Info
          station={this.props.focus_name}/>
        <div
          style={style.buttonOpenMist}
          onClick={this._handleClick_openMist}>
          <span>
            紀錄開始
          </span>
        </div>
      </div>
    )
  }
}

class SVGbacksign extends React.Component {
  render(){
    const style = {
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 41.58 27.62"
        style={style.svg_backSign}
        onClick={this.props._handleClick_backSign}>
        <defs>
          <style>{".cls-backSign-1,.cls-backSign-2{fill:none;stroke:#afafaf;stroke-linecap:round;stroke-linejoin:round;}.cls-backSign-1{stroke-width:5px;}.cls-backSign-2{stroke-width:4px;}"}</style>
        </defs>
        <g>
          <line className="cls-backSign-1" x1="4.79" y1="13.81" x2="39.08" y2="13.81"/>
          <line className="cls-backSign-2" x1="2" y1="13.81" x2="14.66" y2="2"/>
          <line className="cls-backSign-2" x1="14.66" y1="25.62" x2="2" y2="13.81"/>
        </g>
      </svg>
    )
  }
}
