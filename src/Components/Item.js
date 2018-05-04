import React, {Component} from 'react';
class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      items: []
    }
    this.handleClickDelete = this.handleClickDelete.bind(this);
    this.handleClickShow = this.handleClickShow.bind(this);
  }
handleClickDelete(){
  this.props.onItemDelete(this._reactInternalFiber.key);
}
handleClickShow(){
  this.props.onShow(this._reactInternalFiber.key);
  this.props.onGetData(this.state.items,this._reactInternalFiber.key);
// console.log(this.props.onForItem(this.state.items));
}
  render() {
    return (<div key={this.props.keys} className='list-items'>
      <div className="item-name" onClick={this.handleClickShow} ><h5>{this.props.children}<span className="badge badge-light">{}</span></h5> </div>
      <div className="btn">
        <button type="button" onClick={this.handleClickDelete} className="btn btn-outline-danger">Delete</button>
      </div>
    </div>)
  };
}


export default Item;
