import React, {Component} from 'react';
import './tasks.css';
import {connect} from 'react-redux'
import {isActiveTask, onAddTask, onDeleteTask, onLocalStorage} from '../actions/actions'

class Tasks extends Component {
  componentDidMount = () => {
    let state = JSON.parse(localStorage.getItem('state'));
    if (state) {
        this.props.onLocalStorage(state);
    }
    document.addEventListener('keydown', this.keydownHandler);

  }
  componentDidUpdate=()=>{
    this._updateLocalStorage();
  }
  keydownHandler = (ev) => {
    if (ev.keyCode === 13) {
      this.addTask();
    }
  }
  addTask() {
    let str = this.inputTask.value;
    str=str.replace(/^\s+|\s+$/g, '');
    if (str) {
      this.props.onAddTask(str);
      this.inputTask.value = '';
    }
  }
  onDelete(e) {
    this.props.onDeleteTask(+ e.target.id);
  }
  onActiveTask = (e) => {
    this.props.isActiveTask(+ e.target.id);
  }
  _updateLocalStorage=()=>{
    let state = JSON.stringify(this.props.state.allState.tasks);
    localStorage.setItem('state', state)
  }
  render() {
    let className = 'item';
    if (this.props.isActive) {
      className += ' menu-active';
    }
    let tasks = this.props.state.allState.tasks;
    return (<div className="tasks">
      <div>
        <h1>Items</h1>
      </div>
      <div className="header">
        <input type="text" placeholder="Write name here..." ref={(input) => {
            this.inputTask = input
          }}></input>
        <button className="add" onClick={this.addTask.bind(this)}>Add task</button>
      </div>

      {
        tasks.map((el, i) => {

          return (<div className={this.props.state.allState.isActive == i
              ? className += ' menu-active'
              : className = 'item'} ref="myRef" id={i} onClick={this.onActiveTask} key={i}>
            <div>
              {el.taskName}
              <span className="badge badge-info">{this.props.state.allState.tasks[i].taskComments.length}</span>
            </div>
            <button id={i} key={i} onClick={this.onDelete.bind(this)} type="button" className="closeMy">
              Delete
            </button>
          </div>)
        })
      }

    </div>);
  }
}

export default connect(state => ({state: state}), {isActiveTask, onAddTask, onDeleteTask, onLocalStorage})(Tasks);
