const onAddTask=(task)=> dispatch =>{
  dispatch({
    type: 'ADD_TASK',
    payload:task
  });
}
const onAddComment=(comment)=> dispatch =>{
  dispatch({
    type: 'ADD_COMMENT',
    payload:comment
  });
}

const onDeleteTask=(id)=> dispatch =>{
  dispatch({
    type: 'DELETE_TASK',
    payload:id
  });
}
const isActiveTask=(num)=> dispatch =>{
  dispatch({
    type: 'IS_ACTIVE',
    payload:num
  });
}
const onLocalStorage=(data)=> dispatch =>{
  dispatch({
    type: 'LOCAL_STORAGE',
    payload:data
  });
}

export  {isActiveTask, onAddTask, onDeleteTask,onAddComment, onLocalStorage}
