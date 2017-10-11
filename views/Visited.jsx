import React from 'react';
import InfoTitle from './InfoTitle.jsx';
import StationInfo from './StationInfo.jsx';
import MemoryView from './MemoryView.jsx';
import NoteView from './NoteView.jsx';

export default class Visited extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      view: "memory",
      status: null,
      note: [],
      memory: []
    };
    this._handleClick_toCollection = (event) => {event.stopPropagation();event.preventDefault();this.setState({view: "note"});};
    this._submit_Memory = this._submit_Memory.bind(this);
    this._submit_Note = this._submit_Note.bind(this);
  }

  _submit_Note(obj){
    let sort = obj.sort;
    this.state.note[1][sort].push(obj.title);
  }

  _submit_Memory(obj){
    let src;
    if(obj.photoList[0]){
      src = window.URL.createObjectURL(obj.photoList[0]);
      //we do so for convienient, keep photoLIst in the memory state
      //should remove
      obj['src']=src;
    }
    this.state.memory.unshift({obj})
    this.setState({memory: this.state.memory})
  }

  componentWillMount(){
    let stationName = this.props.focus_name;
    //this line is tricky, but only "this", not "this.setState" should be putted into the var
    let self = this;
    axios.get('/user/station/data', {
      params: {
        station: stationName
      }
    }).then(function(res){
      if(res.data.success){
        self.setState({
          status: res.data.status,
          note: res.data.note,
          memory: res.data.memory
        })
      }
    }).catch(function(err){
      console.log(err)
    })
  }

  render(){
    const style={
      view_visited: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0",
        left: "0"
      },
      component_stationMark: {
        width: "12%",
        height: "100%",
        position: "absolute",
        top: "0",
        right: "8%"
      },
      component_stationInfo: {
        width: "12%",
        height: "30%",
        position: "absolute",
        top: "70%",
        right: "8%"
      },
      stationMarkTitle: {
        width: "100%",
        height: "20%",
        position: "absolute",
        top: "5%"
      }
    }
    return(
      <div
        style={style.view_visited}>
        <div
          style={style.component_stationMark}>
          <div
            style={style.stationMarkTitle}>
            <InfoTitle
              station={this.props.focus_name}/>
          </div>
          <div
            onClick={this._handleClick_toCollection}>
            <p>collection</p>
          </div>
        </div>
        <div
          style={style.component_stationInfo}>
          <StationInfo
            station={this.props.focus_name}/>
        </div>
        <VisitedRelation
            view={this.state.view}
            status={this.state.status}
            note={this.state.note}
            memory={this.state.memory}
            _submit_Memory={this._submit_Memory}
            _submit_Note={this._submit_Note}/>
      </div>
    )
  }
}

class VisitedRelation extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
    this._render_viewDepent = this._render_viewDepent.bind(this);
  }

  _render_viewDepent(expression, style){
    switch(expression){
      case "memory":
        return(
          <div
            style={style.relationMemory}>
            <MemoryView
              status={this.props.status}
              memory={this.props.memory}
              _submit_Memory={this.props._submit_Memory}/>
          </div>
        )
        break;
      case "note":
        return(
          <div
            style={style.relationNote}>
            <NoteView
              status={this.props.status}
              note={this.props.note}
              _submit_Note={this.props._submit_Note}/>
          </div>
        )
        break;
      default:
        null
        break;
    }
  }

  render(){
    const style = {
      component_visitedRelation: {
        width: "75%",
        height: "100%",
        position: "absolute",
        top: "0",
        left: "5%"
      },
      relationMemory: {
        width: "90%",
        height: "90%",
        position: "absolute",
        top: "5%",
        left: "2%"
      },
      relationNote: {

      }
    }

    return(
	  <div
      style={style.component_visitedRelation}>
      {
        this._render_viewDepent(this.props.view, style)
      }
	  </div>
	 )
  }
}
