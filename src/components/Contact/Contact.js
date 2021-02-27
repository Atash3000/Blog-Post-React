import React from 'react';
import './Contact.css';


function Contact() {
  return (
    <section className='section-contact'>
      <div className="media-container">
        <Icon name='facebook'   link='https://www.facebook.com/'/>
        <Icon name="github"     link='https://github.com/atash3000'/> 
        <Icon name="instagram"  link='https://www.instagram.com/yuniver_1/'/> 
      </div>
    </section>
  )
}

export default Contact


const Icon=(props)=>{
  return(
    <div>
      <a target="_blank" href={props.link}><i className={`fab fa-${props.name}-square social ${props.name}`} ></i></a> 
    </div>
  
  )
}