import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


export default function SwiperComp() {
  return (
    <Swiper 
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img style={{width : '20%'}} src="images/book.png" alt="" /></SwiperSlide>
      <SwiperSlide><img style={{width : '20%'}} src="images/book2.png" alt="" /></SwiperSlide>
      <SwiperSlide><img style={{width : '20%'}} src="images/book3.png" alt="" /></SwiperSlide>
      <SwiperSlide><img style={{width : '20%'}} src="images/book4.jpg" alt="" /></SwiperSlide>
     
    </Swiper>
  )
}
