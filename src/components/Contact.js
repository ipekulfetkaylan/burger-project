import React from 'react';
import bannerImage from "../assets/contactImage.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide' style={{backgroundImage:`url(${bannerImage})`}}></div>
      <div className='rightSide'>
        <h1>Bizimle İletişime Geçin</h1>
        <form>
          <label>Ad Soyad</label>
          <input type="text" placeholder='Ad ve soyad giriniz'/>
          <label>Email</label>
          <input type="email" placeholder='Email giriniz'/>
          <label>Mesajınız</label>
          <textarea rows="6" placeholder='Mesajınız'></textarea>
          <button type='submit'>Gönder</button>
        </form>
      </div>
      
    </div>
  )
}

export default Contact
