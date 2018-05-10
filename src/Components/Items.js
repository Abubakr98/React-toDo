import React, { Component } from 'react';
import Item from './Item';
class Items extends Component {
  constructor(props){
    super(props);
    this.state={
      value:'',
      items:['Wake up',"Go to university", "Go to the gym"],
      key:'',
      id:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.itemDelete = this.itemDelete.bind(this);
    this.createItem=this.createItem.bind(this);
    this.keydownHandler=this.keydownHandler.bind(this);
  }
  handleChange(ev) {
     this.setState({value: ev.target.value});

 }
 keydownHandler(ev){
   if(ev.keyCode===13){
     this.createItem(ev);
  }
 }
 componentDidUpdate(){
   this._updateLocalStorage();
              this.props.onCreateItems(this.state.items.length,this.state.items);
}
 componentDidMount(){

   document.addEventListener('keydown',this.keydownHandler);
   let localItems = JSON.parse(localStorage.getItem('items'));
    if (localItems) {
      this.setState({items:localItems});
    }
 }
  createItem(ev){
    if (this.state.value.replace(/^\s+|\s+$/g, '')!=='') {
      this.state.items.push(this.state.value);
      this.setState({value:''});
      this.setState({items:this.state.items});

      }
      this.props.onCreateItems(this.state.items.length,this.state.items,true);

  }
  itemDelete(oldKey){
  this.props.onDelete(+oldKey);
    let itemId=oldKey;
    let newItems=this.state.items.filter((item, i)=>{
      return i !== +itemId;
    });
    this.setState({items: newItems});
  }
  render() {
    let { items }=this.state;
    return (
      <div className="Items">
          <h1>Items</h1>
        <div className="myForm">
          <div className="input">
            <input className="form-control"  value={this.state.value} onChange={this.handleChange} type="text" placeholder="Default input"/>
        </div><div className="btn"><button type="button" onClick ={this.createItem} className="btn btn-info">Add new</button></div>
        </div>

        {
          items.map((el, i)=>{
            return(<Item key={i} onMach={this.props.onMach} onShowId={this.showIdItem} onShow={this.props.onShowItem} onItemDelete={this.itemDelete}>{el}</Item>)
          })
        }

      </div>
    );
  }
  _updateLocalStorage(){
    let items = JSON.stringify(this.state.items);
    localStorage.setItem('items', items)
  }
}

export default Items;
