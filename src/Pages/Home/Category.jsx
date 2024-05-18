

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';
import img1 from '../../assets/assets/home/slide1.jpg'
import img2 from '../../assets/assets/home/slide2.jpg'
import img3 from '../../assets/assets/home/slide3.jpg'
import img4 from '../../assets/assets/home/slide4.jpg'
import img5 from '../../assets/assets/home/slide5.jpg'
// import required modules
import { Pagination } from 'swiper/modules';
import SectionTitle from '../../Components/SeactonTitle/SectionTitle';
const Category = () => {
    return (
        <div className='mt-10 p-10'>
          <SectionTitle
          subUnderline={'--From 10am to 10pm--'}
          underline={'Order Online'}
          >

          </SectionTitle>
             <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={img1}alt="" />
            <br></br>
            <h3 className='text-4xl  text-center lg:-ml-40  -ml-64 lg:mt-52 mt-80 text-white  drop-shadow-md'>Salads</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src={img2}alt="" />
            <h3 className='text-4xl  text-center lg:-ml-40  -ml-64 lg:mt-52 mt-80 text-white  drop-shadow-md'>Pizza</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img3}alt="" />
            <h3 className='text-4xl  text-center lg:-ml-40  -ml-64 lg:mt-52 mt-80 text-white  drop-shadow-md'>Soups</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src={img4}alt="" />
            <h3 className='text-4xl  text-center lg:-ml-40  -ml-64 lg:mt-52 mt-80 text-white  drop-shadow-md'>Desserts</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src={img5}alt="" />
            <h3 className='text-4xl  text-center lg:-ml-40  -ml-64 lg:mt-52 mt-80 text-white  drop-shadow-md'>Salads</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src={img3}alt="" />
            <h3 className='text-4xl  text-center lg:-ml-40  -ml-64 lg:mt-52 mt-80 text-white  drop-shadow-md'>Soups</h3>
            </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Category;