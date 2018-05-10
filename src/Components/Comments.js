import React, {Component} from 'react';
import Comment from './Comment';
class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      items: [],
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
      this.setState({items:this.props.yourComments});
    document.addEventListener('keydown', this.keydownHandler);
  }
  createItem(ev) {
    if (this.state.value.replace(/^\s+|\s+$/g, '') !== '') {
      this.state.items.push([this.state.value]);
      this.setState({value: ''});
      this.setState({items: this.state.items});
      this.props.onForComments();
      }
  }

  componentDidUpdate() {
this.state.items=this.props.yourComments;
  }
  render() {
    let {items} = this.state;
    return (<div className="Items">
      <h1>Comment #{
        this.props.hashteg
          ? this.props.hashteg
          : 1
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
            return (<Comment key={i}>{el}</Comment>)
          })
        }
      </div>
    </div>);
  }
}

export default Comments;
