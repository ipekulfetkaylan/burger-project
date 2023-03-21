import React from 'react';
import '../styles/Menu.css';
import { Data } from '../helpers/Data'
import MenuItem from './MenuItem';

function Menu() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Burger Menülerimiz</h1>
      <div className='menuList'>
        {
          Data.map((menuItem, index)=>{
            return (
              <MenuItem key={index} image={menuItem.image} name={menuItem.name} content={menuItem.content} price={menuItem.price}/>
            )
          })
        }
      </div>
      
    </div>
  )
}

export default Menu
