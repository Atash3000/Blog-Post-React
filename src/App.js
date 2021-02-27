import React from 'react';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import {Route,Redirect} from "react-router-dom";



function App() {
  return (
    <>
      <Header/>
      <Route exact path='/' component={Welcome}/>
      <Redirect to='/' />
    </>
  )
}

export default App;
