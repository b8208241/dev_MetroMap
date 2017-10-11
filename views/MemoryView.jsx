import React from 'react';
import MemoryAdd from './MemoryAdd.jsx';

export default class MemoryView extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    const style = {
      memoryView: {
        width: "100%",
        height: "100%",
        position: "relative"
      },
      component_MemoryAdd: {
        width: "10%",
        height: "10%",
        position: "absolute",
        top: "0",
        right: "0"
      }
    }

    let memoryList=this.props.memory.map(function(data, index){
      return(
        <MemoryCard
          key={"key_memorycard"+index}
          cardData={data}
          cardIndex={index}/>
      )
    })
    return(
      <div
        style={style.memoryView}>
        {memoryList}
        <div
          style={style.component_MemoryAdd}>
          <MemoryAdd
            _submit_Memory={this.props._submit_Memory}/>
        </div>
      </div>
    )
  }
}

class MemoryCard extends React.Component {
  render(){
    const style={
      memoryCard: {
        width: "35%",
        height: "45%"
      },
      memoryCard_img: {
        maxWidth: "100%",
        maxHeight: "75%",
        position: "relative"
      }
    }

    let cardData = this.props.cardData.obj;
    let words = cardData.words.map(function(item, index){
      return(
        <p
          key={"key_memory_word_"+index}>
          {item}
        </p>
      )
    })

    return(
      <div
        style={style.memoryCard}>
        <p>{cardData.title}</p>
        <img
          src={cardData.src}
          style={style.memoryCard_img}/>
        <p>{String(cardData.time.getMonth()+1)+" 月 "+String(cardData.time.getDate())+" 日"}</p>
        {words}
      </div>
    )
  }
}
