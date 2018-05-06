import React, {Component} from 'react';
import Items from './Items';
import Comments from './Comments';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 0,
      main: [],
      comments: [
        [
          'From the beginning you need to wash yourself', 'then brush your teeth', 'and have breakfast', `And read this verse: Little leaves fall softly down
Red and yellow, orange and brown
Whirling, twirling round and round
Falling softly to the ground.
Little leaves fall softly down
To make a carpet on the ground.
Then, swish, the wind comes whistling by
And sends them dancing to the sky.`
        ],
        [
          'Take the laptop', `And read this verse: Autumn leaves are falling down,
Falling down, falling down,
Autumn leaves are falling down,
Yellow, red, orange and brown! leaves are falling down,
Yellow, red`, 'take money for lunch and money for the trip', 'and most importantly do not forget your head', 'and a good mood'
        ],
        [
          'Take the form for training', 'do not be late for training', 'do all the exercises that you planned', `And read this verse: Autumn leaves are falling down,
Falling down, falling down,
Autumn leaves are falling down,
Yellow, red, orange and brown!`
        ]
      ],
      isClear: false
    }
    this.handleShow = this.handleShow.bind(this);
    this.handleCreateItems = this.handleCreateItems.bind(this);
    this.forComments = this.forComments.bind(this);
    this.isDelete = this.isDelete.bind(this);
  }

  handleShow(id) {
    let idName = + id;
    this.setState({
      show: this.state.show = + id
    });
  }
  isDelete(id) {
    let newComments = this.state.comments.filter((el, i) => {
      return i !== + id;
    });
    this.setState({comments: newComments});
    this.forceUpdate();
  }
  forComments(items, id) {
    this._updateLocalStorage();
    this.forceUpdate();
  }

  componentWillMount() {
    let allComments = JSON.parse(localStorage.getItem('allComments'));
    if (allComments) {
      this.setState({comments: allComments});
    }
  }

  componentDidUpdate() {
    this._updateLocalStorage();
  }

  handleCreateItems(len, items, newMas) {
    this.state.main = items;
    if (newMas) {
      this.state.comments.push([]);
    }
  }

  render() {
    let {main} = this.state;
    return (<div className="App">
      <div className="sideBar">
        <div className='nameApp'>
          <span>DAIRY APP</span>
          <h5 className="secondName">Comment with no sense</h5>
        </div>
      </div>
      <div className="apps">
        <Items onShowItem={this.handleShow} onMach={this.state.comments} onDelete={this.isDelete} onCreateItems={this.handleCreateItems}></Items>
        {
          (this.state.comments[this.state.show] === undefined)
            ? <Comments yourComments={[]} hashteg={this.state.show} onForComments={this.forComments}></Comments>
            : (main.length <= 0)
              ? <Comments yourComments={this.state.comments[this.state.show]} hashteg={this.state.show} onForComments={this.forComments}></Comments>
              : main.map((el, i) => {
                if (i === this.state.show) {
                  let bufNum = this.state.show;
                  return <Comments key={i} yourComments={this.state.comments[this.state.show]} hashteg={++bufNum} onForComments={this.forComments}></Comments>
                }
              })
        }
      </div>

    </div>);
  }
  _updateLocalStorage() {
    let allComments = JSON.stringify(this.state.comments);
    localStorage.setItem('allComments', allComments);
  }
}

export default App;
