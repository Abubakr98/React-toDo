import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
// import {connect} from 'react-redux'
// import {onAddTask, onDeleteTask} from './actions/actions'
import Tasks from './tasks/tasks'
import Comments from './comments/comments'
class App extends Component {
  render() {
    return (<div className="App">
      <Tasks></Tasks>
      <Comments></Comments>
    </div>);
  }
}

export default App;
