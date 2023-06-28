import React from 'react'
import data from "./hotProductsData";
import { Link } from 'react-router-dom';
const Hot_Products = () => {
  return (
    <>
    <h3 className='pp-heading'>Hot Products</h3>
   <div className="pp-container grid grid-two-column">
 
    {
        data.map(el =>{
       return (
         <div className="pp-card-container" key={el.id}>
         <div  className='pp-card'>
    
        <img src={el.image} alt={el.image} />
        <h5>{el.name}</h5>
        <button><Link to="/contact_us">Click</Link></button>
        </div>
        </div>
       )
     })
    }
   </div>
  </>
  )
}

export default Hot_Products
