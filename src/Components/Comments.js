import React, {Component} from 'react';
import Comment from './Comment';
class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      items: [],
      current:{}
    }
    this.handleChange = this.handleChange.bind(this);
    this.createItem = this.createItem.bind(this);
    this.keydownHandler = this.keydownHandler.bind(this);
  }
  handleChange(ev) {
    this.setState({value: ev.target.value});

  }
  keydownHandler(ev) {
    if (ev.keyCode === 13 && ev.ctrlKey) {
      this.createItem(ev);
    }
  }

  componentDidMount() {

    document.addEventListener('keydown', this.keydownHandler);
    let comments = JSON.parse(localStorage.getItem('comments'));
    if (comments) {
      this.setState({items: comments});
    }

  }
  createItem(ev) {
    if (this.state.value.replace(/^\s+|\s+$/g, '') !== '') {
      this.state.items.unshift([this.state.value]);
      this.setState({value: ''});
      this.setState({items: this.state.items});
  }
}

  componentDidUpdate() {
    let data = this.props.onForItem(this.state.items,this.props.hashteg
      ? this.props.hashteg
      : 0);
      this.state.items=[];
      console.log(this.state.items=data.sta);
          console.log(data);
      // this.setState({items:this.state.items=data.sta});

    this._updateLocalStorage();
  }
  render() {
    let {items} = this.state;
    return (<div className="Items">
      <h1>Comments #{
        this.state.items,this.props.hashteg
          ? this.props.hashteg
          : 0
        }</h1>
      <div className="myForm1">
        <div className="avatar"></div>
        <div className="text">
          <textarea className="textarea" value={this.state.value} onChange={this.handleChange} type="text" rows="4" placeholder="Default input"/>
        </div>
      </div>
      <div className="allComments">
        {
          items.map((el, i) => {
            return (<Comment key={i} onItemDelete={this.itemDelete}>{el}</Comment>)
          })
        }
      </div>
    </div>);
  }
  _updateLocalStorage() {
    let comments = JSON.stringify(this.state.items);
    localStorage.setItem('comments', comments);
  }
}

export default Comments;
