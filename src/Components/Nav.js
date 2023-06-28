import React, { useState } from 'react'
import "./Nav.css"
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';
import logo from "./images/mirobionlogo.webp"
import { Link } from 'react-router-dom';

const Nav = () => {
const [menuToggle, setMenuToggle] = useState(false);
  
  return (
  <>
  <div className={menuToggle ? "menu-bar active" : "menu-bar"}>
     <Link to="/"><img src={logo} className='logo' alt="" /></Link>
      <ul className='nav-list-parent nav-toggle'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/company_profile">Company Profile</Link></li>
        <li><Link to="/our_products">Our Products<i className="fas fa-caret-down"></i></Link>
            <div className="dropdown-menu">
                <ul >
                  <li><Link to="/cardsStrips">Cards & Strips</Link></li>
                  <li><a href="#">Portfolio</a></li>
                  <li>
                 <Link to="/equipments">Equipments</Link>
                    
                    <div className="dropdown-menu-1">
                      <ul>
                        <li><a href="#">Team-1</a></li>
                        <li><a href="#">Team-2</a></li>
                        <li><a href="#">Team-3</a></li>
                        <li><a href="#">Team-4</a></li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="#">FAQ</a></li>
                </ul>
              </div>
        </li>
      
        <li><Link to="/contact_us">Contact</Link></li>
    
        <AiOutlineClose className='close-icon' onClick={() => setMenuToggle(false)}/>
      </ul>
      <AiOutlineMenu className='menu-icon' onClick={() => setMenuToggle(true)}/>

    </div>
   

   
  </>
  )
}

export default Nav
