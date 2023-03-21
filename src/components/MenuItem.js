import React from 'react';

function MenuItem({image, name, content, price}) {
  return (
    <div className='menuItem'>
        <div style={{backgroundImage:`url(${image})`}}></div>
        <h1  style={{marginBottom:"5px"}}>{name}</h1>
        <h6 style={{marginTop:"0px"}}>{content}</h6>
        <p style={{color:"red" , fontSize:"22px"}}>{price}</p>
    </div>
  )
}

export default MenuItem
