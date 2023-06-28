import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Testimonial.css"
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import axios from "axios";
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import { Link } from "react-router-dom";
const Testimonial = () => {
  const API = `https://jsonplaceholder.typicode.com/users`;
  const [data, setData] = useState([]);
  const getData = async (url) =>{
    try {
      const res = await axios.get(url)
      const user = await res.data;
      setData(user);
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    getData(API)
  },[])
  return (
    <>
    <div className="swiper-heading">
      <h3>Happy Clients</h3>
    </div>
    <div className="swiper-container">
          <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
       {
        data.map((curElem)=>{
          return (
            <SwiperSlide key={curElem.id}>
           
            <div className="testimonial-container">
          
           
            
            <div className="image">
            <img src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" alt="" />
            </div>
            <div className="testimonial-text">
              <h5>{curElem.username}</h5>
           
             <ImQuotesLeft className="quot-icon"/>
        
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eligendi corporis eaque hic ducimus, exercitationem, ex impedit a dolores itaque veniam veritatis provident, earum tempore officiis dolorem quibusdam laborum placeat?</p>
             
            </div>
           
            </div>
           
            </SwiperSlide>
          )
        })
       }
      </Swiper>
    </div>
    <div className="picture">
    <Link to="/contact_us"><img src="https://tiimg.tistatic.com/catalogs/template85043/contact-ban.jpg" alt="" /></Link>
   
    </div>
    </>
  )
}

export default Testimonial
