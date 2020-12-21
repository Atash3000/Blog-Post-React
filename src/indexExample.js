import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const todoObject={
  title:'buy bottle of milk',
  completed: true
}
let isCompleted='';
if(todoObject.completed){
 isCompleted = 'task-completed';
}

const tasks =( 
<div>
<input className="complete-item" type="checkbox" checked={todoObject.completed}  />
<span className={isCompleted+' todo-item-text'}>{todoObject.title}</span>
<input type="text" className="todo-item-input update-action-group" value={todoObject.title} hidden/>
<span className="edit-item edit-action-group">(edit)</span>
<span className="remove-item edit-action-group">(remove)</span>
<span className="update-item update-action-group" hidden>(save)</span>
<span className="cancel-item update-action-group" hidden>(cancel)</span>
</div>)


ReactDOM.render(
   <ul>{tasks}</ul> ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

{/* <React.StrictMode>
  <App />
</React.StrictMode> */}