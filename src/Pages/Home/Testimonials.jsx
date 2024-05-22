import SectionTitle from "../../Components/SeactonTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
const Testimonials = () => {
    const [reviews,setReviews]=useState([])
    
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data =>setReviews(data))
        },[])
    return (
        <div className="mt-10">
            <SectionTitle subUnderline={'--What our clients say--'}
             underline={'Testimonials'}>

      </SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
      {
        reviews.map(review =><SwiperSlide key={review._id}>
           <div className="item-center justify-center flex flex-col  space-y-10 ">
           <Rating style={{ maxWidth: 250 }} value={review.rating} readOnly />
           <p>{review.details}</p>
            <h1 className="text-2xl text-yellow-400">{review.name}</h1>
           </div>
        </SwiperSlide>)
      }
      </Swiper>
            
        </div>
    );
};

export default Testimonials;