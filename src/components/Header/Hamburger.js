import React from 'react';
import styled from 'styled-components';


const Hamburger = () =>{
  return(
    <StyledHamburger >
    <span>menu</span>
    <div>
    <div className="line"></div>
    <div className="line"></div>
    <div className="line"></div>
    </div>
  
  </StyledHamburger>
  )
}

export default Hamburger;


const StyledHamburger = styled.div`
cursor:pointer;
display:flex;
align-items:center;
font-weight:600;
& .line{
  width:20px;
  height:2px;
  background-color:#000;
  margin:4.5px 12px;
}
& span{
  text-transform:uppercase;
  color:#000;
  font-size:12px;
}
`;

