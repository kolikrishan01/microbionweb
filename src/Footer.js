import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
const Footer = () => {
  return (
    <>
    <div className='footer-container grid grid-three-column'>
    <div className="footer-links">
    <h2>QUICK LINKS</h2>
  
    <ul className='web-link'>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/company_profile">Company Profile</Link></li>
      <li><Link to="/our_products">Our Products</Link></li>
      <li><Link to="/contact_us">Contact Us</Link></li>
    </ul>
    </div>
    <div className="footer-social-media">
    <h2>SOCIAL MEDIA</h2>
    <div className="footer-icons">
    <BsFacebook className='icon'/>
    <AiFillInstagram className='icon'/>
    <AiOutlineTwitter className='icon'/>
    </div>
    </div>
    <div className="footer-contact">
    <h2>CONTACT DETAILS</h2>
    <ul className='contact-link'>
      <li>E-3/C, Kh. No. - 119, Dwarka Dabri <br />Service Road, Mahavir Enclave, <br />Part-3, New Delhi - 110045, India</li>
      <li>Phone :08037529184</li>
      <li>Mr. R. Kumar (Sales Head)</li>
      <li>Mobile :08037529184</li>
    </ul>
    </div>
    <hr className='line'/><hr /><hr className='line-3'/>
    </div>
 
    </>
  )
}

export default Footer
