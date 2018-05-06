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
}
  render() {
    return (<div key={this.props.keys} className='list-items'>
      <div className="item-name" onClick={this.handleClickShow} ><h5>{this.props.children}<span className="mySpan">{this.props.onMach[this._reactInternalFiber.key]?this.props.onMach[this._reactInternalFiber.key].length:0}</span></h5> </div>
      <div className="btn myBtn">
        <button type="button" onClick={this.handleClickDelete} className="btn btn-outline-danger myBtn">Delete</button>
      </div>
    </div>)
  };
}


export default Item;
