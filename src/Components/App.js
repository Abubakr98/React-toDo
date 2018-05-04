import React, { Component } from 'react';
import Items from './Items';
import Comments from './Comments';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      show:0,
      len:0,
      main:[],
      fromComments:[],
      allComments:[[],[],[]]
    }
this.handleShow = this.handleShow.bind(this);
this.handleGetData = this.handleGetData.bind(this);
this.handleCreateItems = this.handleCreateItems.bind(this);
this.forItem = this.forItem.bind(this);
  }

  handleShow(id){
    let idName=+id;
    // this.setState({current:this.state.current});
    // console.log(this.state.current);
    this.setState({show:this.state.show=idName});
  }
  forItem(items,id){
    // this.state.allComments.length
    // console.log(items+"="+id+"="+this.state.show);
    // if (this.state.allComments) {
    // this.setState({allComments:this.state.allComments[id]=items});
    let sta = this.state.allComments[id]=items;
    this.state.len=this.state.allComments[id].length
    // }
console.log(this.state.allComments);
return {id, sta}
  }
  handleGetData(items,id){//////////////////////////////////////////////////////////////
    this.state.fromComments=items;
      this.setState({fromComments:this.state.fromComments});
  }
  handleCreateItems(len, items){
    this.state.main=items;
  }
  render() {
    return (
      <div className="App">
        <Items onShowItem={this.handleShow} onGetData={this.handleGetData} onNumber={this.state.len} onCreateItems={this.handleCreateItems}></Items>
      <Comments hashteg={this.state.show} onClear={this.commentsClear} onForItem={this.forItem}></Comments>
      </div>
    );
  }
}

export default App;
