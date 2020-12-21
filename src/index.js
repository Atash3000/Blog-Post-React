import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const blogPost ={
  title:'my first blogpost',
  published:true
}
let isPublished='';
if(blogPost.published){
  isPublished = 'colorRed'
}else{
  isPublished = 'colorGreen'
}



const element = <h1 className={isPublished}>{blogPost.title}</h1>

ReactDOM.render(
  element,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

{/* <React.StrictMode>
  <App />
</React.StrictMode> */}