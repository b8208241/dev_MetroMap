import React from 'react';
import ModalBox from './components/ModalBox.jsx';
import ModalBackground from './components/ModalBackground.jsx';

export default class NoteAdd extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      noteBox: false,
      previewPhotos: []
    };
    this._handleMouseEnter = (event) => {event.stopPropagation();event.preventDefault();this.setState({iconOver: true})};
    this._handleMouseLeave = (event) => {event.stopPropagation();event.preventDefault();this.setState({iconOver: false})};
    this._handleClick_noteAdd = (event) => {event.stopPropagation();event.preventDefault();this.setState({noteBox: true, previewPhotos: []})};
    this._close_noteBox = () => {this.setState({noteBox: false})};
    this._handle_InputPhotos = this._handle_InputPhotos.bind(this);
    this._submit_Note = this._submit_Note.bind(this);
    this.validFileType = this.validFileType.bind(this);
  }

  validFileType(file) {
    var imageType = /^image\//;
    if(imageType.test(file.type)){
      return true;
    }
    return false;
  }

  _submit_Note(obj, srcList){
    let photoList = [];

    for (let i=0; i<this.state.previewPhotos.length ;i++) {
      if(this.validFileType(this.state.previewPhotos[i])) {
        photoList.push(this.state.previewPhotos[i])
      } else {
        photoList.push(0)
      }
    };
    let fullData = Object.assign(obj, {"photoList": photoList})
    this.props._submit_Note(fullData);
    for(let j=0; j<srcList.length ; j++){
      window.URL.revokeObjectURL(srcList[j]);
    }
    this._close_noteBox();
  }

  _handle_InputPhotos(event) {
    let selectedImg = this.photoInput.files;
    if(selectedImg.length === 0) {
      return
    } else {
      this.setState({previewPhotos: selectedImg});
    }
  }


  render(){
    const style = {
      svg_noteAdd: {
        width: "95%",
        height: "95%",
        padding: "2%",
        position: "relative",
        cursor: "pointer"
      }
    }
    return(
      <div
        id="noteAdd"
        ref={(element)=> this.noteAdd=element}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 149.75 151.3"
          style={style.svg_noteAdd}
          onMouseEnter={this._handleMouseEnter}
          onMouseLeave={this._handleMouseLeave}
          onClick={this._handleClick_noteAdd}>
         <defs>
           <style>{".cls-1{fill:#afafaf;opacity:0.5;}.cls-2{fill:#eaeaea;opacity:0.61;}"}</style>
          </defs>
          <g>
            <ellipse className="cls-1" cx="74.51" cy="76.5" rx="74.51" ry="74.8"/>
            <circle cx="76.46" cy="73.24" r="72.55"/>
            <path className="cls-2" d="M64.71,1.83C91.86,8.27,113.27,25.34,128.61,48A102.91,102.91,0,0,1,143.9,98.33l-.35,3.52A72.54,72.54,0,0,0,63,1.4Z"/>
          </g>
        </svg>
        {
            this.state.noteBox &&
            <ModalBox containerClass="pageFocus">
                <ModalBackground onClose={this._close_noteBox}>
                  <NoteBox
                    sortList={this.props.sortList}
                    previewPhotos={this.state.previewPhotos}
                    validFileType={this.validFileType}
                    _close_noteBox = {this._close_noteBox}
                    _submit_Note={this._submit_Note}/>
                </ModalBackground>
            </ModalBox>
        }
        <input
          type="file"
          id="input_PhotoAdd"
          ref={(element) => this.photoInput=element}
          accept="image/*"
          style={{width:0, opacity:0}}
          onChange={this._handle_InputPhotos}/>
      </div>
    )
  }
}

class NoteBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      inputTitle: '',
      tareaRemarks: '',
      sort: '',
      time: new Date()
    };
    this._set_sort = (sort) => this.setState({sort: sort});
    this._handleClick_Retain = this._handleClick_Retain.bind(this);
    this._handleChange_FormValue = this._handleChange_FormValue.bind(this);
  }

  _handleChange_FormValue(event){
    event.stopPropagation();event.preventDefault();
    switch (event.target.name) {
      case "Input_Title":
        this.setState({inputTitle: event.target.value});
        break;
      case "tarea_remarks":
        this.setState({tareaRemarks: event.target.value});
        break;
      default:
        this.setState({
            inputTitle: '',
            tareaRemarks: ''
        })
        break;
    }
  }

  _handleClick_Retain(event){
    event.stopPropagation();event.preventDefault();
    //get the src used in previewed for revoked
    let srcList = []
    for(let i=0; i<this.img_preview.length; i++){
      srcList.push(this.img_preview[i].getAttribute('src'));
    }
    //catch text state, catch time
    //upload them all in the upper level
    //then close the box in the upper level
    this.props._submit_Note({
      time: this.state.time,
      title: this.state.inputTitle,
      reamrks: this.state.tareaRemarks,
      sort: this.state.sort
    }, srcList)
  }

  render(){
    const style = {
      noteBox: {
        width: "45%",
        height: "75%",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#FFFFFF",
        border: "0.5px solid black",
        borderRadius: "2px"
      },
      preview: {
        width: "100%",
        height: "60%",
        position: "relative",
        backgroundColor: "rgba(156, 152, 152, 0.9)"
      },
      previewImg: {
        maxWidth: "100%",
        maxHeight: "100%",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      },
      tareaRemarks: {
        outline: "none",
        background: "none",
        border: "none",
        WebkitAppearance: "none"
      },
      inputTitle: {
        outline: "none",
        background: "none",
        border: "none",
        WebkitAppearance: "none"
      }
    }

    let self = this;
    let photos = this.props.previewPhotos;
    let filePreview = [];
    self.img_preview = [];
    for (let i=0; i<photos.length ;i++) {
      if(self.props.validFileType(photos[i])) {
        let src = window.URL.createObjectURL(photos[i]);
        filePreview.push(
          <img
            key={"key_preview_photo"+i}
            style={style.previewImg}
            src={src}
            ref={(element) => {self.img_preview.push(element);}}/>
        )
        //Important!!
        //src need to be revoked after <img> mount! 'window.URL.revokeObjectURL(src)'
        //But notice the src would be invalid once it were revoked
      } else {
        let textContent = 'File name ' + file.name + ': Not a valid file type. Update your selection.';
        filePreview.push(
          <p>{textContent}</p>
        )
      }
    };

    return(
      <div
        style={style.noteBox}>
        <div>
          <input
            type="text"
            name="Input_Title"
            value={this.state.inputTitle}
            style={style.inputTitle}
            ref={(element) => this.titleInput=element}
            onChange={this._handleChange_FormValue}/>
        </div>
        <SortBox
          sort={this.state.sort}
          sortList={this.props.sortList}
          _set_sort={this._set_sort}/>
        <div>
          <textarea
            name='tarea_remarks'
            value={this.state.tareaRemarks}
            style={style.tareaRemarks}
            ref={(element) => this.tareaRemarks=element}
            onChange={this._handleChange_FormValue}/>
        </div>
        <div
          style={style.preview}>
          {
            this.props.previewPhotos.length>0 ?
            filePreview
            :
            <PhotoUpload/>
          }
        </div>
        <div
          onClick={this._handleClick_Retain}>
          <p>留存</p>
        </div>
      </div>
    )
  }
}

class SortBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
    this._handleClick_SortBox = this._handleClick_SortBox.bind(this);
  }

  _handleClick_SortBox(event){
    event.preventDefault();
    event.stopPropagation();
    this.props._set_sort(event.target.dataset.sort);
  }

  render(){
    let self = this;
    let sortList = this.props.sortList.map(function(sort, index){
        return(
          <span
            key={"key_sortbox_"+sort}
            data-sort={sort}
            onClick={self._handleClick_SortBox}>
            {sort}
          </span>
        )
    })

    return(
      <div>
        <p>{this.props.sort}</p>
        {sortList}
      </div>
    )
  }
}

class PhotoUpload extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      over: false
    };
    this._handleMouseEnter = (event) => {event.stopPropagation();event.preventDefault();this.setState({over: true})};
    this._handleMouseLeave = (event) => {event.stopPropagation();event.preventDefault();this.setState({over: false})};
    this._handleClick_photoAdd = this._handleClick_photoAdd.bind(this);
  }

  _handleClick_photoAdd(event){
    event.stopPropagation();
    event.preventDefault();
    document.getElementById('input_PhotoAdd').click();
  }

  render(){
    const style = {
      svg_photoAdd: {
        width: "50%",
        height: "30%",
        margin: "2% 5%",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        cursor: "pointer"
      }
    }
    return(
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 286.45 119.94"
          style={style.svg_photoAdd}
          onMouseEnter={this._handleMouseEnter}
          onMouseLeave={this._handleMouseLeave}
          onClick={this._handleClick_photoAdd}>
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
      </div>
    )
  }
}
