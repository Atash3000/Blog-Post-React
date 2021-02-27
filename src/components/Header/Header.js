import React from 'react'
import './Header.css';
import Navbar from './Navbar'
import {Route} from "react-router-dom";
import Contact from '../Contact/Contact'


function Header() {
  return (
    <header>
      <Navbar/>
      <Route path="/contact" component={Contact}/>
    </header>
  )
}

export default Header
