import React from 'react'
import images from "./Components/images/microbion_banner-image-1.webp"
import videoBg from "../src/assats/microbion_video.mp4"
import Testimonial from './Testimonial'
import Hot_Products from './Hot_Products'
import Popular_Products from './MostPopuler_Product'
import { Link } from 'react-router-dom'



const Home = () => {
  return (
    <>
      <div className="banner-container">
        <img src={images} alt="" />

      </div>
      <div className="banner-text">
     <p>
      Our aim is to provide the best quality Analyzer like Biochemistry Analyzer, Electrolyte Analyzer,  Hematology Analyzer and many more. at competitive prices.
</p>
      </div>

      <div className="home-section grid grid-two-column">
      <div className="home-section-img home-section-box">
        <img src="https://tiimg.tistatic.com/fm/15396100/static-image.jpg" alt="" />
      </div>
      
      <div className="home-section-text home-section-box">
     <iframe src={videoBg} className='home-section-video'></iframe>
     <p>
Microbion Lifescience Pvt. Ltd. was incorporated in 2020 in New Delhi, Delhi, India, has been formally engaged as Manufacturer, Trader and Supplier of a wide range of Analyzers, Biochemistry Reagents, Hematology Reagents, Staining Chemicals and Rapid cards.</p>
<button><Link to="/company_profile">Read More</Link></button>
      </div>
      
      </div>
<Popular_Products />
  <Testimonial />
<Hot_Products />
    </>
  )
}

export default Home
