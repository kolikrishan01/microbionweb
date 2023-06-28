import React from 'react'
import { popularProduct } from './popular_product'
import { Link } from 'react-router-dom'
const Popular_Products = () => {

  return (
   <>
     <h3 className='pp-heading'>Most Popular Products</h3>
    <div className="pp-container grid grid-two-column">
  
     {
      popularProduct.map((el, index)=>{
        return (
          <div className="pp-card-container" key={index}>
          <div  className='pp-card'>
     
         <img src={el.image} alt={el.image} />
         <h5>{el.name}</h5>
         <button><Link to={el.button}>Click</Link></button>
         </div>
         </div>
        )
      })
     }
    </div>
   </>
  )
}

export default Popular_Products
