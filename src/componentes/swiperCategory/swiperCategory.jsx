import { Fragment } from "react";
{/*import Swiper from "./swiperCategoryStyled.js";*/}
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';




export default () => {
    return (
        
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Whey Protein </SwiperSlide>
        <SwiperSlide>Pré-treino</SwiperSlide>
        <SwiperSlide>Creatina</SwiperSlide>
        <SwiperSlide>Cafeína</SwiperSlide>
        <SwiperSlide>Cafeína</SwiperSlide>
       
      </Swiper>
    );
  };
  


 {/*
<Swiper>
        Categorias:
        <div className="container-swiper">
        <span>Whey Protein</span>
        <span>Pré-treino</span>
        <span>Creatina</span>
        <span>Cafeína</span>
        <span>Cafeína</span>
        <span>Cafeína</span>
        </div>
        
        </Swiper>

</>



    );
}

export default SwiperCategory;*/}