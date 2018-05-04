import React, {Component} from 'react';
class Comment extends Component {

  render() {
    return (<div key={this.props.keys} className="comment-item">
      <div className="avatar1"></div>
      <div className="coment-text"><p>{this.props.children}</p></div>
    </div>)
  };
}


export default Comment;
