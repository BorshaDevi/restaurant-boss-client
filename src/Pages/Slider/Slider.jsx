
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import './styles.css';
import img1 from '../../assets/assets/home/01.jpg'
import img2 from '../../assets/assets/home/02.jpg'
import img3 from '../../assets/assets/home/03.png'
import img4 from '../../assets/assets/home/04.jpg'
import img5 from '../../assets/assets/home/05.png'
import img6 from '../../assets/assets/home/06.png'

// import required modules
import { Autoplay,Pagination } from 'swiper/modules';
const Slider = () => {
    return (
        <div>
              <Swiper pagination={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={true}
               modules={[Autoplay, Pagination]} 
               className="mySwiper">
        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img6} alt="" /></SwiperSlide>
       
      </Swiper>
        </div>
    );
};

export default Slider;