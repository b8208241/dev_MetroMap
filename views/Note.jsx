import React from 'react';

export default class Note extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      over: false,
      notes: []
    };
    this._handleMouseEnter = (event) => {event.stopPropagation();event.preventDefault();this.setState({over: true})};
    this._handleMouseLeave = (event) => {event.stopPropagation();event.preventDefault();this.setState({over: false})};
    this._handleClick_noteAdd = this._handleClick_noteAdd.bind(this);
    this._handleFiles = this._handleFiles.bind(this);
  }

  _handleClick_noteAdd(event){
    event.stopPropagation();
    event.preventDefault();
    let input = document.getElementById('noteAdd_Input');
    input.click();
  }

  _handleFiles(event) {
    let selectedImg = this.fileInput.files;
    if(selectedImg.length === 0) {
      return
    } else {
      this.setState({notes: [selectedImg]})
    }
  }


  render(){
    const style={
      component_Note: {
        width: "30%",
        height: "90%",
        position: "absolute",
        top: "5%",
        left: "51%"
      },
      noteList: {
        width: '100%',
        maxHeight: "70%",
        position: "absolute",
        top: "0",
        listStyle: "none"
      },
      svg_noteAdd: {
        width: "90%",
        height: "30%",
        margin: "2% 5%",
        cursor: "pointer"
      }
    }

    let srcState = this.state.src;
    let noteListItem = this.state.notes.map(function(files, index){
      return(
        <ListItem
          key={"key_listItem_"+index}
          itemIndex={index}
          files={files}/>
      )
    })

    return(
      <div
        style={style.component_Note}>
        <ol
          style={style.noteList}
          ref={(ol) => {this.noteList = ol;}}>
          {noteListItem}
        </ol>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 286.45 119.94"
          style={style.svg_noteAdd}
          onMouseEnter={this._handleMouseEnter}
          onMouseLeave={this._handleMouseLeave}
          onClick={this._handleClick_noteAdd}>
         <defs>
            <style>{".cls-noteAdd-3{fill:none;stroke-miterlimit:10;stroke:#606060;opacity:0.65;}.cls-noteAdd-1{fill:none;stroke-miterlimit:10;stroke:#afafaf;stroke-dasharray:16.27 19.33;}.cls-noteAdd-2{fill:#bcbcbc;stroke:#bcbcbc;stroke-linecap:round;stroke-linejoin:round;"+(this.state.over?"stroke-width:2px;":null)+"}"}</style>
          </defs>
          <g>
            {
              this.state.over &&
              <rect className="cls-noteAdd-3" x="0.5" y="0.5" width="285.45" height="118.94" rx="14.88" ry="14.88"/>
            }
            <rect className="cls-noteAdd-1" x="0.5" y="0.5" width="285.45" height="118.94" rx="14.88" ry="14.88"/>
            <rect className="cls-noteAdd-2" x="147.8" y="37.62" width="6.57" height="43.26" rx="3.28" ry="3.28"/>
            <rect className="cls-noteAdd-2" x="147.8" y="37.62" width="6.57" height="43.26" rx="3.28" ry="3.28" transform="translate(91.83 210.33) rotate(-90)"/>
          </g>
        </svg>
        <input
          type="file"
          id="noteAdd_Input"
          accept="image/*"
          style={{width:0, opacity:0}}
          ref={(input)=>{this.fileInput=input;}}
          onChange={this._handleFiles}/>
      </div>
    )
  }
}

class ListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
    this.validFileType = this.validFileType.bind(this);
  }

  validFileType(file) {
    var imageType = /^image\//;
    if(imageType.test(file.type)){
      return true;
    }
    return false;
  }

  componentDidMount(){

  }

  render(){
    const style = {
      listItem: {
        width: "100%"
      }
    }

    let imgs=[];
    let validFileType = this.validFileType;
    for(let i=0; i<this.props.files.length; i++){
      let file = this.props.files[i];
      let src = window.URL.createObjectURL(file);
      if(validFileType(file)) {
        imgs.push(
          <img
            key={"key_"+this.props.itemIndex+"_file_"+i}
            src={src}
            />
        )
        //Important!!
        //src need to be revoked after <img> mount! 'window.URL.revokeObjectURL(src)'
      } else {
        let textContent = 'File name ' + file.name + ': Not a valid file type. Update your selection.';
        imgs.push(
          <p>{textContent}</p>
        )
      }
    }

    return(
      <li
        style={style.listItem}>
        {imgs}
      </li>
    )
  }
}
