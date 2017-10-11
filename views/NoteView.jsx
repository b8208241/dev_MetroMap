import React from 'react';
import NoteAdd from './NoteAdd.jsx';

export default class NoteView extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    const style = {

    }

    let noteSorts = [];
    for(let i = 0; i<this.props.note[1].length; i++){
      noteSorts.push(
        <NoteSort/>
      )
    }

    return(
      <div>
        <div>
          <NoteAdd
            sortList={this.props.note[0]}
            _submit_Note = {this.props._submit_Note}/>
        </div>
        {noteSorts}
      </div>

    )
  }
}

class NoteSort extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div>

      </div>
    )
  }
}
