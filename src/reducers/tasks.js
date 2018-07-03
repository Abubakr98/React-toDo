const initialState = {
  tasks: [
    {
      taskName: ['First task'],
      taskComments: ['Some commetn one','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, asperiores illo repudiandae sint doloremque quis.']
    }, {
      taskName: ['Second task'],
      taskComments: ['Some commetn two','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, asperiores illo repudiandae sint doloremque quis.','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, asperiores illo repudiandae sint doloremque quis.','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, asperiores illo repudiandae sint doloremque quis.']
    }, {
      taskName: ['Third task'],
      taskComments: ['Some commetn three','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, asperiores illo repudiandae sint doloremque quis.']
    }
  ],
  isActive: 0
};
export default function toDoList(state = initialState, action) {
  if (action.type === 'ADD_TASK') {
    return {
      ...state,
      tasks: state.tasks.concat({
        taskComments: [],
        taskName: [action.payload]
      })
    }
  } else if (action.type === 'DELETE_TASK') {
    return {
      ...state,
      tasks: state.tasks.filter((el, i) => {
        let searchValue = action.payload;
        return searchValue !== i;
      })
    };
  } else if (action.type === 'IS_ACTIVE') {
    return {
      ...state,
      isActive: action.payload
    }
  } else if (action.type === 'ADD_COMMENT') {
    return {
      ...state,
      tasks:[]=state.tasks.map((el, i)=>{
        if (i==state.isActive) {
          return {
            taskName: el.taskName,
            taskComments:el.taskComments=[...el.taskComments,action.payload]};  /////////////////////////////
        }else{
            return el;
        }
        })
    }
  }
  else if (action.type === 'LOCAL_STORAGE') {
    return {
      ...state,
      tasks: action.payload
    }
  }
  return state;
}

// : [
//   ...state.tasks,
//   state.tasks[state.isActive]={                 // fix me, small bug is here
//     ...state.tasks[+state.isActive],
//     taskComments:[...state.tasks[+state.isActive].taskComments, action.payload]
//   }
// ]
