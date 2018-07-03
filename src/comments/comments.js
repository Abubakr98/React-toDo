import React, {Component} from 'react';
import './comments.css';
import {connect} from 'react-redux'
import {isActiveTask, onAddComment} from '../actions/actions'

class Comments extends Component {
  componentDidMount = () => {
    document.addEventListener('keydown', this.keydownHandler);
  }
  keydownHandler = (ev) => {
    if (ev.keyCode === 13 && ev.ctrlKey ) {
      this.addComment();
    }
  }
  addComment() {
  let str = this.inputComment.value;
  str=str.replace(/^\s+|\s+$/g, '');
  if (str) {
    this.props.onAddComment(str);
    this.inputComment.value = '';
  }
  }
  render() {
    var comments = ['Is empty'];
    if (this.props.state.allState.tasks[this.props.state.allState.isActive] == undefined) {
      comments = ['Is empty'];
    } else {
      if (comments = this.props.state.allState.tasks[this.props.state.allState.isActive].taskComments.length == 0) {
        comments = ['Is empty'];
      } else {
        comments = this.props.state.allState.tasks[this.props.state.allState.isActive].taskComments;
      }
    }
    return (<div className="comments">
      <div><h2>Comments #{this.props.state.allState.isActive+1}</h2></div>

      <div className="wrap">
      <div className="allComments">
      {
        comments.map((el, i) => {
          return (<div className="comment" key={i}><div className="icoW"><div className="ico"></div></div><div>{el}</div></div>)
        })
      }
      </div>
      </div>
      <div className="header">
        <input type="text" placeholder="Write comments here..." ref={(input) => {
            this.inputComment = input
          }}></input>

          <button className="add" onClick={this.addComment.bind(this)}>Add comment</button>
      </div>

    </div>);
  }
}

export default connect(state => ({state: state}), {isActiveTask, onAddComment})(Comments);
